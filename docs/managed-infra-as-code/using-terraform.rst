.. _using_terraform:

===============
Using Terraform
===============

What is Terraform?
------------------

    “Terraform is a tool for building, changing, and versioning
    infrastructure safely and efficiently. Terraform can manage existing
    and popular service providers as well as custom in-house solutions.”
    – [Introduction to Terraform](https://www.terraform.io/intro/index.html)

Making changes with Terraform
-----------------------------

Rackspace strongly recommends that all changes be made through CI/CD
tooling, and Terraform should not be run locally except in extreme
cases, especially ``terraform apply``. Because all repositories have a
**.terraform-version** file, and are named appropriately for a specific
AWS account, our tooling will ensure that the correct version of Terraform
is executed against the correct account.

As mentioned in the *Using GitHub* section of this documentation, there
is also a shared repository for Terraform modules you may wish to reuse
across multiple accounts. Rackspace will create "GitHub release" objects in
this repository, which automatically makes tags that we can use to
reference specific modules at specific points in time.

Please see the later part of this document for specific standards
Rackspace recommends when creating Terraform modules and Terraform
configuration.

Where is Terraform state stored?
--------------------------------

Rackspace maintains a separate S3 bucket for storing the Terraform state
of each AWS account. Access to this bucket and its contents is restricted
to the ``Rackspace`` role that Rackspace maintains on every AWS account. By
default, temporary credentials retrieved from your control panel will use
the Rackspace role and automatically have access to this bucket, should
you need it. You can read more about the Rackspace role in the
:ref:`AWS account defaults <account_defaults>` section of this documentation.

In addition, Rackspace stores these buckets in an entirely isolated AWS
account, and implements best practices such as requiring bucket
encryption, access logging, versioning, and preventing accidental public
access. Because S3 bucket names are globally unique, and as part of a
defense-in-depth strategy, we choose an arbitrary, opaque name for this
bucket that cannot be mapped back to an AWS account. We provide the
bucket name in the logged output from each CI/CD job, as well as the full
terraform commands we run, should you want to inspect it or use it to run
Terraform locally.

Grouping state into layers
--------------------------

There are a few different designs employed in the Terraform community for
how to structure your Terraform files, modules, and directories. The
community around Terraform has written
`blog posts <https://opencredo.com/terraform-infrastructure-design-patterns/>`_
and `spoken at HashiConf <https://www.youtube.com/watch?v=wgzgVm7Sqlk>`_
about how these patterns evolve over time; many of the recommendations
focus on how to best group Terraform state. At Rackspace, we've built upon
the existing best practices (e.g. 'module-per-environment') and created a
concept we call *layers* in order to isolate Terraform state.

What is a layer?
^^^^^^^^^^^^^^^^

Put simply, a layer is a directory that is treated as a single Terraform
configuration. It is a logical grouping of related resources that should
be managed together by Terraform. Layers are placed in the **layers/**
directory inside an *Account Repository*. Our automation will perform all
of the usual Terraform workflow steps (init, plan, apply) on each
layer, alphabetically.

In collaboration with experienced Rackers, you should carefully consider
how to logically group the state of your AWS resources into layers; layers
could represent environments like production or test, regions your
application may be hosted in, application tiers like "database" or
"web servers," or even applications that share availability requirements.

Here are some considerations that Rackers will discuss with you when
planning out your environment:

- ensure resources frequently modified together are also grouped together
  in the same layer
- keep layers small, to limit blast radius and ensure refreshing state is
  quick/safe
- keep dependencies between layers simple, as changes must take dependencies
  into consideration manually
- consider reading state from another layer, using a data source; never
  write to another layer's state
- for small environments, consider that a single layer may acceptable, but
  moving resources between layers is hard

Writing and organizing Terraform with modules
---------------------------------------------

Generally,
`Rackspace maintains modules for most common use cases <https://github.com/rackspace-infrastructure-automation/?utf8=%E2%9C%93&q=aws-terraform-&type=&language=/>`_,
and uses these modules to build out your account. If we do not have a
pre-existing module, the next best choice is to use the built-in
``aws_*`` resources offered by the AWS provider for Terraform. Please
let us know if we don't have a module or best practice for building out
a specific resource or AWS product.

A common recommendation in the Terraform community is to think of modules
as functions that take an input and provide an output. Modules can be
built in your shared repository or in your account repositories. If you
find yourself writing the same set of resources or functionality over
and over again, consider building a module instead.

When to consider writing a module:

- When multiple resources should always be used together (e.g. a
  CloudWatch Alarm and EC2 instance, for autorecovery)
- When Rackspace has a strong opinion that overrides default values for
  a resource
- When module re-use remains shallow (don't nest modules if at all possible)

General Terraform Style Guide
-----------------------------

Terraform files should obey the syntax rules for the
`HashiCorp Configuration Language (HCL) <https://github.com/hashicorp/hcl/blob/master/README.md>`_
and
`the general formatting guidelines <https://www.terraform.io/docs/commands/fmt.html>`_
provided by the Terraform Project through the ``fmt`` command.

In addition, Rackspace follows the following standards when writing Terraform:

- Use `Snake Case <https://en.wikipedia.org/wiki/Snake_case>`_ for all
  resource names
- Declare all variables in variables.tf, including a description and type
- Declare all outputs in outputs.tf, including a description
- Pin all modules and providers to a specific version or tag
- Always use relative paths and
  `the file() helper <https://www.terraform.io/docs/configuration/interpolation.html#file-path->`_
- Prefer separate resources over inline blocks (e.g. aws_security_group_rule
  over aws_security_group)
- Always define AWS region as a variable when building modules
- Prefer variables.tf over terraform.tfvars to provide sensible defaults
- Terraform versions and provider versions should be pinned, as
  `it's not possible to safely downgrade a state file <https://github.com/hashicorp/terraform/issues/16879>`_
  once it has been used with a newer version of Terraform

Rackspace Terraform Module Standards
------------------------------------

Rackspace maintains a number of Terraform modules available at
https://github.com/rackspace-infrastructure-automation.
Contributions should follow these guidelines.

- use semantic versioning for shared code and modules
- always point to GitHub releases (over a binary or master) when referencing
  external modules
- always extend, don't re-create resources manually
- parameters control counts, for non-standard numbers of subnets/AZs/etc.
- use overrides to implement Rackspace best practices
- use variables with good defaults for things Rackspace expects to configure
- Modules should use semantic versioning light (Major.minor.0) for AWS
  account repositories
- Modules should be built using the standard files:
  ``main.tf, variables.tf, output.tf``
- Consider writing tests and examples, and shipping them in directories of
  the same name
- Readme files at should contain a description of the module as well as
  documentation of variables. An example of documentation can be found
  `here <https://github.com/rackspace-infrastructure-automation/aws-terraform-vpc_basenetwork/blob/master/README.md>`_.
- The files in ``.circleci`` are managed by Rackspace and should not be
  changed. If you would like to submit a module, please do so without this
  folder.
- The files in ``example`` can be named anything as long as they have ``.tf``
  as the extension.
- The ``tests`` directory must be called ``tests`` and each test must be
  ``test#```. Inside each `test#` folder should be exactly one file
  called ``main.tf``
- Use
  `Github's .gitignore contents for Terraform <https://github.com/github/gitignore/blob/master/Terraform.gitignore>`_.

variables.tf
^^^^^^^^^^^^

This file must include the following code block at the beginning or end
of the file.

.. code::

  variable "environment" {
    description = "Application environment for which this network is being created. one of: ('Development', 'Integration', 'PreProduction', 'Production', 'QA', 'Staging', 'Test')"
    type        = "string"
    default     = "Development"
  }
   variable "tags" {
    description = "Custom tags to apply to all resources."
    type        = "map"
    default     = {}
  }


main.tf
^^^^^^^

This file must include the following code block at the top of the
file. Other variables can be added to this block.

.. code::

  locals {
    tags {
      Name            = "${var.name}"
      ServiceProvider = "Rackspace"
      Environment     = "${var.environment}"
    }
  }


In any resource block that supports ``tags`` the following code should
be used:

.. code::

  tags = "${merge(var.tags, local.tags)}"


This takes the tag values that are in ``variable.tf`` and combines them
with any values defined in ``main.tf`` in the ``locals`` block.

Secrets storage using Terraform
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Rackspace recommends storing secrets for Terraform using AWS KMS; embed
ciphertext values as data sources in Terraform configurations. Here's some
of the specifics and considerations:

- Use ``aws_kms_key`` to create a KMS key for use by Terraform; you should
  apply a key policy that allows IAM roles and users to use the key, because
  federated accounts can't access KMS keys using the default policy
  statements (e.g. most Rackers and Customers):

  .. code::

    resource "aws_kms_key" "terraform_config" {
      description = "terraform_config"
      is_enabled  = true

      policy = <<EOF
      {
        "Version": "2012-10-17",
        "Id": "key-default-1",
        "Statement": [
          {
            "Sid": "Default IAM policy for KMS keys",
            "Effect": "Allow",
            "Principal": {
              "AWS": "arn:aws:iam::123456789012:root"
            },
            "Action": "kms:*",
            "Resource": "*"
          },
          {
            "Sid": "Enable IAM user to perform kms actions as well",
            "Effect": "Allow",
            "Principal": {
              "AWS": "${module.terraform_circleci_iam.circleci_user_arn}"
            },
            "Action": "kms:*",
            "Resource": "*"
          }
        ]
      }
    EOF
    }


- You will need to manually use the AWS CLI (and the key-id for the key you
  created in the previous step) to encrypt your secrets (mind any line
  endings if you use ``file://`` to encrypt):


  .. code::

    $ aws kms encrypt \
        --key-id 438290482-e36a-4803-a7d0-db436278 \
        --plaintext "super_secret" \
        --encryption-context resource=my_database,key=password \
        --output text --query CiphertextBlob


- Equipped with the ciphertext from the previous command, you can now use
  `aws_kms_secrets <https://www.terraform.io/docs/providers/aws/d/kms_secrets.html>`_
  to expose the secret as a data source for further use in Terraform:

  .. code::

    data "aws_kms_secrets" "example" {
      secret {
        # ... potentially other configuration ...
        name    = "master_password"
        payload = "base64secret=="

        context {
          resource = "db01"
          key      = "password"
        }
      }

      secret {
        # ... potentially other configuration ...
        name    = "master_username"
        payload = "base64secret=="

         context {
           resource = "db01"
           key      = "username"
         }
      }
    }

    resource "aws_rds_cluster" "my_database" {
      # ... other configuration ...
      master_password = "${data.aws_kms_secrets.example.plaintext["master_password"]}"
      master_username = "${data.aws_kms_secrets.example.plaintext["master_username"]}"
    }


Note the use of context values; these are used as
`encryption context key pairs <https://docs.aws.amazon.com/kms/latest/developerguide/encryption-context.html>`_
in KMS. These context values can be used by KMS to ensure a specific secret
is always accompanied by the same context values (integrity), and may be
emitted in CloudTrail logs or included in error messages (debugging).

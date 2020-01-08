.. _tf_style:

===========================
Terraform Style Conventions
===========================

.. _tf_concepts:

Key Concepts
------------

**Account Environment**
    A collection of one or more layers defined within
    a single account repository. An account environment describes the
    complete infrastructure deployed for a single customer account.

**Layer**
    A layer is a logical grouping of related resources, data sources, and
    modules that should be managed together by Terraform. Layers are used to
    break complex environments into multiple logical subsets. Each layer
    should independently define configuration for all needed providers.
    Layers can represent different environments within an account, such as
    "production" and "test", different regions a customer application is
    hosted, or application tiers, like "database", "web server", or
    "network". When designing layers, the following considerations should be
    taken:

    - Resources that are frequently modified together should be in the same
      layer, for example an EC2 instance, and its related IAM Role and
      policies should remain in a single layer.

    - Smaller layers will limit blast radius and make Terraform state
      refreshes and updates quicker and safer.

    - Dependencies between layers should always flow one way, taking
      000base, 100data, and 200compute layers as an example, 000base should
      not reference anything in 100data or 200compute, and 100data should
      not reference anything in 200compute.

    - Use a data source (:ref:`tf_code_structure`)
      to read another layer's state. Never write to another layer's state
      directly.

**Module**
    Module is a collection of connected resources which together perform the
    common action (for example,
    `aws-terraform-vpc\_basenetwork <https://github.com/rackspace-infrastructure-automation/aws-terraform-vpc_basenetwork>`__
    module creates VPC, subnets, NAT gateway, etc). It depends on provider
    configuration(s), which should normally be defined at a higher level.
    Rackspace maintains a number of
    `modules <https://github.com/rackspace-infrastructure-automation/aws-terraform-internal/blob/master/README.md#module-list>`__,
    and customer specific modules can be created as needed.

**Resource**
    Resource is ``aws_vpc``, ``aws_db_instance``, and so on. Resource
    belongs to provider, accepts arguments, outputs attributes and
    has lifecycles. Resource can be created, retrieved, updated, and deleted.

**Data Source**
    Data source performs read-only operation and is dependent on provider
    configuration, it can be used in modules and layers to lookup
    information about the Account Environment.

    Data source ``terraform_remote_state`` can be used to output from one
    layer to another (:ref:`tf_code_structure`).
    
    The HTTP data source makes an HTTP GET request to the given URL and
    exports information about the response which is often useful to get
    information from endpoints where native Terraform provider does not
    exist.
    
    .. image:: images/image1.png
       :width: 400
       :alt: AccountLayer Module Relationship Picture

General Terraform Style Guide
-----------------------------

Terraform files should obey the syntax rules for the
`HashiCorp Configuration Language (HCL) <https://github.com/hashicorp/hcl/blob/master/README.md>`__
and
`the general formatting guidelines <https://www.terraform.io/docs/commands/fmt.html>`__
provided by the Terraform Project through the ``fmt`` command.

In addition, Rackspace follows the following standards when writing
Terraform:

1. Use `snake_case <https://en.wikipedia.org/wiki/Snake_case>`__
   (lowercase with
   `underscore <https://en.wikipedia.org/wiki/Underscore>`__ character)
   for all Terraform resource or object names.

2. Variable defaults and arguments:

   -  Declare all variable blocks for a module in
      **variables.tf**, including a description and type

   -  When working within a layer: provide **no** defaults defined in
      **variables.tf** with all variable
      arguments being provided in ``terraform.tfvars``

   -  When working within a module: provide sensible defaults where
      appropriate; defaults can be empty string/list/map where variable
      is optional and being empty is handled gracefully

3. Declare all outputs in **outputs.tf**, including a description.

4. Pin all modules to a specific tag.

5. Pin all providers to major version. (for example, \`\`\`~> 1.2: any non-beta
   version >= 1.2.0 and < 2.0.0, e.g. 1.X.Y\`\`\`).

6. Always use relative paths and
   `the file() helper <https://www.terraform.io/docs/configuration/interpolation.html#file-path->`__.

7. Prefer separate resources over inline blocks (for example,
   ``aws_security_group_rule`` over ``aws_security_group``).

8. Always define AWS region in the provider block.

9. Terraform versions and provider versions should be pinned, as
   `it’s not possible to safely downgrade a state file <https://github.com/hashicorp/terraform/issues/16879>`__
   once it has been used with a newer version of Terraform.

.. _tf_code_structure:

Code Structure
--------------

Terraform Environment Standards
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Customer account repositories should follow the layered style
represented in the sample repository
https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/tree/master/example_3.1

Here are some considerations for building a new customer environment:

1. ``_main`` should be used only for initialisation. Resources should be
   added to newly created layers.

2. Unless there is a logical reason to deviate, the following default
   layers *should* be used. The idea behind the numbered prefixes is
   to deploy lower numbered layers first.

   1. ``000base``: VPC, Endpoints, Route53 Internal Zone, SSM Service Role,
      SNS, Peering, VPN, Transit Gateway, Custom IAM, Directory Service

   2. ``100data``: RDS, DynamoDB, Elasticache, S3, EFS, Elasticsearch

   3. ``200compute``: EC2, LBs, SQS

3. Be sure to update the backend s3 key value in
   **main.tf** for each layer.

4. Security Groups should be defined within the layer in which the
   resource it is to be attached to resides. Take the following into
   consideration when defining security group rules:

   - If the ``source_security_group_id`` is in a previous layer, import
     via remote state

   - If the ``source_security_group_id`` is in the same layer, proceed
     as normal

   - If the ``source_security_group_id`` is in a following layer, the
     rule should be moved into the following layer alongside the source
     group once it is created

5. Leverage data source outputs to reference required information in
   another layer. For example, see
   `Terraform Standards Examples <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/tree/master/example_3.1.4>`_.

6. **README.md** files *must* exist and describe the
   contents of each layer. An example of documentation can be found
   `here for layer modules <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/tree/master/example_3.1/layers/000base>`__. 

   ``terraform-docs`` is a tool to help create the documentation, and can found
   `here <https://github.com/segmentio/terraform-docs>`_.

Terraform Module Standards
^^^^^^^^^^^^^^^^^^^^^^^^^^

Rackspace maintains a number of Terraform modules available at
https://github.com/rackspace-infrastructure-automation . Contributions
should follow these guidelines.

1. When a count is required, use of a variable is strongly recommended
   due to Terraform limitations.

2. When a variable value must be determined during execution, no default
   argument should be set, in all other cases a good default value
   should be included.

   -  eg. ref required

3. Modules should use "semantic versioning" (major.minor.revision)
   for customer shared module repositories. Good release notes should be
   included.

4. Modules *must* include the following files, even if empty:
   **main.tf**, **variables.tf**, and **outputs.tf**.

   - Additional Terraform files can be included in order to
     logically separate resources into multiple files.

5. Modules *must* include an examples directory. If CI\CD testing
   is available, modules should contain a tests directory. Each
   distinct test or example should be placed in a descriptively named
   subdirectory. Subdirectory contents should meet all defined standards.

   For example, see the
   `Terraform Standards Examples <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/tree/master/example_3.2.5>`__.

6. **README.md** files *must* exist and contain a
   description of the module as well as documentation of variables and
   outputs. An example of documentation can be found
   `here for layer modules <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/tree/master/example_3.1/layers/000base>`__. 

   terraform-docs is a tool to help create the documentation, and can
   found `here <https://github.com/segmentio/terraform-docs>`__.
   Version v0.6.0 of terraform-docs is used to generate
   documentation for all Rackspace managed modules.

7. The files in **.circleci** are managed by Rackspace and ***should not***
   be changed. There is no requirement to modify files found
   in **.circleci** when adding an additional module.

8. Use
   `Github’s .gitignore contents for Terraform <https://github.com/github/gitignore/blob/master/Terraform.gitignore>`__.

Getting started with structuring Terraform configurations
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Refer back to the :ref:`tf_concepts` section if you are unsure what each Terraform
structure is for.

Layout
~~~~~~

The following diagram shows how the layer should be structured::

   | layers/
   | ├── _main
   | │   ├── main.tf
   | │   └── variables.tf
   | ├── 000base
   | │   ├── README.md
   | │   ├── main.tf
   | │   ├── outputs.tf
   | │   ├── terraform.tfvars
   | │   └── variables.tf
   | └── 100data
   | |   ├── README.md
   | |   ├── main.tf
   | |   ├── outputs.tf
   | |   ├── terraform.tfvars
   | |   └── variables.tf
   | └── 200compute
   |    ├── README.md
   |    ├── main.tf
   |    ├── outputs.tf
   |    ├── terraform.tfvars
   |    └── variables.tf

The following diagram shows how the modules should be structured::

   | modules/
   | ├── example
   | │   └── main.tf
   | ├── globals
   | │   ├── main.tf
   | │   └── outputs.tf
   | └── s3_cf_website
   |     ├── README.md
   |     ├── examples
   |     │   ├── main.tf
   |     │   └── variables.tf
   |     ├── main.tf
   |     ├── outputs.tf
   |     └── variables.tf


Resource and data source arguments
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Resource names should be descriptive and avoid duplication of the
   resource type, where possible. Shorter resource names should be
   preferred over longer names, if both are descriptive. Duplication of
   resource type in part or whole is preferred over the use of
   non-descriptive names, such as this, that, or thing.

   - **Bad:** resource ``aws_cloudwatch_log_group`` "this" { -
     Non-descriptive resource name

   - **Good:** resource ``aws_cloudwatch_log_group`` "log\_group" { -
     Descriptive resource name

   - **Best:** resource ``aws_cloudwatch_log_group`` "apache" { -
     Descriptive resource name without duplication of resource type.

2. Using singular nouns for names is preferred. If an individual resource
   is commonly referred to in the plural (eg, logs when referring to a
   CloudWatch Log Group), then a plural noun is acceptable.

   - **Good:** file

   - **Good:** bucket

   - **Good:** logs

   - **Bad:** files

3. Include count argument inside resource blocks as the first argument
   at the top and separate by newline after it.

   -  `Good example <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.2.3/good.tf>`__

   -  `Bad example <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.2.3/bad.tf>`__

4. Any **resource property** that **requires multiple lines** should
   fall below all properties that can be defined on a single line. Each
   **resource property** that requires multiple lines should have
   **blank lines** between itself and any other property.

   -  `Good example <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.2.4/good.tf>`__

   -  `Bad example <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.2.4/bad.tf>`__

5. When present, ``depends_on`` and ``lifecycle`` should be the last two
   resource properties defined respectively. Each should be separated by
   a single blank line.

   -  `Good example <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.2.5/good.tf>`__

   -  `Bad example <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.2.5/bad.tf>`__

6. Boolean values should not be used to directly set the value in count.
   Instead, a condition should be used.

   -  **Bad:** ``count = "${var.create_public_subnets}"``

   -  **Good:** ``count = "${var.create_public_subnets ? 1 : 0}"``

   -  **Good:** ``count = "${var.disable_nat_gateway ? 0 : 1}"``

Example Terraform Files
~~~~~~~~~~~~~~~~~~~~~~~

-  `main.tf <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.3/abc_example/main.tf>`__:
   call modules, locals and data-sources to create all resources

-  `variables.tf <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.3/abc_example/variables.tf>`__:
   contains declarations of variables used in **main.tf**

-  `outputs.tf <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.3/abc_example/outputs.tf>`__:
   contains outputs from the resources and modules created in **main.tf**

-  `terraform.tfvars <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.3/abc_example/terraform.tfvars>`__:
   should only be used in layers.

-  `README.md <https://github.com/rackspace-infrastructure-automation/terraform-standards-examples/blob/master/example_3.3.3/abc_example/README.md>`__:
   description of layer or module, including variables and outputs.
   
Secret storage using Terraform
------------------------------

Irrelevant of the strategy used to manage the creation and/or usage of
passwords in Terraform it is important to understand how these are
stored once they are used. Whether you hard code a secret (never to be
done), create it with the Random provider, or decrypt a KMS encrypted
string, the result is that this secret will always be visible in
plaintext in the state file. It is therefore the state file that needs
protecting. It is for this reason that we use remote state backends
within our MIAC models where the storage location can ensure that the
state files are encrypted, and the storage mechanism locked down to only
those that should have access. When working with console managed
customers (AWS primarily) the working practice is to create an AWS S3
bucket to still use an encrypted remote state backend, but with a
lifecycle policy of 30 days so after this time the state will no longer
exist.

It is the state containing these passwords in plaintext - as well as
generally being a very poor, unmanageable, and non-scaleable option -
that makes storing the state files along with the code a very bad idea.

Guidance
^^^^^^^^

Secrets are typically going to fall into one of two categories: they
exist and we need to use them, or they do not exist and we need to
create and use them.

AWS has services built into the fabric that aid us in this endeavour.
There is the AWS Systems Manager Parameter Store which has options to
use KMS encrypted SecureStrings, and there is the AWS Secrets Manager.
By storing the secrets in one of these services we can access them
programmatically in code without needing to hard code them (big tick for
clean code), the customer can add them to the console ahead of us using
them if they already exist, or if we create them via Terraform we can
store them in the console so we need never know them and the customer
can retrieve them post deployment. In the case of AWS Secrets Manager it
also opens the option of using automatic credential rotation.

If you are needing to create a password/secret (RDS password, AD
password, token for CloudFront header, etc.) you can use the Terraform
random provider:
https://www.terraform.io/docs/providers/random/index.html

This is a basic use of the random provider to create a random string:

**Secrets - Random String**::

   provider "random" {
     version = "~> 2.1"
   }

   resource "random_string" "rds_password" {
     length = 20
     lower = true
     upper = true
     number = true
     special = false
   }

This example will give us a 20 character string containing upper- and
lowercase alphanumerical characters. You can then use the output of this
in other resources including the password argument of a RDS module call,
or the value of an AWS SSM Parameter Store parameter. The next example
shows creating, storing, and using the password (shortened for brevity).

**Secrets - Random String Store and Use**::

   provider "aws" {
     version = "~> 2.20"
   }

   provider "random" {
     version = "~> 2.1"
   }

   resource "random_string" "rds_password" {
     length = 20
     lower = true
     upper = true
     number = true
     special = false
   }

   resource "aws_ssm_parameter" "rds_password" {
     name = "${lower(var.environment)}-rds-password"
     type = "SecureString"
     value = "${random_string.rds_password.result}"
     tags = "${local.tags}"
   }

   module "rds" {
     source = "git@github.com:rackspace-infrastructure-automation/aws-terraform-rds//?ref=v0.0.11"

   [..]
   password = "${random_string.rds_password.result}"
   [..]

   }

This example takes our random string and adds it to an AWS SSM parameter
as a SecureString and then uses it as the input to the password argument
in the RDS module. The same pattern would work for a password for Active
Directory. The same pattern would work for adding a header to a
CloudFront distribution that must be injected to allow traffic to a
backend website bucket. It is flexible and secure and does not require
you to work outside of Terraform code to implement.

This is a clean method for creating random strings and you can check the
provider documentation if you wanted to make the strings more secure by
changing length, adding symbols, etc.

Some in the security community would recommend using random words rather
than more traditional patterns; for completeness here is an example of
that:

**Secrets - Random Pet**::

   $ cat example.tf

   provider "random" {
     version = "~> 2.1"
   }

   resource "random_pet" "pet" {
     count = 5
     
     length = "${count.index + 1}"
     separator = ""
   }

   output "pets" {
     value = "${random_pet.pet.*.id}"
   }

   $ terraform output
   pets = [
   katydid,
   summaryliger,
   mainlyexcitinggrubworm,
   merelygentlysteadycub,
   openlypresumablylikelyblessedpeacock
   ]

There could be occurrences where a customer wants to provide a password
or wants a specific pattern that we can't capture in code (because, as
we have said, that's bad code).

As well as creating resources in AWS SSM Parameter Store we can also
pull values from the store as well. Using our RDS example, here we can
pull the password value and pass this into our RDS module:

**Secrets - Data SSM Parameter**::

   provider "aws" {
     version = "~> 2.20"
   }

   data "aws_ssm_parameter" "rds_password" {
     name = "customer-provided-rds-password"
   }
   module "rds" {
     source = "git@github.com:rackspace-infrastructure-automation/aws-terraform-rds//?ref=v0.0.11"

   [..]
   password = "${data.aws_ssm_parameter.rds_password.value}"
   [..]
   }

The examples so far have focused on AWS SSM Parameter store but we can
also use AWS Secrets Manager. In the next two examples we use an
existing secret, and we store a new secret. In the first example we are
using the current version of the person and we look up the password by
the name which works where the secret is in the same account and region,
otherwise you need to use the arn argument as documented here:
https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html .

**Secrets - Data Secrets Manager**::

   provider "aws" {
     version = "~> 2.20"
   }

   data "aws_secretsmanager_secret" "rds_password" {
     name = "customer-provided-rds-password"
   }

   data "aws_secretsmanager_secret_version" "rds_password" {
     secret_id = "${data.aws_secretsmanager_secret.rds_password.id}"
   }

   module "rds" {
     source = "git@github.com:rackspace-infrastructure-automation/aws-terraform-rds//?ref=v0.0.11"

   [..]
   password = "${data.aws_secretsmanager_secret_version.rds_password.secret_string}"
   [..]
   }

**Secrets - Secrets Manager Store and Use**::

   provider "aws" {
     version = "~> 2.20"
   }

   provider "random" {
     version = "~> 2.1"
   }

   resource "random_string" "rds_password" {
     length = 20
     lower = true
     upper = true
     number = true
     special = false
   }

   resource "aws_secretsmanager_secret" "rds_password" {
     name                    = "${lower(var.environment)}-rds-password"
     recovery_window_in_days = 7

     tags = "${local.tags}"
   }

   resource "aws_secretsmanager_secret_version" "rds_password" {
     secret_id = "${aws_secretsmanager_secret.rds_password.id}"
     secret_string = "${random_string.rds_password.result}"
   }

   module "rds" {
     source = "git@github.com:rackspace-infrastructure-automation/aws-terraform-rds//?ref=v0.0.11"

     [..]
     password = "${random_string.rds_password.result}"
     [..]
   }

Deprecated Guidance
^^^^^^^^^^^^^^^^^^^

.. note::
   
   The following information was the guidance given to customers
   and Rackers in the original Phoenix documentation. While this is still
   a valid solution it is cumbersome for all involved. The information in
   the above subsection should be considered the preferred route to take
   when dealing with secrets.

Rackspace recommends storing secrets for Terraform using AWS KMS; embed
ciphertext values as data sources in Terraform configurations. Here’s
some of the specifics and considerations:

-  Use ***aws\_kms\_key*** to create a KMS key for use by Terraform; you
   should apply a key policy that allows IAM roles and users to use the
   key, because federated accounts can’t access KMS keys using the
   default policy statements (e.g. most Rackers and Customers):

**Example aws\_kms\_key**::

   resource "aws_kms_key" "terraform_config" {
     description = "terraform_config"
     is_enabled = true

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
           "Action": "kms:"*",
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

You must manually use the AWS CLI (and the key-id for the key
you created in the previous step) to encrypt your secrets (mind any
line endings if you use ``file://`` to encrypt):

**Example aws kms encrypt**::

   $ aws kms encrypt \
       --key-id 438290482-e36a-4803-a7d0-db436278 \
       --plaintext "super_secret" \
       --encryption-context resource=my_database,key=password \
       --output text --query CiphertextBlob

Equipped with the ciphertext from the previous command, you can now use
`aws\_kms\_secrets <https://www.terraform.io/docs/providers/aws/d/kms_secrets.html>`__
to expose the secret as a data source for further use in Terraform.

**Example aws\_kms\_secrets**

   data "aws_kms_secrets" "example" {
     secret {
       # ... potentially other configuration ...
       name = "master_password"
       payload = "base64secret=="
       
       context {
         resource = "db01"
         key = "password"
       }
     }
     
     secret {
       # ... potentially other configuration ...
       name = "master_username"
       payload = "base64secret=="
       
       context {
         resource = "db01"
         key = "username"
       }
     }
   }

   resource "aws_rds_cluster" "my_database" {
     # ... other configuration ...
     master_password = "${data.aws_kms_secrets.example.plaintext["master_password"]}"
     master_username = "${data.aws_kms_secrets.example.plaintext["master_username"]}"
   }

-  Note the use of context values; these are used as
   `encryption context key pairs <https://docs.aws.amazon.com/kms/latest/developerguide/encryption-context.html>`__
   in KMS. These context values can be used by KMS to ensure a specific
   secret is always accompanied by the same context values (integrity),
   and may be emitted in CloudTrail logs or included in error messages
   (debugging).

Appendix
--------

Article History
^^^^^^^^^^^^^^^

+-------------------+-------------------------------+
| **Approved on**   | **Activity**                  |
+===================+===============================+
| 20 Feb 2019       |  updating content for Draft   |
+-------------------+-------------------------------+
|                   |                               |
+-------------------+-------------------------------+
|                   |                               |
+-------------------+-------------------------------+

**Approved by**

+------------+------------------+
| **Name**   | **Department**   |
+============+==================+
|            |                  |
+------------+------------------+
|            |                  |
+------------+------------------+

Reference Resources
^^^^^^^^^^^^^^^^^^^

+-------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------+
| **Source**                                                                    | **URL**                                                                                                        |
+===============================================================================+================================================================================================================+
| Fanatical Support for AWS Product Guide                                       |  https://manage.rackspace.com/aws/docs/product-guide/miac/using-terraform.html#general-terraform-style-guide   |
+-------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------+
|  `Terraform Best Practices <https://www.terraform-best-practices.com/>`__   |  https://www.terraform-best-practices.com/                                                                     |
+-------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------+
|                                                                               |                                                                                                                |
+-------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------+


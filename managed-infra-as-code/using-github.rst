.. _using_github:

============
Using GitHub
============

Rackspace-wide projects containing documentation and/or reusable code to
build your infrastructure are
`public and available <https://github.com/rackspace-infrastructure-automation?type=public>`_
in the
`rackspace-infrastructure-automation <https://github.com/rackspace-infrastructure-automation>`_
organization on GitHub.com. These repositories generally start with a
``rackspace-`` or ``aws-`` prefix to let you know that they are public,
shared, and maintained by Rackspace.

If you'd like to have access to the repositories that house your
infrastructure code, please make a request with your Support team and
provide your GitHub.com username and the level of access you would like to
have (read, or read-write). Note that all members of the
`rackspace-infrastructure-automation <https://github.com/rackspace-infrastructure-automation>`_
organization must have
`two-factor authentication <https://help.github.com/en/articles/securing-your-account-with-two-factor-authentication-2fa>`_
enabled for their GitHub.com account. Once your Support team receives the
request, they will create an invitation that you will need to accept to
finish the process of getting access. You may accept this invitation through
a link sent to you by email, or by simply going to the repository URL
provided by our internal team.

In the event that a user's GitHub.com access needs to be revoked – for
example, when an employee leaves the company – please also make a request
with your Support team, and they can remove this user from the organization.

My Repositories
---------------

Once you have access through the process above, you'll find two main types
of repositories in GitHub.com under the
`rackspace-infrastructure-automation <https://github.com/rackspace-infrastructure-automation>`_
organization, in addition to the reusable code mentioned above:

1. *Shared Repository*: These are repositories that are shared across all
   of your accounts in AWS. These are typically reusable Terraform modules
   that can be applied to more than one AWS account. These start with your
   customer number, mention the specific cloud provider, and contain a human
   readable ending. They are unique to you as a customer, and can't be seen
   by other customers.

   Unless you have managed services across multiple clouds with Rackspace, you
   will normally only have one 'shared' repository.

   Example: ``12345-aws-LargeCorp``

2. *Account Repository*: These are repositories that map directly to an AWS
   account. They house Terraform files that are used to directly test and
   deploy infrastructure in that specific account. These start with your
   customer number, mention the specific AWS account, and contain a human
   readable ending. They map directly to the Aviator, Infrastructure as
   Code accounts we manage for you.

   Examples: ``12345-aws-9876541-Production1``, ``12345-aws-9876541-Test1``,
   ``12345-aws-9876541-Dev1``

Branches, forks, and pull requests
----------------------------------

Rackspace employs continuous integration and delivery (CI/CD) to deploy
your infrastructure based on the ``master`` branch of your repository.
Therefore, the ``master`` branch should always reflect a consistent,
deployable, and current expected state of your infrastructure. The
``master`` branch is also protected from unreviewed changes, and should only
be modified through a pull request process.

Other branches should be short-lived, and used to propose changes using a
pull request into ``master``. Branches from forks will not be built
(tested or deployed), and we recommend you simply push to a branch inside
the main repository. When the shared repository contains code or files
needed by an account repository, Rackspace employs tags using the
"GitHub release" mechanism.

Repository layout
-----------------

Here is a graphical representation of what you can expect to find in your
repository. Not all directories and files may be present in all types of
repositories. Below, you'll find an explanation of what each item is.

.. code::

  - README.md
  - .circleci/config.yml
  - .terraform-version
  - docs
  - layers/_main/main.tf
  - modules/example/main.tf


- **README.md** and **docs/**: All repositories are created with a default
  readme file and documentation directory. This is used for any documentation
  or reference material that you wish. Rackers working on your requests will
  be able to refer to this material as needed.

- **.circleci/config.yml**: This file configures the CI/CD system with
  specific workflow steps to execute, and a defines a container in which to
  run them. This file should not be modified except through coordination
  with Rackspace.

- **.terraform-version**: This file is used by our tooling and automation
  to call
  `Terraform Version Manager (tfenv) <`https://github.com/Zordrak/tfenv>`_,
  which ensures only a specific, intended version of the Terraform CLI will
  be used when building and deploying your infrastructure.

- **layers/**: This directory will be present on *Account Repositories*, and
  contains different groupings of Terraform files that make up one 'state'.
  When your infrastructure is deployed, only layers that contain changes
  will be tested and deployed. A more detailed explanation of this design
  can be found on the Terraform section of this guide.

- **modules/**: This directory will be present on your *Shared Repository*
  and contains Terraform modules intended to be reused.


Note that if you run Terraform locally, you may also see a **.terraform**
directory. This contains configuration and data that should not be
committed to the repository. This ensures our build process always fetches
the latest providers, modules, and state configuration needed to build
your environment.

.. _using_github:

============
Using GitHub
============

Rackspace-wide projects containing documentation and reusable code to
build your infrastructure are
`public and available <https://github.com/rackspace-infrastructure-automation?type=public>`_
in the
`rackspace-infrastructure-automation <https://github.com/rackspace-infrastructure-automation>`_
organization on GitHub.com. These repositories generally start with a
``rackspace-`` or ``aws-`` prefix to let you know that they are public,
shared, and maintained by Rackspace.

If you want access to the repositories that house your
infrastructure code, send a request to your Support team and
provide your **GitHub.com** username and the level of access you need
(read or read-write). Note that all members of the
`rackspace-infrastructure-automation <https://github.com/rackspace-infrastructure-automation>`_
organization must have enabled
`multifactor authentication <https://help.github.com/en/articles/securing-your-account-with-two-factor-authentication-2fa>`_
for their GitHub.com account. After your Support team receives the
request, they create an invitation that you need to accept to
finish the process of getting access. You can accept this invitation through
a link sent to you by email or by going to the repository URL
provided by our internal team.

If we need to revoke a user's GitHub.com access, send a request to your
Support team so they can remove this user from the organization. One
such example would be when an employee leaves your company.

My Repositories
---------------

After you have access, you can find two main types of repositories in
**GitHub.com** under the
`rackspace-infrastructure-automation <https://github.com/rackspace-infrastructure-automation>`_
organization:

1. **Shared Repository**: We share these are repositories across all
   of your accounts in AWS. These are typically reusable Terraform modules
   that we can apply to more than one AWS account. These start with your
   customer number, mention the specific cloud provider, and contain a
   human-readable ending. They are unique to you as a customer, and other
   customers can't see them.

   Unless you have managed services across multiple clouds with Rackspace, you
   normally have only one shared repository.

   Example: ``12345-aws-LargeCorp``

2. **Account Repository**: These repositories map directly to an AWS
   account. They house Terraform files that we use to test and deploy infrastructure
   directly in that specific account. These start with your customer
   number, mention the specific AWS account, and contain a human-readable
   ending. They map directly to the Infrastructure as Code accounts we manage
   for you.

   Examples: ``12345-aws-9876541-Production1``, ``12345-aws-9876541-Test1``,
   ``12345-aws-9876541-Dev1``

Branches, forks, and pull requests
----------------------------------

Rackspace employs continuous integration and delivery (CI/CD) to deploy
your infrastructure based on the ``master`` branch of your repository.
Therefore, the ``master`` branch should always reflect a consistent,
deployable, and current expected state of your infrastructure. Because the
``master`` branch is also protected from unreviewed changes, we
only use the pull request process to modify it.

Other branches should be short-lived, so we use them to propose changes by
using a pull request into ``master``. The process does not build branches
from forks (tested or deployed), so we recommend you push to a branch inside
the main repository. When the shared repository contains code or files
needed by an account repository, Rackspace employs tags by using the
*GitHub release* mechanism.

Repository layout
-----------------

The following list of files shows what you can expect to find in your
repository, but some types of repositories might not have all directories
and files: 

.. code::

  - README.md
  - .circleci/config.yml
  - .terraform-version
  - docs
  - layers/_main/main.tf
  - modules/example/main.tf

Following is an explanation of each item:

- **README.md** and **docs/**: All repositories start with a default
  readme file and documentation directory, which we use for any documentation
  or reference material. Rackers working on your requests can refer to this
  material as needed.

- **.circleci/config.yml**: This file configures the CI/CD system with
  specific workflow steps to execute and a defines a container in which to
  run them. You should not modify this file unless you coordinate
  with Rackspace.

- **.terraform-version**: Our tooling and automation uses this file to call
  `Terraform Version Manager (tfenv) <`https://github.com/Zordrak/tfenv>`_.
  This process ensures that we use only a specific, intended version of the
  Terraform CLI when building and deploying your infrastructure.

- **layers/**: *Account Repositories* have this directory, which
  contains different groupings of Terraform files that make up one *state*.
  When we deploy your infrastructure, we test and deploy only layers that
  contain changes. You can find a more detailed explanation of this design
  in the Terraform section of this guide.

- **modules/**: Your *Shared Repository* has this directory, which
  contains Terraform modules intended for reuse.

If you run Terraform locally, you might also see a **.terraform**
directory. This contains configuration and data that you should not
commit to the repository. This ensures our build process always fetches
the latest providers, modules, and state configuration needed to build
your environment.

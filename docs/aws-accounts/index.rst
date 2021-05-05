.. _aws_accounts:

============
AWS Accounts
============

Each Rackspace account can house one or more AWS accounts. By default, you
can create up to five new AWS accounts via the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_.
If you need more than five accounts, please open a ticket to request a
limit increase.  In addition to creating new AWS accounts, you may also
:ref:`transfer existing AWS accounts <transferring_existing_aws_accounts>`
to Rackspace for management.

Each AWS account provides a top-level administrative control boundary for the
resources that are a part of it. While it is possible to leverage Amazon's
Identity and Access Management (IAM) platform to isolate certain resource
access, we typically recommend provisioning an AWS account per application
deployment phase (e.g. development, staging, and production), thereby allowing
you to assign different users in your organization access to one or more of
the accounts without complex IAM policies. In this example, developers could
be granted access to provision EC2 instances, RDS databases, etc. in your
development and staging accounts, but be restricted to read access of the
resources in your production account.

In addition to being a strong permission boundary, AWS accounts also provide
a convenient construct for tracking expenses, since by default, both AWS and
Rackspace charges are grouped by AWS account. For example, if 4 separate AWS
accounts are used called app1-dev, app1-prod, app2-dev, app2-prod, it is very
easy to see how much is being spent on each application environment. We highly
encourage the use of tagging for more fine grained tracking of expenses within
accounts, but tagging is more complicated, certain resources may be missing
tags resulting in unallocated cost, and not all AWS resource types support
tagging. AWS accounts provide a great default cost allocation construct.

Lastly, using separate AWS accounts per environment gives you the flexibility
to select different Rackspace :ref:`service levels <service_levels>` for each
environment, since Rackspace service levels are applied at the AWS account
level. For example, you may opt for the Navigator service level on your
development account while using the Aviator service level for your production
environment.

As is described later in this document, several Fanatical Support for AWS
features (such as :ref:`Rackspace Logbook <logbook>`) are available in both
cross-account and account-specific views, enabling unified visibility across
multiple AWS accounts.


.. toctree::
   :maxdepth: 1

   account-defaults.rst
   transferring-existing-aws-accounts.rst
   offboarding.rst
   aws-root-credentials.rst

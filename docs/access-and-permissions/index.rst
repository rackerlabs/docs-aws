.. _access_and_permissions:

======================
Access and Permissions
======================

Controlling access and permissions to the Rackspace and AWS control planes
(APIs and UIs) along with the resources you deploy at AWS are a critical
part of the overall security of your environment. This section outlines
several core concepts related to access and permissions, along with
details on how to grant members of your team and others access to your
account, as needed.

.. _rackspace_account:

=================
Rackspace Account
=================

Your Rackspace account is the top-level container which contains one or
more AWS accounts. All user and permissions management takes place at the
Rackspace account level, though you can limit specific users on your
account to only have access to specific AWS accounts. The Rackspace account
is also used for billing purposes. All charges from each of the AWS
accounts are
:ref:`aggregated at the Rackspace account level <billing_rackspace_account>`.

The Account Owner or a user with the Account Administrator designation can
set the session inactivity timeout for the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_.
To change the timeout, visit
`account.rackspace.com <https://account.rackspace.com>`_, and then navigate
to Account Settings > Rackspace Account Settings > Session Inactivity Timeout.
The session inactivity timeout is the maximum time a user can be inactive
before being automatically logged out. This timeout is applied to all users
on the account.

.. _aws_console:

===========
AWS Console
===========

Once you have logged in to the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
you will see a listing of all AWS accounts you have access to.

If you wish to access the AWS Console you can click the
"Log in to AWS Console" button and you will be automatically signed in as
a federated user. This allows you to maintain one set of credentials to
access both the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
and the AWS Console. As described in the
:ref:`User Management and Permissions section <user_management_and_perms>`
the access a user will receive when they federate to the AWS Console will
be determined by the AWS IAM Role selected when configuring the user's
permissions.

The Account Owner can set the AWS console session duration, which controls
the maximum session time for a user who logs into the AWS console from
the `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_.
To change the timeout, visit
`account.rackspace.com <https://account.rackspace.com>`_, and then
navigate to Account Settings > Product Preferences > AWS Account Preferences
> AWS Account - AWS Console Session Duration. This maximum limit is applied
to all users on the account.

.. _aws_cli_sdk_api:

=======================
AWS CLI, SDKs, and APIs
=======================

There are two methods for accessing the AWS command-line interface
(CLI), software development kits (SDKs), and application programming
interfaces (APIs):

1. From the `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_,
   navigate to the Account Details screen for the AWS account you would like
   to access and click the View Credentials button. You will be issued AWS
   Security Token Service (STS) credentials that are valid for up to
   60 minutes and are scoped to the same level of permissions as if you were
   to federate to the AWS Console. This is the preferred method of
   short-lived, infrequent access as access to the credentials is tied to
   your Fanatical Support for AWS user and is logged in the
   :ref:`Rackspace Logbook <logbook>`.

2. If you require longer-lived, more persistent access to the CLI, SDKs, or
   APIs you should create an IAM user with access keys (if the access will
   be from a user's workstation) or an IAM instance role (if the access will
   be from resources, such as EC2 instances, running at AWS). Note that
   directly-created IAM users or roles are not managed within the Fanatical
   Support for AWS user management system, and therefore modifying or
   terminating access must be done directly within AWS IAM.

If you need assistance determining which option is best for your specific
use case, please :ref:`contact a Racker <support>`.

.. _aws_iam:

========================================
AWS Identity and Access Management (IAM)
========================================

As described earlier, our standard best practice is to manage all access as
either:

* Users within the
  `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_

* IAM Roles for AWS resources, such as EC2 instances, requiring access
  to other AWS services

Occasionally, a use case will arise where it is necessary to directly
create an IAM user or role. These scenarios typically involve a third-party
tool or SaaS needing access to your account, such as a continuous
integration and deployment system like CircleCI or a local file management
application that integrates with S3 such as Cyberduck. If you must create
a user or role directly within IAM, please remember the following:

* The IAM policy that you assign should be created to allow the minimum
  level of access required to your AWS account. If you need assistance with
  creating the appropriate IAM policy, please :ref:`contact us <support>`.

* IAM users and roles are managed outside of the
  `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
  and will not show up in the User Management system. Therefore, any
  modifications or revocation of access must also be performed directly
  within AWS IAM.

* A default IAM password policy is included in our
  :ref:`AWS account defaults <account_defaults>`. We do not recommend
  weakening or disabling these requirements, as they are put in place to
  protect your account from brute-force password attacks.

* An IAM user should typically have password access or access keys, but
  not both. Password access is used for accessing the AWS Console
  (and most of these use cases should be covered under the
  `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
  permissions model) and access keys are used for programmatic access.
  In almost all cases where you are creating an IAM user, only access keys
  should be required.

For assistance in determining the appropriate method of granting access
to your account, please :ref:`contact us <support>`.

.. _aws_systems_manager:

=======================================
AWS Systems Manager EC2 Session Manager
=======================================

AWS accounts managed by Rackspace require the use of the AWS Systems
Manager Agent for operating system support.

AWS Systems Manager Session Manager may be used to provide shell access
to Operating Systems via the AWS console or CLI. You can learn more about
Session Manager at:
`<https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html>`_.

It should be noted that use of AWS Session Manager will result in commands
being executed under a shared user account (ssm-user) within the
Operating System. This user will persist even if the SSM agent is
removed. Customers with specific compliance or internal security policies
should consult with their compliance personnel on whether Session Manager
is appropriate for their use. For compliance information from AWS,
see: `<https://aws.amazon.com/compliance/services-in-scope/>`_.

Rackspace recommends customers secure their Rackspace and AWS accounts
with 2-factor authentication. Customers may restrict their personnel's
usage of AWS Session Manager via AWS IAM.

Rackspace personnel may use Session Manager as needed to perform
administrative tasks. :ref:`AWS account defaults <account_defaults>`.
ensure any Rackspace usage of AWS Systems Manager and its associated
features is logged in AWS CloudTrail.

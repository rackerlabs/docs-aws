.. _access_and_permissions:

======================
Access and permissions
======================

Controlling access and permissions to the Rackspace and AWS control planes
(APIs and UIs) along with the resources you deploy at AWS are a critical
part of the overall security of your environment. This section outlines
several core concepts related to access and permissions, along with
details on how to grant members of your team and others access to your
account, as needed.

.. _rackspace_account:

=================
Rackspace account
=================

Your Rackspace account is the top-level container that contains one or
more AWS accounts. All user and permissions management occurs at the
Rackspace account level, though you can limit specific users on your
account to have access to only specific AWS accounts. You calso use the
Rackspace account for billing purposes. All charges from each of the AWS
accounts are
:ref:`aggregated at the Rackspace account level <billing_rackspace_account>`.

The Account Owner or a user with the Account Administrator designation can
set the session inactivity timeout for the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_.
To change the timeout, visit
`account.rackspace.com <https://account.rackspace.com>`_ and then navigate
to **Account Settings > Rackspace Account Settings > Session Inactivity Timeout**.
The session inactivity timeout is the maximum time a user can be inactive
before being automatically logged out. This timeout applies to all users
on the account.

.. _aws_console:

===========
AWS Console
===========

After you log in to the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_,
you see a listing of all AWS accounts you can access.

If you want to access the AWS Console, click **Log in to AWS Console**,
which automatically signs you in as a federated user. This allows you to
maintain one set of credentials to access both the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
and the AWS Console. As described in the
:ref:`User Management and Permissions section <user_management_and_perms>`,
the IAM Role selected when configuring the user permissions determines
the access users receive when they federate to the AWS Console.

The Account Owner can set the AWS console session duration, which controls
the maximum session time for a user who logs into the AWS console from
the `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_.
To change the timeout, visit
`account.rackspace.com <https://account.rackspace.com>`_, and then
navigate to ** Account Settings > Product Preferences > AWS Account Preferences
> AWS Account - AWS Console Session Duration**. This maximum limit applies
to all users on the account.

.. _aws_cli_sdk_api:

=======================
AWS CLI, SDKs, and APIs
=======================

There are two methods for accessing the AWS command-line interface
(CLI), software development kits (SDKs), and application programming
interfaces (APIs):

1. From the `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_,
   navigate to the **Account Details** screen for the AWS account you want
   to access and click **View Credentials**. The system issues you AWS
   Security Token Service (STS) credentials that are valid for up to
   60 minutes and are scoped to the same level of permissions as if you were
   to federate to the AWS Console. This preferred method of
   short-lived, infrequent access to the credentials is tied to
   your Fanatical Support for AWS user and is logged in the
   :ref:`Rackspace Logbook <logbook>`.

2. If you require longer-lived, more persistent access to the CLI, SDKs, or
   APIs, use one of the following options:
   
   - If the access is from a user's workstation, create an IAM user with access keys.
   - If the access is from resources, such as EC2 instances, running at AWS, create
     an IAM instance role (). 
     
   **Note**: You do not manage directly-created IAM users or roles within the
   Fanatical Support for AWS user management system. Instead, you must modify
   or terminate access directly within AWS IAM.

If you need assistance determining the best option for your specific
use case, :ref:`contact a Racker <support>`.

.. _aws_iam:

========================================
AWS Identity and Access Management (IAM)
========================================

As described previously, our standard best practice is to manage all access as
either:

- Users within the
  `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_

- IAM Roles for AWS resources, such as EC2 instances, requiring access
  to other AWS services

Occasionally, a use case occurs where you need to directly
create an IAM user or role. These scenarios typically involve a third-party
tool or SaaS needing access to your account, such as a continuous
integration and deployment system, such as CircleCI, or a local file management
application that integrates with S3, such as Cyberduck. If you must create
a user or role directly within IAM, remember the following recommendations:

- You should create the IAM policy that you assign to allow the minimum
  level of access required to your AWS account. If you need assistance with
  creating the appropriate IAM policy, :ref:`contact us <support>`.

- You manage IAM users and roles outside of the
  `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_,
  and they do not show up in the User Management system. Therefore, you make
  any modifications or revoke access directly within AWS IAM.

- We include a default IAM password policy in our
  :ref:`AWS account defaults <account_defaults>`. We do not recommend
  weakening or disabling these requirements, because we put them in place to
  protect your account from brute-force password attacks.

- An IAM user should typically have password access or access keys, but
  not both. Use password access for accessing the AWS Console
  (we cover most of these use cases under the
  `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
  permissions model) and access keys for programmatic access.
  In almost all cases where you are creating an IAM user, you should need
  only access keys.

For assistance in determining the appropriate method of granting access
to your account, :ref:`contact us <support>`.

.. _aws_systems_manager:

=======================================
AWS Systems Manager EC2 Session Manager
=======================================

AWS accounts managed by Rackspace require the use of the AWS Systems
Manager Agent for operating system support.

YOu can use the AWS Systems Manager Session Manager to provide shell access
to Operating Systems through the AWS console or CLI. You can learn more about
Session Manager at:
`<https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html>`_.

Note that using the AWS Session Manager results in commands
executed under a shared user account (**ssm-user**) within the
Operating System. This user persists even if the SSM agent is
removed. Customers with specific compliance or internal security policies
should consult with their compliance personnel on whether Session Manager
is appropriate for their use. For compliance information from AWS,
see: `<https://aws.amazon.com/compliance/services-in-scope/>`_.

Rackspace recommends customers secure their Rackspace and AWS accounts
with multifactor authentication. Customers may restrict their personnel's
usage of AWS Session Manager through AWS IAM.

Rackspace personnel may use Session Manager as needed to perform
administrative tasks. :ref:`AWS account defaults <account_defaults>`
ensure that the system logs any Rackspace use of AWS Systems Manager
and its associated features in AWS CloudTrail.

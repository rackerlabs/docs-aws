.. _v2_permissions:

Permissions
===========

.. note::

   This behavior applies specifically to Passport v2 and represents a change in
   how permissions work. The original Passport tool for AWS did not require an
   IAM policy to use Passport.


Passport relies on two settings to determine which instances a user can access
with Passport. First, the user must have their Fanatical Support for AWS
permission for an AWS account set to "Admin". If the permission is set to either
"Observer" or "None", the user will not have access to any instances in that AWS
account. Second, the user must have an IAM policy that allows the
``ssm:StartSession`` and ``ssm:TerminateSession`` action to be performed against
the target instance. This setting allows you to choose which instances within an
AWS account a user will have access to. Together, these two settings give you
granular control over which instances can be accessed using Passport.

There are several IAM policies available out of the box that are commonly used
with Passport:

* **AdministratorAccess** grants full access to all AWS resources and will
  allow a user to access any instance in the account using Passport.
* **PowerUserAccess** grants access to non-IAM AWS resources. It will allow a
  user to access any instance in the account using Passport.
* **AmazonSSMFullAccess** grants access to all actions and resources within
  AWS Systems Manager. It will allow a user to access any instance in the
  account using Passport.
* **RackspacePassportOnly** grants ``ssm:StartSession`` and
``ssm:TerminateSession`` on all instances. It will
  allow a user to access any instance in the account using Passport, but the
  user won't have any other permissions in the AWS console.
* **RackspaceReadOnlyWithPassport** grants read-only access to most AWS
  resources as well as ``ssm:StartSession`` and ``ssm:TerminateSession`` on all
  instances. It will allow a user to access any instance in the account using
  Passport.

Additionally, you can define custom IAM policies that allow you to further
restrict which instances can be accessed within an AWS account. See
`Additional Sample IAM Policies for Session Manager <https://docs.aws.amazon.com/systems-manager/latest/userguide/getting-started-restrict-access-examples.html>`_
for more information on how to use IAM policies to limit access to certain
instances.

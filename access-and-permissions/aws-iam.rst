.. _aws_iam:

========================================
AWS Identity and Access Management (IAM)
========================================

As described earlier, our standard best practice is to manage all access as
either:

* Users within the
  `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_

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
  `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
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
  `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
  permissions model) and access keys are used for programmatic access.
  In almost all cases where you are creating an IAM user, only access keys
  should be required.

For assistance in determining the appropriate method of granting access
to your account, please :ref:`contact us <support>`.

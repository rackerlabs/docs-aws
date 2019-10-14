.. _aws_cli_sdk_api:

=======================
AWS CLI, SDKs, and APIs
=======================

There are two methods for accessing the AWS command-line interface
(CLI), software development kits (SDKs), and application programming
interfaces (APIs):

1. From the `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_,
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

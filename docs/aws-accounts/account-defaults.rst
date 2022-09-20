.. _account_defaults:

================
Account defaults
================

Based on services that you are subscribed to, we automatically apply some account defaults on AWS accounts registered with Rackspace Technology, whether created through the `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_ or created directly with AWS and registered with Rackspace. These account defaults, detailed below, serve multiple purposes: requirements for us to provide services to you, systematic requirements for our tooling, AWS partner requirements, as well as security best practices. Some account defaults are required, while some may be optional (but recommended).

**AWS Identity and Access Management (IAM)**:

  * Set up an IAM role named **Rackspace** for ongoing access to the account.
    See :ref:`aws_iam` for additional details.
  * Set the IAM account password policy for all passwords. Passwords have
    the following requirements:

    * Are at least 12 characters in length.
    * Contain at least one uppercase character.
    * Contain at least one lowercase character.
    * Contain at least one number.
    * Contain at least one symbol.
    * Are not one of the previous 24 passwords used.

  * Create an IAM role named **CloudHealth-Role** to enable us to provide you
    with :ref:`CloudHealth <cloudhealth>`.

    * Tampering or removing this role could cause overbilling.

**AWS Simple Storage Service (S3)**:

  * Create a bucket named **<account_uuid>-logs** in the **US West 2** (Oregon)
    region with the following settings:

    * Enable versioning and apply an S3 bucket lifecycle policy to the
      **<account_uuid>-logs** bucket that expires files after 365 days and
      permanently removes deleted files after 90 days.
    * Set an S3 bucket policy on the **<account_uuid>-logs** bucket to allow
      write access from CloudTrail.

  * Create a bucket named **rackspace-<account_uuid>** in the **US West 2**
    (Oregon) region with the following settings:

    * Enable versioning and apply an S3 bucket lifecycle policy to the
      **rackspace-<account_uuid>** bucket that expires files after 365 days and
      permanently removes deleted files after 90 days.

**AWS CloudTrail**:

  * Configure `AWS CloudTrail <https://aws.amazon.com/cloudtrail>`_ in each
    AWS region to log to the S3 bucket named **<account_uuid>-logs**.
  * Configure an SNS topic named **rackspace-cloudtrail** in each region and
    subscribe it to a region-specific Shared Management Services SQS queue
    for use by the :ref:`Rackspace Logbook <logbook>` service.
  * Note: Our accoung provisioning automation does not create a new trail if one already exists or if the AWS account is managed by Control Tower.

**AWS Config**:

  * Create an IAM role named **AWSConfig** for the AWS Config service to use.
  * Configure `AWS Config <https://aws.amazon.com/config/>`_ in each AWS
    region to log to the S3 bucket named "<account_uuid>-logs".
  * Configure an SNS topic named "rackspace-awsconfig" in each region and
    subscribe it to a region-specific Shared Management Services SQS queue
    for use by Rackspace tooling.
  * Note: Our accoung provisioning automation skips AWS Config deployment if a Config recorder already exists in the AWS region or if the AWS account is managed by Control Tower.

**AWS Simple Notification Service (SNS)**:

  * Create SNS topics named **rackspace-support**, **rackspace-support-standard**,
    **rackspace-support-urgent**, **rackspace-support-emergency** in each
    region and subscribe it to a region-specific Shared Management Services
    SQS queue for use by our :ref:`Rackspace Watchman <watchman>` service.
    
**RISK Events**:

  * Create an IAM role named **rackspace-dispatcher** and an IAM policy with the same name to allow us to respond to AWS Health RISK events.
  * Create an Amazon EventBridge Rule named **rackspace-dispatcher** with a corresponding target in the **US East 1** (N. Virginia) region.
  

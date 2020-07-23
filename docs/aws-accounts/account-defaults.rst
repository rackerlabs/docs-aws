.. _account_defaults:

================
Account Defaults
================

For all AWS accounts managed by Rackspace, whether created new via the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
or created directly with AWS and transferred to Rackspace, we automatically
apply several default settings to the account based on best practices we
have developed in cooperation with AWS. You should not change or disable
any of these default settings, as they are critical to our delivery of
Fanatical Support.

* AWS IAM (Identity and Access Management)

  * Setup an IAM role named "Rackspace" for ongoing access to the account
    (see :ref:`aws_iam` for additional details)
  * Set the IAM account password policy for all passwords

    * At least 12 characters in length
    * Contain at least one uppercase character
    * Contain at least one lowercase character
    * Contain at least one number
    * Contain at least one symbol
    * Not one of the previous 24 passwords used

  * Create an IAM role named "AWSConfig" for use by the AWS Config service
  * Create an IAM role named "RackspaceTools" to allow us to provide you with
    :ref:`Compass <compass>`
  * Create an IAM role named "RackspaceDefaultEC2Role" along with an attached
    IAM policy named "RackspaceDefaultEC2Policy" which can be attached to
    EC2 instances to provide access to
    `AWS Systems Manager <https://aws.amazon.com/systems-manager/>`_ and the
    `CloudWatch EC2 Agent <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html>`_.
  * Create an IAM role named "EC2ActionsAccess" for use by CloudWatch alarms
    to trigger actions on instances.

* AWS S3 (Simple Storage Service)

  * Create a bucket named "<account_uuid>-logs" in the US West 2 (Oregon)
    region

    * Enable versioning and apply an S3 bucket lifecycle policy to the
      "<account_uuid>-logs" bucket that expires files after 365 days and
      permanently removes deleted files after 90 days
    * Set an S3 bucket policy on the "<account_uuid>-logs" bucket to allow
      write access from CloudTrail

  * Create a bucket named "<account_uuid>-ssmoutput" in the US West 2
    (Oregon) region

    * Apply an S3 bucket lifecycle policy to the "<account_uuid>-ssmoutput"
      bucket that deletes files after 60 days

* AWS CloudTrail

  * Configure `AWS CloudTrail <https://aws.amazon.com/cloudtrail>`_ in each
    AWS region to log to the S3 bucket named "<account_uuid>-logs"
  * Configure an SNS topic named "rackspace-cloudtrail" in each region and
    subscribe it to a region-specific Shared Management Services SQS queue
    for use by the :ref:`Rackspace Logbook <logbook>` service

* AWS Config

  * Configure `AWS Config <https://aws.amazon.com/config/>`_ in each AWS
    region to log to the S3 bucket named "<account_uuid>-logs"
  * Configure an SNS topic named "rackspace-awsconfig" in each region and
    subscribe it to a region-specific Shared Management Services SQS queue
    for use by Rackspace tooling

* AWS SNS (Simple Notification Service)

  * Create SNS topics named "rackspace-support", "rackspace-support-standard",
    "rackspace-support-urgent", "rackspace-support-emergency" in each
    region and subscribe it to a region-specific Shared Management Services
    SQS queue for use by our :ref:`Rackspace Watchman <watchman>` service

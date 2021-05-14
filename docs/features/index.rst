.. _features:

========
Features
========

.. important::

Features may not apply to all product offers.

Fanatical Support for AWS combines tooling and automation with human experts to
deliver a world-class experience.

Features: Tooling and automation
--------------------------------

A curated set of Rackspace developed and best of breed AWS ecosystem tools. Some
features are dependent on the services you consume. Please feel free to create a
support ticket if you ever have any questions:

* AWS Account Generation Pre-Configured with
  :ref:`Rackspace Best Practices <account_defaults>`

  * AWS root account credentials encrypted and locked away
  * MFA enabled on root account and secret configuration key encrypted and locked away
  * No named IAM users; all AWS access via single, dynamically scoped IAM role and temporary STS credentials
  * CloudTrail and AWS Config enabled with centralized logging
  * Separate AWS accounts per environment (e.g. development, staging, production)

* `AWS Trusted Advisor <https://aws.amazon.com/premiumsupport/trustedadvisor/>`_

  * Access to all Trusted Advisor checks

* :ref:`CloudHealth <cloudhealth>`

  * Cost and usage visualizations
  * Savings recommendations
  * Tagging strategy
  * Governance through policies and actions

* :ref:`Rackspace Passport <passport_v2>`

  * On-demand provisioning of bastions for secure network access to VPC
    resources
  * Automatic, temporary credential management via the In-Instance
    Credential Management Service
  * Full logging

* In-Instance Credential Management Service

  * Automatic certificate authority and SSH key rotation across your fleet
    of EC2 instances
  * Temporary, fast expiring keys with silent renewal

* :ref:`AWS Instance Scheduler <instance_scheduler>`

  * Deployment, configuration and management of AWS Instance Scheduler
  * Allows configuration of custom start and stop schedules for EC2 and
    RDS instances
  * Provides cost saving on environments that aren't used 24/7

Features: Human experts
-----------------------

Tap into an army of certified AWS architects and engineers ready to deliver the
Fanatical Experience to your business 24x7x365. Available via ticket and phone.

* AWS best practice and architecture consultation from 100% AWS certified
  experts

* Hands-on management and assistance for all supported AWS services

  * Service Levels: Rackspace Elastic Engineering. Click :ref:`here
  <rackspace_elastic_engineering_and_optimizer>` to read more about the offers.

* EC2 operating system management

    * Service Levels: Rackspace Elastic Engineering. See our latest :ref:`offers
    <rackspace_elastic_engineering_and_optimizer>` to determine which bundle of
    offers best suits your needs. 

    * Supported operating systems are listed in the
      :ref:`Supported Operating Systems <supported_os>` section

    * Configuration, Optimization, Patching, Upgrades

    * Prerequisites: The following agents must be installed and working on your
  EC2 instances in order to be supported by Rackspace Elastic Engineering

    * Passport - The server agent allows Rackspace support team to
      access your instances via SSH (Linux®) or RDP (Windows®)
    * SSM - The AWS Systems Manager agent allows Rackspace to manage your EC2
      instances remotely (instance configuration, maintenance of agent
      versions and updates, OS patching, software inventory monitoring)

      * IAM role "RackspaceMinimumSSMRole" with attached IAM policy
        "AmazonSSMManagedInstanceCore" will be attached to EC2 instances
        that are provisioned without a role/instance profile attached.
      * IAM policy "AmazonSSMManagedInstanceCore" will be applied to EC2-attached
        instance roles in which the policy is absent.
      * Security group and network policies must allow access to SSM endpoints.

* :ref:`Rackspace Watchman <watchman>`

    * Service Levels: Advanced Monitoring and Resolution. Click :ref:`here
    <rackspace_elastic_engineering_and_optimizer>` to read more about our offers. 

    * Features

      * Rackspace AWS certified engineer response to CloudWatch alarms 24x7x365
      * Set up CloudWatch alarms to a pre-configured SNS topic or let us do
        it for you

* Custom CloudFormation template creation

  * Service Levels: Rackspace Elastic Engineering

* Data restoration support (for EC2 and RDS exclusively)

  * Service Levels: Rackspace Elastic Engineering


Response Time SLAs
------------------

.. note::

Only applicable to Advanced Monitoring and Resolution

Rackspace will respond to your support requests submitted to us via ticket in
the following timeframes. All requests should be made directly to Rackspace and
we will escalate to AWS directly, unless purchased directly from AWS then AWS
SLA's are followed. Monitoring response is not included with any other service
level aside from Advanced Monitoring and Resolution.

* Emergency (Business-Critical System Outage / Extreme Business Impact):
  If Rackspace Infrastructure monitoring and alerting services determines
  your AWS Services are inaccessible from the public internet, which may
  result in the inability to complete business transactions, our initial
  response to emergency monitoring alarms will occur within fifteen minutes
* Urgent (Production System Outage / Significant Business Impact): If your
  AWS Services are functioning improperly or at less than optimal performance
  and the failure is impacting business transactions, our initial response
  is 60 minutes. Customers must call Rackspace immediately after creating
  the Urgent ticket to trigger the one hour response guarantee.
* High (Production System Impaired / Moderate Business Impact): If your
  AWS Services are functioning improperly or at less than optimal
  performance, but the failure is not impacting business transactions, our
  initial response to your support request submitted to us via a ticket
  will occur within four hours.
* Normal (Issues and Requests / Minimal Business Impact): If your AWS
  Services are functioning normally but you have a time sensitive request,
  question, or issue that needs addressed, our initial response to your
  support request submitted to us via a ticket will occur within 12 hours.
* Low (General Information, Questions, and Guidance): If your AWS Services
  are functioning normally but you require information or assistance, wish
  to schedule maintenance, or require the completion of any other
  non-immediate tasks, our initial response to your support request submitted
  to us via a ticket will occur within 24 hours.

.. _supported_os:

+-------------------------------------------------+-----------------+
| Operating System                                | Supported Until |
+=================================================+=================+
| Amazon Linux 2                                  | June 30, 2023   |
+-------------------------------------------------+-----------------+
| Red Hat® Enterprise Linux® (RHEL) and CentOS® 7 | June 30, 2024   |
+-------------------------------------------------+-----------------+
| RHEL and CentOS 8                               | May 2029        |
+-------------------------------------------------+-----------------+
| Ubuntu® 16.04 LTS                               | April 30, 2021  |
+-------------------------------------------------+-----------------+
| Ubuntu 18.04 LTS                                | April 30, 2023  |
+-------------------------------------------------+-----------------+
| Ubuntu 20.04 LTS                                | April 30, 2025  |
+-------------------------------------------------+-----------------+
| Windows Server® 2012 R2                         | October 2023    |
+-------------------------------------------------+-----------------+
| Windows Server 2016                             | January 2027    |
+-------------------------------------------------+-----------------+
| Windows Server 2019                             | January 2029    |
+-------------------------------------------------+-----------------+



The following Operating Systems are approaching End of Life (EOL) as determined
by the vendor:

+------------------------------+-------------------+
| Operating System             | EOL Date          |
+==============================+===================+
| RHEL and CentOS 6            | November 2020     |
+------------------------------+-------------------+
| Amazon Linux (legacy)        | December 2020     |
+------------------------------+-------------------+
| Ubuntu 16.04 LTS             | April 2021        |
+------------------------------+-------------------+

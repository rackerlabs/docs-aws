.. _features:

========
Features
========

.. important::

The features described here might not apply to all product offers.

Fanatical Support for AWS combines tooling and automation with human experts to
deliver a world-class experience.

Features: Tooling and automation
--------------------------------

The following features are a curated set of Rackspace-developed and best-of-breed
AWS ecosystem tools. Some features depend on the services you consume. Feel free
to create a support ticket if you have any questions.

* **AWS Account configuration**: When you generate an AWS Account, it comes
  pre-configured with the following :ref:`Rackspace best practices <account_defaults>`:

  * AWS root account credentials encrypted and locked away.
  * MFA enabled on the `root` account and secret configuration key encrypted and locked away.
  * No named IAM users. All AWS access available through a single, dynamically scoped
    IAM role and temporary STS credentials.
  * CloudTrail and AWS Config enabled with centralized logging.
  * Separate AWS accounts for each environment, such as development, staging, and production.

* `AWS Trusted Advisor <https://aws.amazon.com/premiumsupport/trustedadvisor/>`_:

  * Access to all Trusted Advisor checks.

* :ref:`CloudHealth <cloudhealth>`:

  * Cost and usage visualizations.
  * Savings recommendations.
  * Tagging strategy.
  * Governance through policies and actions.

* :ref:`Rackspace Passport <passport_v2>`:

  * On-demand provisioning of bastions for secure network access to VPC
    resources.
  * Automatic, temporary credential management through the In-Instance
    Credential Management Service.
  * Full logging.

* **In-Instance Credential Management Service**:

  * Automatic certificate authority and SSH key rotation across your fleet
    of EC2 instances.
  * Temporary, fast expiring keys with silent renewal.

* :ref:`AWS Instance Scheduler <instance_scheduler>`:

  * Deployment, configuration, and management of AWS Instance Scheduler.
  * Allows configuration of custom start and stop schedules for EC2 and
    RDS instances.
  * Provides cost saving on environments that aren't used 24/7.

Features: Human experts
-----------------------

Tap into an army of certified AWS architects and engineers ready to deliver the
Fanatical Experience to your business 24x7x365. Available by ticket and phone.
We offer the following expert assistance:


* **AWS best practice and architecture consultation from 100 percent AWS-certified
  experts**.

* **Hands-on management and assistance for all supported AWS services**:

  * Service levels: Rackspace Elastic Engineering. Read more about the :ref:`offers <rackspace_elastic_engineering_and_optimizer>`.

* **EC2 operating system management**:

    * Service levels: Rackspace Elastic Engineering. See our latest :ref:`offers <rackspace_elastic_engineering_and_optimizer>`
    to determine which bundle of offers best suits your needs. 

    * See a list of supported operating systems in the :ref:`Supported Operating Systems <supported_os>` section.

    * Configuration, optimization, patching, and upgrades.

    * Prerequisites: You must install the following agents, which must work, on your
      EC2 instances for Rackspace Elastic Engineering to support you:

      * **Passport**: The server agent enables the Rackspace support team to
        access your instances through SSH (Linux®) or RDP (Windows®).
      * **SSM** The AWS Systems Manager agent enabless Rackspace to manage your EC2
        instances remotely (instance configuration, maintenance of agent
        versions and updates, OS patching, and software inventory monitoring).

    * IAM role `RackspaceMinimumSSMRole` with associated IAM policy
      `AmazonSSMManagedInstanceCore` attached to EC2 instances
      provisioned without a role or instance profile attached.
      
    * IAM policy `AmazonSSMManagedInstanceCore` applied to EC2-attached
      instance roles in which the policy is absent.
      
    * Security group and network policies must allow access to SSM endpoints.

* :ref:`Rackspace Watchman <watchman>`:

    * Service levels: Advanced Monitoring and Resolution. Read more about our :ref:`offers<rackspace_elastic_engineering_and_optimizer>`. 

    * Rackspace AWS certified engineer response to CloudWatch alarms 24x7x365.
    
    * Set up CloudWatch alarms to a pre-configured SNS topic, or let us do
      it for you.

* **Custom CloudFormation template creation**:

  * Service levels: Rackspace Elastic Engineering

* **Data restoration support (for EC2 and RDS exclusively)**:

  * Service levels: Rackspace Elastic Engineering


Response time SLAs
------------------

.. note::
   Applicable to only Advanced Monitoring and Resolution.

Rackspace responds to support requests submitted to us through tickets within
the following timeframes. If you did not purchase directly from AWS, make all
requests directly to Rackspace so we can escalate to AWS. If you purchased from
AWS then follow the AWS SLAs. No service level other than Advanced Monitoring
and Resolution includes a monitoring response.

Rackspace honors the followong SLA timeframes:

* **Emergency (Business-Critical System Outage / Extreme Business Impact)**: Within 15 minutes

  Assumptions: Rackspace Infrastructure monitoring and alerting services determines
  your AWS Services are inaccessible from the public internet, which might
  result in the inability to complete business transactions, and generates an
  emergency monitoring alarm.
  
* **Urgent (Production System Outage / Significant Business Impact)**: Within 60 minutes

  Assumptions: Your AWS Services are functioning improperly or at less than
  optimal performance and the failure impacts business transactions.
  
  Customers must call Rackspace immediately after creating
  the Urgent ticket to trigger the one-hour response guarantee.
  
* **High (Production System Impaired / Moderate Business Impact)**: Within 4 hours

  Assumptions: Your AWS Services are functioning improperly or at less than optimal
  performance, but the failure does not impact business transactions.
  
  Customers must sunbmit the support request in a ticket.
  
* **Normal (Issues and Requests / Minimal Business Impact)**: Within 12 hours

  Assumptions: Your AWS Services are functioning normally but you have a time-sensitive
  request or question, or you have an issue that needs to be addressed.
  
  Customers must sunbmit the support request in a ticket.
  
* **Low (General Information, Questions, and Guidance)**: Within 24 hours

  Assumptions: Your AWS Services are functioning normally, but you require
  information or assistance, want to schedule maintenance, or require us to
  complete a non-immediate task.
  
  Customers must sunbmit the support request in a ticket.

.. _supported_os:

The following table shows supported operating systems:

+-------------------------------------------------+-----------------+
| Operating system                                | Supported until |
+=================================================+=================+
| Amazon Linux 2                                  | June 30, 2023   |
+-------------------------------------------------+-----------------+
| Red Hat® Enterprise Linux® (RHEL) and CentOS® 7 | June 30, 2024   |
+-------------------------------------------------+-----------------+
| RHEL and CentOS 8                               | May 2029        |
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

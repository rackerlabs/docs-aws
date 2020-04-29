.. _service_levels:

==============
Service Levels
==============

Fanatical Support for AWS combines tooling and automation with human
experts to deliver a world-class experience. We offer two service levels,
Navigator and Aviator, which are selected for each AWS account we support.

* Navigator: "I want to do most things myself, but I want access to
  Rackspace's AWS experts and tools."
* Aviator: "I want Rackspace to operate and manage my AWS environments for
  me or with me."

Navigator and Aviator are now legacy service levels that existing customers
can maintain on their accounts.

Starting in July 2019, Service Blocks are the standard support offers. Please
see the :ref:`Service Blocks <service_blocks>` section of the Product
Guide for further information about these offers.

For details on what is included in each service level, including details on
levels of support for each AWS service, download our
`Fanatical Support for AWS Service Overview - Navigator and Aviator Version <https://9d31a28d75515373cbe0-39a001adc5755d26f84687a5d61bbba1.ssl.cf1.rackcdn.com/AWS%20files/service_overview.pdf>`_
or the
`Fanatical Support for AWS Service Overview - Service Blocks Version <https://9d31a28d75515373cbe0-39a001adc5755d26f84687a5d61bbba1.ssl.cf1.rackcdn.com/AWS%20files/service_overview_service_blocks.pdf>`_.

Features: Tooling and Automation
--------------------------------

A curated set of Rackspace developed and best of breed AWS ecosystem tools:

* AWS Account Generation Pre-Configured with
  :ref:`Rackspace Best Practices <account_defaults>`

  * Service Levels: Navigator and Aviator
  * Features

    * AWS root account credentials encrypted and locked away
    * MFA enabled on root account and secret configuration key encrypted and locked away
    * No named IAM users; all AWS access via single, dynamically scoped IAM role and temporary STS credentials
    * CloudTrail and AWS Config enabled with centralized logging
    * Separate AWS accounts per environment (e.g. development, staging, production)

* Access to
  `AWS Trusted Advisor <https://aws.amazon.com/premiumsupport/trustedadvisor/>`_

  * Service Levels: Navigator, Aviator, Platform Essentials
  * Features

    * Access to all Trusted Advisor checks

* :ref:`CloudHealth <cloudhealth>`

  * Service Levels: Navigator, Aviator, Platform Essentials
  * Features

    * Cost and usage visualizations
    * Savings recommendations
    * Governance through policies and actions

* :ref:`Rackspace Passport <passport>`

  * Service Levels: Aviator, Manage & Operate (customer and Rackspace use)
  * Features

    * On-demand provisioning of bastions for secure network access to VPC
      resources
    * Automatic, temporary credential management via the In-Instance
      Credential Management Service
    * Full logging

* In-Instance Credential Management Service (powered by ScaleFT)

  * Service Levels: Aviator, Manage & Operate (customer and Rackspace use)
  * Features

    * Automatic certificate authority and SSH key rotation across your fleet
      of EC2 instances
    * Temporary, fast expiring keys with silent renewal

* :ref:`AWS Instance Scheduler <instance_scheduler>`

  * Service Levels: Aviator, Manage & Operate
  * Features

    * Deployment, configuration and management of AWS Instance Scheduler
    * Allows configuration of custom start and stop schedules for EC2 and
      RDS instances
    * Provides cost saving on environments that aren't used 24/7

Features: Human Experts
-----------------------

Tap into an army of certified AWS architects and engineers ready to deliver
Fanatical Support to your business 24x7x365. Available via ticket and phone.

* AWS best practice and architecture consultation from 100% AWS certified
  experts

  * Service Levels: Navigator, Platform Essentials (standard use cases) and
    Aviator, Manage & Operate (customized to your specific application)

* Hands-on management and assistance for all supported AWS services

  * Service Levels: Aviator, Manage & Operate

* EC2 operating system management

  * Service Levels: Aviator, Manage & Operate
  * Features

    * Amazon Linux 2 & Amazon Linux (legacy), Red Hat Enterprise Linux:
      6, 7 & 8, CentOS: 6, 7 & 8, Ubuntu LTS Versions: 16.04 & 18.04, Windows
      Server 2008 R2\*, Windows Server 2012 R2, Windows Server 2016, Windows
      Server 2019.
    * Configuration, Optimization, Patching, Upgrades

  * Prerequisites: The following agents must be installed and working on your
  EC2 instances in order to be supported by Rackspace

    * Passport - The ScaleFT server agent allows Rackspace support team to
      access your instances via SSH (Linux) or RDP (Windows)
    * SSM - The AWS Systems Manager agent allows Rackspace to manage your EC2
      instances remotely (instance configuration, maintenance of agent
      versions and updates, OS patching, software inventory monitoring)

* :ref:`Rackspace Watchman <watchman>`

  * Service Levels: Aviator, Manage & Operate
  * Features

    * Rackspace AWS certified engineer response to CloudWatch alarms 24x7x365
    * Set up CloudWatch alarms to a pre-configured SNS topic or let us do
      it for you

* Custom CloudFormation template creation

  * Service Levels: Aviator, Architect & Deploy

* Data restoration support (for EC2 and RDS exclusively)

  * Service Levels: Aviator, Manage & Operate

\* Support for Windows Server 2008 R2 is contingent on enabling an
alternative means of access (beyond ScaleFT) for Rackspace to manage your
instances. Please work with your Support team prior to deploying new
instances running Windows Server 2008 R2.

Response Time SLAs
------------------

Rackspace will respond to your support requests submitted to us via ticket
in the following timeframes. All requests should be made directly to
Rackspace and we will escalate to AWS directly, if needed.

* Emergency (Business-Critical System Outage / Extreme Business Impact):
  If Rackspace Infrastructure monitoring and alerting services determines
  your AWS Services are inaccessible from the public internet, which may
  result in the inability to complete business transactions, our initial
  response to emergency monitoring alarms will occur within fifteen minutes
  (Aviator service level only; monitoring response is not included in the
  Navigator service level).
* Urgent (Production System Outage / Significant Business Impact): If your
  AWS Services are functioning improperly or at less than optimal performance
  and the failure is impacting business transactions, our initial response
  is 60 minutes. Customers must call Rackspace immediately after creating
  the Urgent ticket to trigger the one hour response guarantee. This
  severity is only available for the Aviator service level.
* High (Production System Impaired / Moderate Business Impact): If your
  AWS Services are functioning improperly or at less than optimal
  performance, but the failure is not impacting business transactions, our
  initial response to your support request submitted to us via a ticket
  will occur within four hours at the Aviator or Navigator service levels.
* Normal (Issues and Requests / Minimal Business Impact): If your AWS
  Services are functioning normally but you have a time sensitive request,
  question, or issue that needs addressed, our initial response to your
  support request submitted to us via a ticket will occur within 12 hours
  at the Aviator and Navigator service levels.
* Low (General Information, Questions, and Guidance): If your AWS Services
  are functioning normally but you require information or assistance, wish
  to schedule maintenance, or require the completion of any other
  non-immediate tasks, our initial response to your support request submitted
  to us via a ticket will occur within 24 hours at the Aviator and Navigator
  service levels.

.. _aviator_infrastructure_management:

===================================================
Aviator Infrastructure Management (Legacy offering)
===================================================

.. note::

For a list of current offerings, refer to
:ref:`rackspace_elastic_engineering_and_optimizer`.

Summary
-------

Based on your desired infrastructure management preference, some
AWS environments built under the Fanatical Support for AWS Aviator service
level are managed directly via the AWS console, while others are managed
through a process known as Infrastructure as Code (IaC), specifically
using an AWS service named CloudFormation.

Management via the AWS console
------------------------------

Organizations that are not used to Infrastructure as Code (IaC) practices
can benefit from a simplified management of their AWS environment via
the AWS console. With this type of management, small changes can be
implemented quicker. If your environment is managed via the AWS console, you
have the added flexibility to make changes by yourselves, if you wish to
do so. However, new resources need to be deployed by Rackspace.

Management via IaC using CloudFormation
---------------------------------------

Organizations that are comfortable with IaC practices can have their
AWS environments managed using CloudFormation. With this method of
management, all changes must be requested via tickets and deployed by
Rackspace. Changes via the AWS console are not allowed since they can
conflict with CloudFormation management, resulting in downtime, data
loss, or delays to reconcile these manual changes. It is important that
all changes to your environment are managed with CloudFormation.

Why use CloudFormation?
-----------------------

If you are comfortable working with a strict change management process and
giving up the ability to make changes via the AWS console, managing your
environment using CloudFormation can provide the following benefits:

* Ability to automatically and consistently rebuild or duplicate environments
* Version-controlled and quality checked infrastructure changes
* Automated testing of the interconnected parts of an environment
* Inherent Disaster Recovery plans for your infrastructure

What resources are managed with CloudFormation?
-----------------------------------------------

If your environment is managed via IaC, you should consider all of it under
the control of CloudFormation, unless the Rackspace Support team
instructs you otherwise.

The following resources are never maintained with CloudFormation, however
we still recommend engaging the Rackspace Support team for any changes!

* IAM User Console Passwords
* IAM User Access Keys
* Elastic Beanstalk Environments
* Route 53 External Zones

Resources in the list above can be modified using the AWS console without
the risk of creating configuration drift. If you're unsure, please
contact the Rackspace Support team.

What if I make changes outside of CloudFormation?
-------------------------------------------------

If your environment is managed via IaC, making changes outside of
CloudFormation creates configuration drift, meaning that the code we use
to maintain your environment is no longer in sync with what actually
exists within your AWS account. This may result in:

* Downtime or data loss, as manual infrastructure changes are overwritten
  (configuration changed, resources recreated or deleted) by a CloudFormation
  stack update
* Delays implementing changes you request, as the CloudFormation templates
  and parameters must be reconciled with manual infrastructure changes before
  proceeding

The impact to the infrastructure may be wider than just the directly
modified resources, and in some circumstances may require downtime or a
rebuild of much of the environment. Even the smallest change can have
wide reaching consequences!

If you have been forced to make manual infrastructure changes in an
emergency, please contact the Rackspace Support team as soon as possible
to document the changes that were applied.

I don't want to use CloudFormation, can I opt out?
--------------------------------------------------

Yes, Rackspace allows your environment to be managed via the AWS console. If
you wish to discuss the strategy for ongoing management of your
environments, please don't hesitate to contact your Account Manager, who
will be happy to discuss the options with you!

Terraform and GitHub Support (Limited Availability)
---------------------------------------------------

Fanatical Support for AWS offers, in limited availability,
support for :ref:'Terraform <using_terraform>' and :ref:'GitHub <using_github>'
as an alternative to having your infrastructure managed by CloudFormation. If
you're interested in learning more about this future option, please reach
out to your Account Manager.

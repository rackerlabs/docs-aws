.. _infrastructure_management:

=========================
Infrastructure Management
=========================

.. note::

For a list of current offerings, refer to
:ref:`rackspace_elastic_engineering_and_optimizer`.

Based on your desired infrastructure management preference, you can have Rackspace
manage some AWS environments directly in the AWS console while managing others
through an Infrastructure as Code (IaC) process, specifically by using the AWS
CloudFormation service.

Management through the AWS console
----------------------------------

Organizations unused to Infrastructure as Code (IaC) practices can benefit from
simplified AWS environment management by using the AWS console. With this type
of management, we can implement small changes quicker. If we manage your
environment through the AWS console, you have the added flexibility to make
changes yourself if you want. However, Rackspace still needs to deploy new resources.

Management through IaC by using CloudFormation
----------------------------------------------

Organizations that are comfortable with IaC practices can have Rackspace
manage their AWS environments by using CloudFormation. With this method of
management, you must request all changes through tickets so Rackspace can
deploy them. In this case, we do not allow changes through the AWS console
because those console changes might conflict with CloudFormation management,
resulting in downtime, data loss, or manual-change reconciliation delays.
We must manage all changes to your environment with CloudFormation.

Why use CloudFormation?
-----------------------

If you are comfortable working with a strict change management process and
giving up the ability to make changes through the AWS console, CloudFormation
management provides the following benefits:

* Ability to automatically and consistently rebuild or duplicate environments
* Version-controlled and quality checked infrastructure changes
* Automated testing of the interconnected parts of an environment
* Inherent Disaster Recovery plans for your infrastructure

What resources does Rackspace manage with CloudFormation?
---------------------------------------------------------

If we manage your environment through IaC, you should consider all of it under
the control of CloudFormation, unless the Rackspace Support team
instructs you otherwise.

We never maintain the following resources with CloudFormation, but
we still recommend engaging the Rackspace Support team for any changes:

* IAM User Console Passwords
* IAM User Access Keys
* Elastic Beanstalk Environments
* Route 53 External Zones

You can modify resources in the preceding list by using the AWS console without
the risk of creating configuration drift. If you're unsure, contact the Rackspace
Support team.

What if I make changes outside of CloudFormation?
-------------------------------------------------

If we manage your environment through IaC, making changes outside of
CloudFormation creates configuration drift, meaning that the code we use
to maintain your environment is no longer in sync with what actually
exists within your AWS account. This drift might result in the following
consequences:

* Downtime or data loss because a CloudFormation stack update overwrites
  manual infrastructure changes, such as configuration changes, resource
  creation, or resource deletion.
* Delays implementing changes you request because we have to reconcile
  the CloudFormation templates and parameters with manual infrastructure
  changes before proceeding.

The impact on the infrastructure might be wider than just the directly
modified resources and, in some circumstances, might require downtime or a
rebuild of much of the environment. Even the smallest change can have
wide-reaching consequences.

If you had to make manual infrastructure changes in an emergency, contact
the Rackspace Support team as soon as possible to document the changes you
applied.

If I don't want to use CloudFormation, can I opt out?
-----------------------------------------------------

Yes, Rackspace allows you to have Rackspace manage your environment through
the AWS console. If you want to discuss the strategy for ongoing management
of your environments, don't hesitate to contact your Account Manager, who
can discuss the options with you!

Terraform and GitHub support (Limited Availability)
---------------------------------------------------

Fanatical Support for AWS offers, in limited availability, support for
:ref:`Terraform <using_terraform>` and :ref:`GitHub <using_github>` as an
alternative to having us manage your infrastructure through CloudFormation.
If you're interested in learning more about this future option, reach out to your
Account Manager.

.. _patching_ec2:

=============================
Patching Guide for Amazon EC2
=============================

The guidelines on this page will assist you in applying guest Operating
System updates to Amazon Web Services (AWS) Elastic Compute Cloud (EC2)
instances, covering both standalone instances and Auto-Scaling instances
in a variety of common deployment models. This document will be updated
from time to time, and you may wish to check back regularly - or use this
as reference for your monthly patching cycle.

Automation artifacts
--------------------

Rackspace recommends using Amazon-published Systems Manager (SSM) documents
to manage and apply Operating System updates to standalone EC2 instances.
This ensures a repeatable and automatable approach, reducing the possibility
of inconsistencies or human errors that might occur when applying patches
with direct management access (e.g. SSH/RDP) to instances.

For more information on Amazon-published Systems Manager documents, see
`Overview of SSM Documents for Patching Instances <https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-ssm-documents.html>`_.

For customers seeking to patch their instances or Auto-Scaling Groups against
the January 2018 *Meltdown* and *Spectre* vulnerabilities,
Rackspace-developed SSM documents targeting Meltdown/Spectre patching and
AMI generation are detailed in :ref:`this page <patching_ec2_meltdownspectre>`.

Instance categorization
-----------------------

Many organizations have a complex estate in AWS, comprising many different
groups of EC2 instances. Guest Operating Systems (OS) running on EC2 can
be divided into two categories. The following decision diagram provides an
overview of categorizing your EC2 instances, and simplified steps for
patching instances in both categories:

.. image:: ../images/patching_ec2_simple.png
   :width: 100%

#. Standalone instances (not in an Auto Scaling Group)

   * **Method:** Apply OS updates to these instances *in-place*, and reboot
     them.
   * Standalone instances are normally provisioned where the instance needs
     to be Stateful, i.e. it is storing configuration or data locally and
     cannot be replaced. An example would be a build server holding local
     configuration.
   * You may have heard the term 'Auto-Recovery Instance' used to refer to
     standalone instances configured with CloudWatch Auto-Recovery alarms,
     improving resilience/availability. For the purposes of this guide, these
     instances will be considered to be simple Standalone instances.

#. Instances in an Auto Scaling Group (ASG)

   * **Method:** *Update the Amazon Machine Image (AMI)* that these instances
     are launched from, and perform a *rolling replacement* of the instances
     in each ASG.
   * ASG instances are normally provisioned where an instance is
     Stateless, i.e. all data is stored externally (S3, database) and the
     instance itself can be replaced at any time. An example would be a
     group of webservers.
   * ASG instances provide both higher availability than Standalone
     instances, and the potential to horizontally scale to tens or even
     hundreds of instances.
   * These instances can and do get replaced with new instances on a regular
     basis (whether or not you have any Scaling Policies applied to your
     ASG). Patching existing ASG instances in-place is therefore ineffectual.
   * Don't worry if manual changes have been made to an ASG instance - this
     guide aims to be as pragmatic as possible, and will cover this
     (and other) corner cases in many different configurations.

Patching process overview
-------------------------

* Generally speaking, if you have a group of identical webservers they're
  likely to be provisioned in an ASG. You can examine each ASG (including a
  list of instances) in the AWS console under:

  * Services --> EC2 --> Auto Scaling --> Auto Scaling Groups

* Individual instances fulfilling utility roles are likely to be provisioned
  as standalone instances
* If you are unsure in any way - or need to programmatically list/report on
  your instances - you can examine the tags on each instance. ASG instances
  have the ``aws:autoscaling:groupName`` tag key (this is an AWS-reserved
  tag and cannot be manually modified)
* Example AWS CLI commands:

  * Describe all Auto Scaling instances in us-east-1::

      aws --region=us-east-1 autoscaling describe-auto-scaling-instances

  * List all Auto Scaling instances in us-east-1, along with their ASG name
    and CloudFormation stack name::

      aws --region=us-east-1 ec2 describe-instances \
          --filters 'Name=tag-key,Values=aws:autoscaling:groupName' \
          --query 'Reservations[*].Instances[*].[InstanceId,Tags[?Key==`aws:autoscaling:groupName`],Tags[?Key==`aws:cloudformation:stack-name`]]'

  * List all standalone instances in us-east-1, along with their
    CloudFormation stack name::

      aws --region=us-east-1 ec2 describe-instances \
          --query 'Reservations[*].Instances[?!not_null(Tags[?Key == `aws:autoscaling:groupName`])].[InstanceId,Tags[?Key==`aws:cloudformation:stack-name`]] | []'

Once you have identified whether you are dealing with a Standalone instance
or an Auto Scaling Group of one or more instances, you're ready to follow
the remediation process below. Don't worry if this looks intimidating at
first - the majority of instances will follow one of two simplified paths
(one for Standalone, one for ASG instances) which have been highlighted
in red. Processes that are automatable with the SSM documents are shaded in
purple:

.. image:: ../images/patching_ec2.png
   :width: 100%

(Click through for a larger version of this or any other image)

Standalone instances
--------------------

Standalone instances should be patched in-place and rebooted.

If the instance is managed by Configuration Management (examples: Puppet,
Chef, Ansible, Saltstack), you will likely want to simply use this
configuration management to apply updates and reboot. Good news:
You're done! Time to move on to the next instance.

If the instance is not under Configuration Management, you should apply
the updates using Amazon Systems Manager (also known as Simple Systems
Manager or SSM), or manually using native OS tools if necessary.

Apply OS patches
^^^^^^^^^^^^^^^^

`Systems Manager Patch Manager walkthroughs <https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-patch-walkthrough.html>`_
can be found in the AWS Systems Manager User Guide.

If necessary, the updates can be manually checked, applied, instance
rebooted and updates validated through your usual management access to this
instance (SSH/RDP). However, Rackspace recommends using the Systems Manager
Documents to ensure repeatability, eliminate manual work and manage
scheduling across your EC2 instance estate.

Amazon Systems Manager Troubleshooting
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If your instance is not available in Systems Manager, this is likely caused
by one of the following two problems:

#. The instance IAM role does not allow the instance to communicate with the
Systems Manager API

   * The instance role or role policies can be updated using the AWS
     console, API or CLI without any downtime to the instance
   * Customers of *Fanatical Support for AWS* who consume our *Aviator*
     service offering should find the *RackspaceDefaultEC2Role* and
     *RackspaceDefaultEC2Policy* created on all accounts provide the correct
     permissions
   * If for any reason you need to create a role and/or policy manually,
     please see
     `Create an Instance Profile Role for Systems Manager <https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-configuring-access-role.html>`_
     in the Amazon Systems Manager User Guide, or reach out to the
     *Fanatical Support for AWS* Support team for assistance

#. The SSM Agent is not running on the instance

   * This will necessitate accessing the instance (usually via SSH or RDP)
     and reinstalling the agent
   * Documentation on installing the SSM agent can be
     `found in the AWS Systems Manager User Guide <https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-agent.html>`_

.. image:: ../images/patching_ec2_troubleshootssm.png
   :width: 100%

If you need to troubleshoot further, or manually resolve either issue,
please see
`Where Are My Instances? <https://docs.aws.amazon.com/systems-manager/latest/userguide/troubleshooting-remote-commands.html#where-are-instances>`_
in the Amazon Systems Manager User Guide.

Auto Scaling Group instances
----------------------------

Auto Scaling Groups should be updated with a new Launch Configuration (LC)
specifying a new AMI (incorporating the necessary OS updates), and
replaced via a rolling update to the ASG.

Update AMI
^^^^^^^^^^

Auto Scaling Groups under CloudFormation management should be updated with
a CloudFormation Stack Update.

* CloudFormation management can be confirmed by checking the Auto Scaling
  Group tags for the ``aws:cloudformation:stack-name`` tag key (this is
  an AWS-reserved tag and cannot be manually modified)

* Example AWS CLI commands:

  * List all ASGs in us-east-1 created by CloudFormation, and the
    CloudFormation stack name::

      aws --region=us-east-1 autoscaling describe-auto-scaling-groups \
          --query 'AutoScalingGroups[?not_null(Tags[?Key == `aws:cloudformation:stack-name`])].[AutoScalingGroupName,Tags[?Key==`aws:cloudformation:stack-name`].Value] | []'

  * List all ASGs in us-east-1 not created by CloudFormation::

      aws --region=us-east-1 autoscaling describe-auto-scaling-groups \
          --query 'AutoScalingGroups[?!not_null(Tags[?Key == `aws:cloudformation:stack-name`])].AutoScalingGroupName | []'

* Almost all CloudFormation stacks use a template that allows entering
  the AMI ID as a parameter during the stack update

  * AWS Console --> Services --> CloudFormation --> StackName --> Update Stack
  * Advance to the Specify Details stage and look for an 'AMI' or 'Image ID'
    parameter

* A very few CloudFormation stacks may hard-code the ``ImageId`` property of
  the ``AWS::AutoScaling::LaunchConfiguration`` resource (which is in turn
  referenced by the ``AWS::AutoScaling::AutoScalingGroup`` resource)

  * These stacks should be updated by changing the ``ImageId`` property in
    the template and updating the stack with the new template
  * If you're having trouble updating a CloudFormation template - or need to
    move towards best practices, like parameterizing the AMI ID, then
    Rackspace may be able to assist. Please reach out to us!
  * If a change has been made to a template, remember to check this into any
    version control repository in use (e.g. git)

Auto Scaling Groups not under CloudFormation (or other Infrastructure as Code)
management should be updated by creating a new Launch Configuration (LC) and
manually applying this to the Auto Scaling Group:

#. Identify the current LC used for the ASG
#. Create a copy of the LC, with an updated AMI
   #. AWS Console --> Services --> EC2 --> Auto Scaling --> Launch
   Configurations
   #. Select a LC --> 'Copy launch configuration'
   #. 'Edit AMI'
   #. 'Create launch configuration'
#. Edit the ASG and select the new LC

Vendor AMI
""""""""""

If you are using a default vendor AMI with no 'baked in' customization, then
you can simply update the ASG with the latest version of the vendor AMI. The
documentation/lists are linked for convenience below, but for the avoidance
of doubt, the latest AMI issued by the vendor should always be used.

* `Amazon Linux - AMI list <https://aws.amazon.com/amazon-linux-ami/>`_
* `Red Hat Enterprise Linux - How to list AMIs <https://access.redhat.com/solutions/15356>`_
* `The Ubuntu operating system Linux - AMI list <https://cloud-images.ubuntu.com/locator/ec2/>`_
* `CentOS Linux - How to list AMIs <https://wiki.centos.org/Cloud/AWS#head-cc841c2a7d874025ae24d427776e05c7447024b2>`_
* `Microsoft Windows - AMI list <https://aws.amazon.com/windows/resources/amis/>`_

Generating a custom AMI
"""""""""""""""""""""""

Under the following circumstances, it may be necessary to generate a custom
AMI for your ASG:

#. The ASG is already using your own custom AMI (usually a descendant of an
   original vendor AMI)
#. No updated vendor AMI is available
#. Manual changes have been made to the ASG instances (usually using direct
   SSH/RDP access), and these changes have not been integrated into the
   existing AMI, User Data, CloudFormation template or Configuration
   Management

   * Manual changes such as these would be lost when the instances are
     replaced
   * **This is a precarious situation, since the instances might get replaced
     at any time**, even outside of this patching process (e.g. An existing
     instance goes down, a routine scaling event, etc)
   * It is therefore critically important to integrate these changes by
     creating a new custom AMI

The below process outlines generating a custom AMI (if necessary). As
before, automatable processes are shaded in purple - SSM documents can be
used to automate the process of generating a new patching AMI, either from
an existing AMI or from an existing instance. For examples, please see the
:ref:`Rackspace SSM documents <patching_ec2_meltdownspectre>` targeting AMI
generation for Meltdown/Spectre remediation.

.. image:: ../images/patching_ec2_generateami.png
   :width: 100%

If for an reason you cannot use the Rackspace-authored SSM documents, below
is a walk-through of the manual steps needed:

#. If manual changes have been made to ASG instances, it is necessary to make
   a 'temporary' AMI from one of the existing instances in order to capture
   these manual changes

   * You may wish to do this offline (i.e. Using the ``--reboot``
     `CLI argument <https://docs.aws.amazon.com/cli/latest/reference/ec2/create-image.html>`_,
     or without choosing ``No reboot`` in the console AMI generator wizard)
     to ensure the instance is shut down properly for a consistent
     filesystem snapshot

#. Deploy a temporary instance from either your current AMI, your vendor
   AMI, or the temporary AMI generated in step 1

   * If you generated a temporary AMI in step 1, you can deregister it and
     remove the associated EBS snapshot now

#. Patch this temporary instance as any standalone instance

   * If the temporary instance is available in SSM, use the instructions
     under Apply OS patches above to update the instance using SSM documents
   * If the temporary instance is not available in SSM (e.g. The AMI did not
     contain an installation of the SSM agent), it will be necessary to
     access the instance directly (SSH/RDP) and manually apply updates

#. Prepare the temporary instance for AMI generation by removing data,
   configuration and software that will be deployed by your ASG instance
   launch and bootstrapping code

   * Examples of items you may need to remove:

     * SSH keys and other secrets
     * Log files
     * Application code
     * Software agents

#. Generate an AMI from this temporary instance using the AWS console, AWS
   CLI, or any third-party tool that can call the ``CreateImage``
   `API function <https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateImage.html>`_
#. Terminate the temporary instance

Rolling replacement of instances
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Most ASGs will be updated using CloudFormation, and the stack template will
contain a RollingUpdate ``UpdatePolicy`` for the ASG. If this is the case,
CloudFormation will manage the rolling replacement of your instances -
deploying a new instance, waiting for it to pass ASG Health Checks,
draining and terminating an old instance. You will see a message similar
to the following in the stack *Events* following the stack update, and can
monitor the stack update to completion::

  Rolling update initiated. Terminating 5 obsolete instance(s) in batches of
  1, while keeping at least 4 instance(s) in service. Waiting on resource
  signals with a timeout of PT20M when new instances are added to the
  autoscaling group.

Manual rolling replacement
""""""""""""""""""""""""""

If the ASG is not managed by CloudFormation - or the CloudFormation stack
template does not contain a RollingUpdate ``UpdatePolicy`` for the ASG - then
you will need to perform a manual rolling replacement of the instances in the
ASG. This process is illustrated using the diagram below:

.. image:: ../images/patching_ec2_rollingreplacement.png
   :width: 100%

Alternatively, you may wish to update the CloudFormation stack template to
add an ``UpdatePolicy`` to the Auto Scaling Group resource, similar to the
following::

  "UpdatePolicy": {
    "AutoScalingRollingUpdate": {
      "PauseTime": "20M",
      "WaitOnResourceSignals": "true",
      "SuspendProcesses": [
        "ScheduledActions",
        "ReplaceUnhealthy",
        "AlarmNotification",
        "AZRebalance"
      ],
      "MaxBatchSize": "1",
      "MinInstancesInService": "1"
    }
  }

More information and examples can be found in the CloudFormation User Guide:
`AutoScalingGroup <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html>`_
and
`UpdatePolicy <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html>`_.

In-place patching of ASG instances (emergency only)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

EC2 instances running under an ASG *can* be patched/rebooted in place
using the SSM documents above, but it is important to consider this as
**emergency mitigation only**. This must be followed by an AMI update and
rolling replacement of all instances as soon as possible. New instances
launched at any time in the future will be unpatched (*even if automatic
patching is enabled*), and there will be a configuration discrepancy with
any existing instances, which will be in an untested configuration.

*More information:* Correct functioning of your application within a group of
Auto-Scaling instances relies upon current running instances and instances
launched at any future date/time holding the same configuration. As this
configuration is made through in several stages or layers (examples below),
synchronizing and adequately testing existing instances against the
configuration for future instances can be very difficult and error-prone.
Rackspace's recommended best practice is therefore to update the underlying
AMI and perform a rolling replacement of all Auto-Scaling instances, as
described in this guide.

*Instance launch configuration stages:*

#. AMI: An instance is launched from the AMI in the Launch Configuration

   * Commonly a plain vendor AMI or a customized 'silver'/'gold' AMI
     pre-configured with some software packages or application code

#. Cloud-init: The EC2 service uses cloud-init to perform initial instance
   configuration

   * Includes resetting OS configuration left in the AMI, setting up
     networking, deploying SSH keys, etc

#. User Data: cloud-init then executes the User Data (often used to setup
   software repositories, configuration management agents, etc)
#. Bootstrapping: Installation and configuration of software packages etc,
   usually using CloudFormation cfn-init metadata and/or your Configuration
   Management
#. Application Deployment: Copying and testing your application code, using
   AWS CodeDeploy, Configuration Management, or another dedicated deployment
   agent

.. _recommended_network_configuration_security:

========
Security
========

AWS provides a scalable, highly reliable platform that helps customers deploy
applications and data quickly and securely.

When customers build systems on the AWS infrastructure, security
responsibilities are shared between the customer and AWS. This shared
model can reduce the customer's operational burden as AWS operates, manages,
and controls the components from the host operating system and virtualization
layer down to the physical security of the facilities in which the
services operate. In turn, the customer assumes responsibility and
management of the guest operating system (including updates and security
patches), other associated applications, as well as the configuration of
the AWS-provided security group firewall.

The Rackspace Fanatical Support for AWS offering takes some of the security
burden from the customer by leveraging AWS security best practices and
providing additional security capabilities. These include using/enabling
Security Groups, Config, CloudTrail, CloudWatch, etc. In this section, we
will focus on Security Groups.

Security Groups
---------------

A Security Groups acts as a virtual firewall that controls inbound and
outbound traffic for one or more instances. When an instance is launched in
a VPC, the instance can be assigned up to five security groups that are
associated to the VPC. Specific inbound and outbound rules are then added
to each security group that allows defined traffic to or from its associated
instances. Rules can be modified at any time; the new rules are automatically
applied to all instances that are associated with the security group.

.. note::
  By default, outbound rules allow all traffic to egress the instance and
  inbound rules allow nothing (implicit deny).

Security groups act at the instance level, not the subnet level. Therefore,
each instance in a subnet in a VPC could be assigned to a different set of
security groups, thus easily creating isolation within the same subnet. When
AWS is deciding whether to allow traffic to reach an instance, all the
rules from all the security groups that are associated with the instance are
evaluated at the same time. This is very different to the way Network ACLs
(NACLs) work.

Network ACLs (NACLs)
--------------------

AWS also offers network ACLs with rules similar to your security groups.
NACLs act as a firewall for associated subnets, controlling both inbound and
outbound traffic at the subnet level. The following summarizes the basic
differences between security groups and network ACLs:

**Security Group**

* Operates at the instance level (first layer of defense)
* Supports allow rules only
* Is stateful: Return traffic is automatically allowed, regardless of any
  rules
* We evaluate all rules before deciding whether to allow traffic
* Applies to an instance only if someone specifies the security group when
  launching the instance, or associates the security group with the instance
  later on

**Network ACL**

* Operates at the subnet level
* Supports allow rules and deny rules
* Is stateless: Return traffic must be explicitly allowed by rules
* We process rules in number order when deciding whether to allow traffic
* Automatically applies to all instances in the subnets it's associated with
  (backup layer of defense, so you don't have to rely on someone specifying
  the security group)

Rackspace Security Model
------------------------

As a general best practice, Rackspace advises customers to use Security Groups
as their primary method of securing workloads within AWS. While Network ACLs
(NACLs) are typically more familiar to networking engineers, they often
introduce complexity into AWS architectures.

Security Groups provide more granular control, are stateful (therefore more
intelligent in allowing appropriate traffic) and apply only to the instance
level. By using NACLs as well as Security Groups, you must consider all
traffic in a stateless context (specifying inbound and outbound ports,
including any ephemeral ports used by a given application) and these rules
are applied at a subnet level; the "blast radius" or potential for impact
when a NACL is incorrect or changed is significantly higher, without
providing any tangible benefit over the use of a Security Group.

Rackspace and AWS recommend avoiding NACLs due to potential conflicts with
Security Groups and performance degradation. If there are compliance
requirements (e.g. PCI) that specifically call for NACLs, they will be used
sparingly and with coarse controls to mitigate potential issues.

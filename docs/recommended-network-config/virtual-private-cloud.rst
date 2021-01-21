.. _recommended_network_configuration_vpc:

===========================
Virtual Private Cloud (VPC)
===========================

Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically
isolated section of the Amazon Web Services (AWS) Cloud where you can launch
AWS resources in a virtual network that you define.
`Click here <https://aws.amazon.com/vpc/>`_ to learn more about VPC.

Rackspace Base Network VPC
--------------------------

For most Fanatical Support for AWS customers, Rackspace recommends the
deployment of a single VPC per AWS account to provide operational simplicity
while meeting stringent security requirements. Segregation will be
accomplished by creating Public and Private subnets, and by relying on
carefully created Security Groups that only allow the required granular
access (further details in the
:ref:`Security section <recommended_network_configuration_security>`).

If further segregation were required to control access (e.g. Production vs.
Test vs. Development), Rackspace's recommendation is to create a separate
AWS accounts, and **not** a separate VPC in the same AWS account. This is
because a second VPC in the same AWS account does not provide control plane
isolation of resources, and could complicate ongoing operational processes.

You can assign a single CIDR block to a VPC. The allowed block size is
between a /28 netmask and /16 netmask. In other words, the VPC can contain
from 16 to 65,536 IP addresses. You cannot change the size of a VPC after
you have created it. If your VPC is too small to meet your needs, you will
need to create a new, larger VPC, and then migrate your instances to the new
VPC.

The VPC requires an RFC 1918 CIDR range (Private addresses). The default is
a /16 network, however, you need to carefully consider the range you select
to ensure the range does not overlap with your other environments
(on premise, other AWS VPCs, Rackspace dedicated environments, etc.).

The CloudFormation template captures the CIDR range in the Parameter:
VPCCIDR. Detailed IP addressing recommendations will be discussed in the
:ref:`Subnets section <recommended_network_configuration_subnets>`. The
BaseNetwork CloudFormation template's default VPC CIDR is 172.18.0.0/16.

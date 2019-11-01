.. _recommended_network_configuration_subnets:

=======
Subnets
=======

You can create a VPC that spans multiple Availability Zones. After creating
a VPC, you can add one or more subnets in each Availability Zone. Each
subnet must reside exclusively within one Availability Zone and cannot span
zones. AWS assigns a unique ID to each subnet.

If a subnet's traffic is routed to an Internet gateway, the subnet is known
as a Public subnet. If the instance in a Public subnet needs to communicate
with the Internet, it must have a public IP address or an Elastic IP
address. If a subnet doesn't have a direct route to the Internet gateway, the
subnet is known as a Private subnet.

When you create a subnet, you specify the CIDR block for the subnet. The CIDR
block of a subnet can be the same as the CIDR block for the VPC (for a
single subnet in the VPC), or a subset (to enable multiple subnets). The
allowed block size is between a /28 netmask and /16 netmask. You can create
more than one subnet in a VPC, but the CIDR blocks of the subnets must not
overlap.

Rackspace Subnet Recommendations
--------------------------------

For most deployments, Rackspace recommends having two tiers of Subnets: Public
and Private.

* EC2 instances in Public Subnets have public IP addresses associated with
them and have a direct route to an AWS Internet Gateway (IGW), thus having
the capability (if required) to access or be accessed by the Internet.
* EC2 instances in Private Subnets only have private IP addresses and cannot
be accessed by the Internet. These EC2 instances have the capability to
access the Internet via a NAT Gateway in the Public subnets (further info in
the :ref:`NAT section <recommended_network_configuration_ha_nat>`).

Assuming a typical two AZ deployment, four subnets would be required (two
for Public and two for Private).

.. image:: ../images/recommended_network_configuration_two_subnets.png

In situations where a third AZ is required (e.g. MongoDB servers in the
Private subnets) then six subnets would be required (three for Public and
three for Private).

.. image:: ../images/recommended_network_configuration_three_subnets.png

It is important to note that within each tier, all the subnets will have the
same network mask to simplify the operational processes (e.g. /22 for all
Public subnets and /21 for all Private subnets).

Unlike traditional networking segmentation approaches that requires separate
subnets (VLANs) for web, batch, application, and data tiers, AWS's use of
Security Groups allows you to leverage just the Public and Private subnets,
applying specific Security Groups to each tier (further info in the
:ref:`Security section <recommended_network_configuration_security>`). Thus a
deployment would looks like:

* Public Subnets

  * Bastion servers
  * NAT servers (if not using a NAT Gateway)
  * VPN servers (if not using a Virtual Private Gateway)
  * Web servers not behind any ELB

* Private Subnets

  * Web servers behind an ELB
  * Batch-tier instances
  * App-tier instance
  * Data-tier instances

The CloudFormation template uses the built-in "GetAZs" function to map the
first or second AZ to the specified subnet in a particular region
(e.g. us-west-1a and us-west-1b). The CloudFormation template also captures
the CIDR range for the subnet in the parameters:

* SubnetPublicAZ1 - CIDR for Public subnet
* SubnetPublicAZ2 - CIDR for Public subnet
* SubnetPrivateAZ1 - CIDR for Private subnet
* SubnetPrivateAZ2 - CIDR for Private subnet
* SubnetProtectedAZ1 - CIDR for Protected subnet
* SubnetProtectedAZ2 - CIDR for Protected subnet

It is recommend that you choose the CIDRs carefully to map with the
applications' requirements; however, most AWS customers typically
allocate roughly double the IP addresses for private subnets than public
subnets. The default CIDRs in the BaseNetwork CloudFormation template are
detailed in the
:ref:`CloudFormation section <recommended_network_configuration_vpc_defaults>`.

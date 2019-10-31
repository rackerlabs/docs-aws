.. _cloudformation:

==============
CloudFormation
==============

There are two important concepts to understand when using AWS
CloudFormation: *templates* and *stacks*. A template is used to describe your
AWS resources and their properties. When you create a stack, AWS
CloudFormation provisions the resources that are described in the template.

To learn more, view the AWS documentation on
`stacks <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html>`_
and
`templates <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-guide.html>`_.

Rackspace CloudFormation Template: BaseNetwork
----------------------------------------------

In our Aviator :ref:`service level <service_levels>` we assist customers
with creating custom CloudFormation templates to describe their
environments. For customers at both the Navigator and Aviator service
levels we make a standardized CloudFormation Template, BaseNetwork, available
to create the initial network and all of its necessary components. The
rest of this section will describe the elements that are part of the
BaseNetwork CloudFormation Template, and their associated components. The
BaseNetwork template can be downloaded from
:download:`here <../assets/BaseNetwork.template>`.

**Parameters**

* VPCCIDR - CIDR for the VPC
* SubnetPublicAZ1 - CIDR for Public subnet
* SubnetPublicAZ2 - CIDR for Public subnet
* SubnetPrivateAZ1 - CIDR for Private subnet
* SubnetPrivateAZ2 - CIDR for Private subnet
* InstanceTenancy - Single or Multi-Tenant Hypervisor
* Environment - Dev, Test, Prod etc.

**Networking**

* The CloudFormation template has two major options:

  * 2 Availability Zones with 4 Subnets
  * 3 Availability Zones with 6 Subnets

.. _recommended_network_configuration__vpc_defaults:

* Defaults to using CIDR: 172.18.0.0/16

  * Public Ranges

    * 172.18.0.0/22 - 1,022 Hosts - Public AZ1
    * 172.18.4.0/22 - 1,022 Hosts - Public AZ2
    * 172.18.8.0/22 - 1,022 Hosts - Public AZ3
    * 172.18.12.0/22 - 1,022 Hosts - Public AZx
    * 172.18.16.0/20 - 4,094 Hosts - Additional public (4 more public with
      size listed above)

  * Private Ranges

    * 172.18.32.0/21 - 2,046 Hosts - Private AZ1
    * 172.18.40.0/21 - 2,046 Hosts - Private AZ2
    * 172.18.48.0/21 - 2,046 Hosts - Private AZ3
    * 172.18.56.0/21 - 2,046 Hosts - Private AZx
    * 172.18.64.0/18 - 16,382 Hosts - - Additional private (8 more private
      using size above)

  * 172.18.128.0/17 - 32,766 Hosts - Special needs (16 more private using
    size above)

* Route Tables

  * RouteTablePublic - route table for Public subnets
  * RouteTablePrivateAZ1 - route table for Subnet Private AZ1
  * RouteTablePrivateAZ2 - route table for Subnet Private AZ2

* Default Gateways

  * Internet Gateway (IGW) - Default GW for the Public Subnets
  * ASGNatAZ1 Instance ID - Default GW for Subnet Private AZ1
  * ASGNatAZ2 Instance ID - Default GW for Subnet Private AZ2
  * ASGNatAZ3 Instance ID - Default GW for Subnet Private AZ3 (if necessary)

**HA NAT**

* High Availability NAT gateways get created in the public subnets (1 per AZ)

  * NatAZ1
  * NatAZ2
  * NatAZ3 (if necessary)

**Tags**

* Service Provider - "Rackspace"
* Environment - from Parameter Environment
* Name - Resource name (e.g. IGWBase, SubnetPublicAZ2)

**Outputs**

* outputVPCID
* outputSubnetPublicAZ1
* outputSubnetPublicAZ2
* outputSubnetPublicAZ3 (if necessary)
* outputSubnetPrivateAZ1
* outputSubnetPrivateAZ2
* outputSubnetPrivateAZ3 (if necessary)

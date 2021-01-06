.. _recommended_network_configuration_ha_nat:

=====================================================
Highly Available Network Address Translation (HA NAT)
=====================================================

In a VPC, you can use private subnets for instances that do not require
directly accessible Internet-facing IP addresses. Instances in a private
subnet can access the Internet without exposing their private IP address
by routing their traffic through a Network Address Translation (NAT)
gateway in a public subnet. Each NAT gateway is created in a specific
Availability Zone (AZ) and has built-in redundancy in that AZ.

Rackspace NAT Recommendations
-----------------------------

As mentioned above, NAT gateways are required for instances in a Private
subnet to access the Internet. In the recommended *two AZ deployment*,
Rackspace recommends leveraging one NAT gateway in each AZ - not sharing a
NAT gateway with more than one AZ.

.. image:: /_static/img/recommended_network_configuration_ha_nat_gateway.png

NAT gateways are created via the CloudFormation template which:

* Creates an Elastic IP Address (EIP) for each NAT gateway to be reachable
  on public networks

* Creates a route for each private network in each AZ to route all traffic
  through the corresponding NAT gateway in each AZ.

Rackspace does not recommend creating resources in one AZ that rely
exclusively on a NAT gateway in a different AZ. In the event of a NAT gateway
failure, resources in any AZ that depend on that single NAT gateway will be
unable to access the Internet.


Migrating from a NAT instance
-----------------------------

If you were previously using NAT instances for allowing resources on private
networks to access the Internet, you should create a NAT gateway in each
AZ, and change the routing tables for your private networks to use the new NAT
gateway. Then, existing resources associated with your NAT instances
(autoscale groups, NAT instances in EC2) can be removed; the change will
only impact connections open at the time of the change to the routing table.

You should also take care to ensure that any existing whitelist of IPs from
the NAT instances are also adjusted to reflect the new IPs of your NAT
gateways.

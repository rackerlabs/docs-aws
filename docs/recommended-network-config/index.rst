.. _recommended_network_configuration:

=================================
Recommended Network Configuration
=================================

This section describes the necessary scaffolding and processes to create
the initial AWS network environment for Rackspace customers using AWS
through the Fanatical Support for AWS offering. A CloudFormation template
and additional supporting scripts will be used to create the initial
network and all of its necessary components, thus providing Public and
Private subnets for EC2 instances and other AWS services.

.. image:: ../images/recommended_network_configuration.png

This includes:

* A Single VPC
* Availability Zones (AZ) Options

  * Two AZ deployments are the standard
  * Three AZ deployment to address specific application requirements

* Subnets

  * Public Tier - could be accessible from the Internet
  * Private Tier - could access the Internet via a NAT environment
  * Subnets in each Tier will have the same network masks

* Highly Available Outbound NAT (HA-NAT) with Elastic IP - for EC2 gateways
  in the Private Subnets
* Security Groups - primary method to isolate and secure workloads
* Tagging - to address Rackspace billing and operational processes

You can access the template by downloading it from
`here <https://9d31a28d75515373cbe0-39a001adc5755d26f84687a5d61bbba1.ssl.cf1.rackcdn.com/AWS%20files/BaseNetwork.template>`_.

Note: The template will create AWS resources for which you will be charged
(for example, EC2 NAT gateways).

----

.. toctree::
   :maxdepth: 1

   cloudformation.rst
   virtual-private-cloud.rst
   availability-zones.rst
   subnets.rst
   ha-nat.rst
   security.rst
   tagging.rst

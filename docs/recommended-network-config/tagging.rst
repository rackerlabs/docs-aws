.. _recommended_network_configuration_tagging:

=======
Tagging
=======

AWS customers use tags to organize their EC2 resources (instances, images,
load balancers, security groups, and so forth), RDS resources (DB
instances, option groups, and more), VPC resources (gateways, option
sets, network ACLS, subnets, and the like), Route 53 health checks, and
S3 buckets. Tags are used to label, collect, and organize resources and
become increasingly important as customers use AWS in larger and more
sophisticated ways.

For example, customers can tag relevant resources and then take advantage
:ref:`cost allocation via tagging <billing_tagging>`.

Rackspace CloudFormation Tagging
--------------------------------

The BaseNetwork CloudFormation template makes use of tagging to drive many
of the operational functions associated with the Fanatical Support for
AWS offering. These include:

* Service Provider - "Rackspace"
* Environment - from Parameter Environment
* Name - Resource name (e.g. IGWBase, SubnetPublicAZ2)

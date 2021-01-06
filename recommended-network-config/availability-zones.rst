.. _availability_zones:

========================
Availability Zones (AZs)
========================

Each region contains multiple distinct locations called Availability Zones, or
AZs. Each Availability Zone is engineered to be isolated from failures in
other Availability Zones, and to provide inexpensive, low-latency network
connectivity to other AZs in the same region.

An Availability Zone (AZ) is one or more data centers in close geographic
proximity connected together over low-latency/high-speed links.

By launching instances in separate Availability Zones, you can protect your
applications from the failure of a single location. Note: Each AWS region
provides a minimum of two AZs.

Rackspace Availability Zone Recommendations
-------------------------------------------

Rackspace typically recommends a two AZ deployment, which provides
availability and redundancy while reducing complexity, operational
overhead, and cost.

There are situations where a third AZ may be required to address specific
application-centric requirements:

* Example 1: MongoDB's Election and Quorum constraints require three AZs to
  survive a single AZ failure that contains the primary and a secondary in a
  three-node cluster.

  .. image:: /_static/img/recommended_network_configuration_mongodb.png

* Example 2: Applications that have strict load and availability requirements
  that cannot be met by relying on Auto Scaling Groups require
  over-provisioning. Adding a third AZ could be considered to reduce costs
  by lowering needed the over-provisioning.

  .. image:: /_static/img/recommended_network_configuration_autoscale_costs.png

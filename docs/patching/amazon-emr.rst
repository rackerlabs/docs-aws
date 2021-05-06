.. _patching_emr:

===================
Patching Amazon EMR
===================

Recommended Method
------------------

Rackspace's recommended method for securing EMR clusters with current
software updates is to launch a new EMR cluster, using the latest
`EMR release <https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html>`_.
EMR clusters are not intended for indefinite runtime and are expected to
terminate after a specific processing job (*Transient clusters*) or after a
succession of jobs (*Long-running clusters*).

Note: If an EMR cluster is using a custom AMI, a new AMI should be create
including the desired updates, and a new EMR cluster launched with the new AMI
(the AMI used for an EMR cluster cannot be altered after launch).

Alternative Method
------------------

It is possible to manually patch cluster instances in-place using OS
management access to the instances. This may be appropriate if an EMR
cluster needs to remain provisioned for a recurring job, but security
updates are critical. The EMR cluster should be replaced using the recommended
method above as soon as a downtime window is available.

.. note::
  Any new instances that are launched - either through scaling changes
or self-healing - will apply outstanding patches at launch.

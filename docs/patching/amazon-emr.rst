.. _patching_emr:

===================
Patching Amazon EMR
===================

Recommended method
------------------

Rackspace recommends that you secure EMR clusters with current
software updates by launching a new EMR cluster with the latest
`EMR release <https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html>`_.
EMR clusters should not have indefinite runtime and should
terminate after a specific processing job (*Transient clusters*) or after a
succession of jobs (*Long-running clusters*).

.. note::
   If an EMR cluster uses a custom AMI, you should create a new AMI with
   the desired updates and launch a new EMR cluster with the new AMI. You cannot
   alter the AMI used for an EMR cluster after launch.

Alternative method
------------------

It is possible to manually patch cluster instances in place by using OS
management access to the instances. This might be appropriate if an EMR
cluster needs to remain provisioned for a recurring job, but security
updates are critical. You should replace the EMR cluster by using the
preceding recommended method at the next downtime window.

.. note::
   Any new instances launched, either through scaling changes
   or self-healing, apply outstanding patches at launch.

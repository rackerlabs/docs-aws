.. _patching_ecs:

===================
Patching Amazon ECS
===================

Rackspace's recommended method for securing ECS clusters with current software
updates is to update the environment to the latest available
`Amazon ECS-Optimized AMI <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html>`_.
Following this, rotate (replace) the host instances following the methods
described in the :ref:`Patching Guide for Amazon EC2 <patching_ec2>` document.

.. note::
  If an ECS cluster is using a custom AMI, this AMI will need to be rebuilt
  with the necessary updates prior to updating the environment with the new
  AMI and following the rest of the recommended method above.

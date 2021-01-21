.. _patching_batch:

==================
Patching AWS Batch
==================

Managed Compute Environments
----------------------------

Rackspace's recommended method for securing AWS Batch *managed compute
environments* with current software updates is to create a new compute
environment (defaults to the latest
`Amazon ECS-Optimized AMI <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html>`_,
or rebuild a new custom AMI). This new compute environment can then be
added to an existing AWS Batch job queue, and the old compute environment
removed and deleted.

Unmanaged Compute Environments
------------------------------

For *unmanaged compute environments*, you manage your own compute resources
as an ECS cluster, and should follow the
:ref:`Patching Amazon ECS <patching_ecs>` guidelines to update the ECS cluster.

For more information, see
`Compute Environments <https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html>`_
in the AWS Batch User Guide.

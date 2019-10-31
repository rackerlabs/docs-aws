.. _patching_opsworks_stacks:

============================
Patching AWS OpsWorks Stacks
============================

Recommended Method
------------------

Rackspace's recommended method for securing OpsWorks Stacks with current
software updates is to replace the instances with new instances. New
instances will have the latest set of security patches installed during
bootstrapping. Once the new instances are online, the old instances can be
deleted. For more detailed information on this or the alternative options
listed below, see
`Managing Linux Security Updates <https://docs.aws.amazon.com/opsworks/latest/userguide/workingsecurity-updates.html>`_
in the AWS OpsWorks User Guide.

Alternative Methods
-------------------

#. Run the Update Dependencies stack command (Chef 11.10 or older stacks),
   which will install updates in-place on the instances.
#. Set the InstallUpdatesOnBoot parameter to false for the instances or
   layer, and install updates manually using OS management access.

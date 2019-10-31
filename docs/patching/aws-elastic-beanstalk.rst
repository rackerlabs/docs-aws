.. _patching_elastic_beanstalk:

==============================
Patching AWS Elastic Beanstalk
==============================

Rackspace's recommended method for securing Elastic Beanstalk environments
with current software updates is to update the environment in-place to the
latest version of the environment's platform. Elastic Beanstalk will update
the Auto-Scaling Group and Launch Configuration with the new AMI version and
will perform a rolling replacement of instances. For more information, see
`Updating Your Elastic Beanstalk Environment's Platform Version <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.platform.upgrade.html>`_
and
`Elastic Beanstalk Supported Platforms <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html>`_.

Managed Platform Updates
------------------------

Additionally, you may wish to enable
`managed platform updates <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-platform-update-managed.html>`_,
which can update the environment's platform version inside a weekly
maintenance window (not available for the .NET on Windows Server platform).

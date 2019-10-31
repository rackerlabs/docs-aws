.. _advanced_usage:

==============
Advanced Usage
==============

Copying files
-------------

The ``sft`` command line utility can be used via scp to copy files to a target
instance::

    # syntax
    scp -o "ProxyCommand sft proxycommand <target_instance> --via <passport bastion>" <src> <target_instance>:<dst>

    # example copying files.tar.gz to i-18a61fa5
    scp -o "ProxyCommand sft proxycommand i-18a61fa5 --via i-8a982137" files.tar.gz i-18a61fa5:~/

``<target_instance>``` can be a hostname or instance ID - see
``sft list-servers`` and ``sft resolve <target_instance>```.

Forwarding ports
----------------

The ``sft`` command line utility can also be used to forward ports from a
Passport bastion to other network addresses in AWS::

    # syntax
    sft ssh -L <local port>:<network address reachable by passport bastion>:<remote port> <passport bastion>

    # example forwarding localhost:13306 to an RDS instance inside AWS on port 3306
    sft ssh -L 13306:my_instance.us-east-1.rds.amazonaws.com:3306 i-0e41104c88525fbc5

Once the above ``sft ssh`` command is successfully running, you can use
familiar local tools and connect them to ``localhost:13306`` to work with
your RDS instance. Note that you must also have security group rules in
place that permit access from your Passport bastion to the AWS resource
you're accessing.

Static IP Support
-----------------

.. note::
  Static IP support is available as part of a **private beta**. Please reach
  out to your Account Manager for more information and to request access.


Static IP support for ScaleFT enables strict egress rules to the ScaleFT
control plane from within a VPC. This feature is implemented with a custom
DNS endpoint that is used when enrolling servers with ScaleFT. To use the
endpoint with static IPs, set
``InitialURL: https://scaleft-static.api.manage.rackspace.com``
in the sftd config file located at ``/etc/sft/sftd.yaml``.

Additionally, your VPC must be configured to allow egress traffic to access
the ScaleFT control plane. At the time of writing, egress traffic must be
allowed to the following IP addresses on port 443:

- 34.218.53.95
- 54.214.136.66
- 54.218.141.210

On-Demand Users
---------------

.. note::
  On-Demand Users support is available as part of a **private beta**. Please
  reach out to your Account Manager for more information and to request access.


On-Demand users improves how users are managed on Passport-enabled servers.
Once this feature is enabled, users will be created on a server when an
access request is created, rather than at the time of server enrollment
with ScaleFT.

Access to this beta requires that all servers are using
`ScaleFT Server Agent v1.32.2 or higher <https://www.scaleft.com/docs/release-history/#v1.32.2>`_.
This requirement is checked as part of the beta onboarding process. Once you
have been added to the beta
and this requirement has been met, there is no additional setup needed.
On-Demand Users will take effect immediately.

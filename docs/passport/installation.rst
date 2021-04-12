.. _v2_installation:

Installation
============

AWS Systems Manager Agent
-------------------------

All EC2 instances must have
`AWS Systems Manager Agent 2.3.672.0 or higher <https://docs.aws.amazon.com/systems-manager/latest/userguide/ssm-agent.html>`_
installed to work with Passport. Each EC2 instance must also be
:ref:`configured with an instance profile <instance>`
that allows AWS Systems Manager to perform actions on your instances. Rackspace
recommends using the ``AmazonSSMManagedInstanceCORE`` managed IAM policy.

You can learn more about how AWS Systems Manager is used in the
:ref:`Architecture section <v2_architecture>`.

.. _instance: https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-instance-profile.html


Passport CLI
------------

You must install the Passport CLI on your local workstation in order to
connect to instances with Passport. Before you install the Passport CLI, make
sure that you have the following dependencies installed:

* `AWS CLI v1.16.220 or higher <https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html>`_
* `AWS Session Manager Plugin v1.1.26 or higher <https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html>`_

Linux and MacOS
---------------

Run the following command in your terminal:

.. code::

   curl -sL https://passport-packages.manage.rackspace.com/installer/latest | sudo sh -s


If you'd like to install the CLI directly rather than using the installation
script, you can download the latest binary using the following links:

* Linux - `Binary <https://passport-packages.manage.rackspace.com/releases/LATEST/linux/passport>`_,
  `SHA256 Checksum <https://passport-packages.manage.rackspace.com/releases/LATEST/linux/SHA256SUMS>`_
* MacOS - `Binary <https://passport-packages.manage.rackspace.com/releases/LATEST/osx/passport>`_,
  `SHA256 Checksum <https://passport-packages.manage.rackspace.com/releases/LATEST/osx/SHA256SUMS>`_

Once you have installed the Passport CLI, you can verify that it is installed
and working correctly by running the following command:

.. code::

   passport --help


Windows
-------

Download and run the installer by using the following links:

* `Win32 <https://passport-packages.manage.rackspace.com/windows/LATEST/i386/passport.msi>`_
* `Win64 <https://passport-packages.manage.rackspace.com/windows/LATEST/amd64/passport.msi>`_

----

Once the AWS Systems Manager Agent and Passport CLI are install, you're ready
to start using Passport. You can learn more about how to use the Passport CLI
in the :ref:`cli_usage` section.

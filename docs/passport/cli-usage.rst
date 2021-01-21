.. _cli_usage:

CLI Usage
=========

Once the Passport CLI is installed, you can log in to the CLI. The following
command will open your browser and you will be prompted to log in with your
Rackspace credentials:

.. code::

   passport auth login


Next, browse to the Passport section of the Fanatical Support for AWS control
panel. Click **Create Access Request** and complete the form to initiate
access to your instances.

Once the access request is active, you can connect to any instance that belongs
to that access request by using the following command:

.. code::

   passport connect <instance-id>


When connecting to an EC2 instance running Linux, the ``connect`` command will
automatically open an SSH connection to the target server.

When connecting to an EC2 instance running Windows, the ``connect`` command
will provide you with connection information for an RDP connection. Here is a
sample output for an RDP connection:

.. code::

   Windows Login Credentials:

   Host: localhost:58829
   Username: <username>
   Password: <password


To connect with RDP, open your preferred RDP client and use the information
above to connect.

SSH Integration
---------------

Most users will only interact with the ``passport`` CLI tool directly. However,
you can use Passport with any SSH-based tooling by using the ``ssh-config``
command. This command generates an SSH config that can be used with any
tooling that supports SSH config files, including ``ssh`` port forwarding,
``scp``, and Ansible.

.. code::

   # Outputs a path to an SSH config
   passport ssh-config


Forwarding Ports
----------------

SSH port forwarding is commonly used to access a service that is not directly
accessible to the end user. For example, RDS database instances do not have
the SSM agent installed and cannot be used with Passport directly. However,
SSH port forwarding can be used to access the RDS instance by using a
Passport-enabled server as an intermediary.

.. code::

   # Forwarding localhost:13306 to an RDS instance on port 3306 through i-123456
   ssh -F $(passport ssh-config) -L 13306:my_instance.us-east-1.rds.amazonaws.com:3306 i-123456


Once the above command is successfully running, you can use familiar local
tools and connect them to ``localhost:13306`` to work with your RDS instance.

.. note::

   You must also have security group rules in place that permit access from the
   intermediate instance to the AWS resource that you're accessing.


Copying Files
-------------

``scp`` can be used to copy files to and from a target instance. The following
command copies the file **data.csv** from your local workstation to your
home directory on the target server **i-1234567890**:

.. code::

   # Copy data.csv from the local workstation to i-1234567890
   scp -F $(passport ssh-config) data.csv i-1234567890:~

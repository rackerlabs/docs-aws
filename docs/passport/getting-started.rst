.. _passport_getting_started:

===============
Getting Started
===============

To get started with Passport, follow these instructions:

1. Ensure that your AWS account is at the Aviator service level and that
   you are an Admin on the AWS account.

  - You can view your service level using the AWS Accounts list in the
    `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_.
  - If needed, ask your Account Owner to visit the
    `User Management <https://account.rackspace.com/users>`_
    page to provide Admin access to **Fanatical Support for AWS** on each
    AWS account for which you need access.

2. Install the ScaleFT
   :ref:`Server Agent <passport_scaleft_agents_and_tools_server_agent>` on
   your existing and/or new EC2 instances.
3. Install the ScaleFT
   :ref:`Workstation Tools <passport_scaleft_agents_and_tools_workstation_tools>`
   on your Mac OS X, Linux, or Windows workstation.
4. Follow the instructions in the
   :ref:`Workstation Tools <passport_scaleft_agents_and_tools_workstation_tools>`
   section to enroll your workstation.
5. Browse to the `Passport section <https://manage.rackspace.com/aws/passport>`_
   of the Fanatical Support for AWS Control Panel and click the
   **Create Access Request** button. Complete and submit the form.
6. Once your bastion instance is provisioned, click the links within the UI
   to access your servers. They will use a URL handler registered by the
   Workstation Tools to open a terminal window and execute the *sft ssh* or
   *sft rdp* command which will authenticate you (once per session), download
   the appropriate certificates in the background, and connect you to your
   desired EC2 instance.

Once you have completed your work, you can return to your access request in the `Passport section <https://manage.rackspace.com/aws/passport>`_ of the Fanatical Support for AWS Control Panel and complete it to remove the bastion instance and other setup (such as security groups allowing access). As a reminder, your access request will automatically complete (expire) after 55 minutes unless you extend it via the same UI.

.. _offboarding:

===========
Offboarding
===========

While we hope to serve you for life, should you ever decide that you no
longer require Rackspace's management of your AWS account we can work
with you to transition your account to a direct relationship with AWS.
You would retain access to all AWS resources, but would lose access
to Rackspace tooling such as :ref:`Logbook <logbook>` and
:ref:`CloudHealth <cloudhealth>` as well as Rackspace's AWS expertise and
service. If you are considering making this change, please
:ref:`contact your Account Manager <support>` for further assistance.

During the offboarding process, all Rackspace SNS Topics and IAM Roles
will be removed, with the exception of "RackspaceDefaultEC2Role" IAM Role.
This role might be used by your EC2 instances. You can keep using this
role or you can remove it if it's not used by any instances.

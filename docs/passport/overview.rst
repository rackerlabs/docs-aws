.. _overview:

========
Overview
========

Network Connectivity
--------------------

When initiating an access request, one of the required parameters is the
source IP address that traffic will be initiated from inbound to the
bastion instance. Rackers logging into your environment will actually
proxy their traffic via the Rackspace shared support bastions before
reaching their bastion instance in your VPC. Security groups are used to
restrict inbound traffic to the bastion instance to SSH (TCP port 22) from
the source IP specified in the access request.

Security groups are also used to allow traffic from the bastion inbound to
your other EC2 instances. In an attempt to avoid the default AWS limit of
five security groups per EC2 instance, a single security group is leveraged
per EC2 instance regardless of the number of bastions active in your
environment at any point in time. Each instance's bastion security group
contains a list of all bastions that correspond to valid access requests for
the instance in question. Once the final access request is completed or
expires, the security group is automatically removed.

There are a couple of important considerations to account for in order to
avoid interfering with the bastion service:

1. It is important to ensure that no more than four security groups per
   EC2 instance are used on your account in order to allow for a fifth security
   group to be provisioned on-demand for bastion access. If five security
   groups are already in use and you have the default AWS limits, the bastion
   access request could fail and delay Racker troubleshooting of issues
   impacting your environment.
2. Network ACLs (NACLs) have the potential to interfere with the specific
   traffic flows expected to be allowed by security groups, and could delay
   Racker troubleshooting of issues impacting your environment. Please
   :ref:`contact your Support team <support>` prior to implementing NACLs so
   that we can help you avoid this issue.

Preferred Subnet
----------------

After creating an access request, Passport provisions a bastion for
establishing secure connections to your EC2 instances. To provision the
bastion, Passport needs a public subnet that allows traffic to the Internet
Gateway for your VPC.

By default, Passport will try to find a suitable public subnet itself, which
works for most customers. However, Passport may have difficulty finding a
suitable public subnet in some environments, which may cause Passport errors.

If you have a particular subnet you want Passport to use, you can specify
your preferred Passport subnet by simply creating the tag `passport=true`
for the subnet. Passport can associate only one subnet with the bastion, so
if a particular VPC has multiple subnets with the tag ``passport=true``,
Passport will try using the first subnet it finds. This may be undesirable, so
we recommend that a VPC has only one preferred Passport subnet.

If you have no preferred Passport subnet, Passport falls back to automatically
finding a default subnet. If you have subnets that you definitely do not
want Passport to try using as the default subnet, you can create the tag
``passport=false`` for those subnets. This is valuable if you want to blacklist
particular subnets from being used by Passport.

Authentication
--------------

Rackspace uses the ScaleFT Access offering from
`ScaleFT <https://www.scaleft.com>`_ to generate temporary, short-lived
(5 minute) authentication certificates for SSH and RDP that are signed by
unique managed certificate authorities placed on each EC2 instance by the
ScaleFT agent. The certificates are downloaded to a registered client
workstation being used by an authenticated user, and rotation is managed
every 5 minutes while a valid, non-expired access request is present in the
bastion service.

ScaleFT Access is used to provide authentication to both the bastion instance
and other EC2 instances in your environment.

Tags
----

All bastion instances and security groups created by Passport are tagged
with the following keys:

- ``Application`` (always has a value of "Rackspace Fanatical Support for
  AWS - Passport")
- ``PassportRequestId``
- ``PassportRequestedBy``
- ``PassportRequestorType`` (denotes whether the access request was created
  by a customer or a Racker)

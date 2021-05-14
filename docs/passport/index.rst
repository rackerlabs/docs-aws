.. _passport_v2:
.. |PassportTM|  raw:: html

    Passport&trade;

========
Passport
========

The Fanatical Support for AWS offering includes access to our |PassportTM|
service. This is the same capability that Rackers use to access your
environment. Passport leverages `AWS Systems Manager
<https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html>`_
to provision short lived users onto your EC2 instances and provide network
access into your VPC.

Passport v2 offers several improvements over our original Passport tool,
including:

* User accounts are created on demand and cleaned up after use * Public subnets
and bastion hosts are no longer required in customer VPCs * EC2 instances with
multiple Elastic Network Interfaces (ENIs) are now
  supported

Passport’s primary concept is an **Access Request**. Each access request defines
who is accessing your account, which specific EC2 instances they are accessing,
the duration of the access request, and the reason for the access. Access
requests default to expiring after 1 hour but can be extended up to 12 hours.

As an example, a Racker receiving a CloudWatch monitoring alarm for CPU
utilization on your application server might create an access request
referencing the alert ticket and granting them access to your active and passive
database instances. Once troubleshooting and remediation is complete, the Racker
completes the access request, immediately removing the short-lived user from
your instances.

All access request actions, from access request creation through expiration, are
logged in :ref:`Logbook <logbook>`.


.. toctree::
   :maxdepth: 3

   installation.rst
   cli-usage.rst
   permissions.rst
   architecture.rst
   changelog.rst


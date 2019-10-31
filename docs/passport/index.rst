.. _passport:
.. |PassportTM|  raw:: html

    Passport&trade;

========
Passport
========

The Fanatical Support for AWS offering includes access to our
|PassportTM| service at the :ref:`Aviator service level <service_levels>`.
This is the same capability that Rackers use to access your environment.
Passport manages the provisioning of short-lived, access-limited,
fully-audited bastion servers within your AWS account's VPC that can either
be used directly or as a jump host for direct connectivity to other EC2
instances in the same VPC. Passport solves for both network connectivity
and authentication into your environment.

Passport's primary concept is an **Access Request**. Each access request
defines who is accessing your account, which specific EC2 instances they are
accessing, which bastion instance is being used, the duration of the access
request, and the reason for the access. Access requests default to expiring
after 55 minutes (in order to optimize for the hourly billing of the bastion
instances), but can be extended up to 11 hours and 55 minutes. A bastion
instance will only ever be used by a single user, helping to ensure the
integrity of the bastion operating system for each subsequent access request.

As an example, a Racker receiving a CloudWatch monitoring alarm for CPU
utilization on your database server might create an access request
referencing the alert ticket and granting them access to your active and
passive database instances. Once troubleshooting and remediation is
complete, the Racker completes the access request, immediately removing the
bastion instance and all associated access.

All access request actions, from access request creation through
expiration, are logged in :ref:`Logbook <logbook>`.


.. toctree::
   :maxdepth: 1

   getting-started.rst
   overview.rst
   scaleft.rst
   advanced-usage.rst
   architecture.rst

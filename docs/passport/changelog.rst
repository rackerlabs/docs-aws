.. _v2_changelog:

Changelog
=========

2020-10-02
----------

Version: `TODO`

Support for SHA-2 Certificate Signing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Previous version of Passport always signed SSH keys using the SHA-1 algorithm. Newer OSes, including Ubuntu 20, are now shipping openssh 8.2. openssh 8.2+ drops support for SHA-1 certificates. Starting with this version of Passport, Passport will always generate both SHA-1 and SHA-2 certificates and attempt to authenticate with both versions. This allows Passport to work for older OSes that only support SHA-1 as well as newer OSes that only support SHA-2.



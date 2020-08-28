.. _security:

========
Security
========

Rackspace Shared Management Services
------------------------------------

Rackspace takes the security of our shared management services and the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
extremely seriously. All infrastructure is deployed on AWS leveraging the
same set of best practices that we apply to customer accounts. The following
sections provide a sample of some of the key security focus areas.

Racker Authentication
^^^^^^^^^^^^^^^^^^^^^

All Rackspace employees must leverage two-factor authentication for all access
to customer account data and customer environments.

Racker Privileges
^^^^^^^^^^^^^^^^^

The level of privileges each Racker has to our Fanatical Support for AWS
management systems is tightly controlled based on job role and is
periodically reviewed to ensure that each Racker has the minimum level of
permissions required to adequately perform their job duties. All privilege
changes require management approval and are also logged for later review.

Encryption at Rest
^^^^^^^^^^^^^^^^^^

All databases leverage the AWS Key Management Service (KMS) for data
encryption at rest. All EBS volumes are encrypted with KMS in addition to
application-level encryption of secrets using KMS and the AWS SDKs.

Encryption in Transit
^^^^^^^^^^^^^^^^^^^^^

All communication between services that make up the Fanatical Support for
AWS shared management system are encrypted during transit using SSL. Our
customer and Racker UIs and APIs are only accessible via HTTPS.

AWS Account Best Practices
^^^^^^^^^^^^^^^^^^^^^^^^^^

As outlined in the :ref:`AWS Accounts section <account_defaults>` we always
enable AWS CloudTrail and AWS Config in all regions for each new account. We
also have checks within :ref:`CloudHealth <cloudhealth>` that ensure these
remain enabled and configured per our best practices.

Activity Logging
^^^^^^^^^^^^^^^^

As described in the :ref:`Rackspace Logbook section <logbook>` all control
plane and data plane activities are logged and visible to both customers and
Rackers via the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_,
providing a complete playback of events that occurred on an account.

AWS Security
------------

Amazon Web Services places a high degree of importance on the security of
your infrastructure. For an overview of the AWS Security Processes we
recommend reviewing their
`whitepaper <https://d0.awsstatic.com/whitepapers/Security/AWS_Security_Whitepaper.pdf>`_.

We also encourage you to review the
`Securing Data at Rest with Encryption whitepaper <https://d0.awsstatic.com/whitepapers/AWS_Securing_Data_at_Rest_with_Encryption.pdf>`_
for an overview of the methods for securing your data.

If you have questions regarding any aspect of the whitepapers or the security
of your environment, please
:ref:`contact a member of your Support team <support>`.

Security Updates
^^^^^^^^^^^^^^^^

As Amazon Web Services says on their
`Security Bulletins <https://aws.amazon.com/security/security-bulletins/>`_
web page, "No matter how carefully engineered the services are, from time
to time it may be necessary to notify customers of security and privacy
events with AWS services."

If you are interested in staying informed about these security bulletins, the
AWS `Security Bulletins <https://aws.amazon.com/security/security-bulletins/>`_
web page or the companion
`RSS feed <https://aws.amazon.com/security/security-bulletins/feed/>`_ are
the appropriate channels to watch. From time to time, Rackspace will provide
additional detail or guidance to our customers for specific security
incidents. We will publish such value-add security updates below.

.. toctree::
   :maxdepth: 1

   processor_speculative_execution_research_disclosure.rst

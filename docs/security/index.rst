.. _security:

========
Security
========

The following sections describe security considerations:

Rackspace shared management services
------------------------------------

Rackspace takes the security of our shared management services and the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
extremely seriously and deploy all infrastructure on AWS leveraging the
same best practices that we apply to customer accounts. The following
sections provide a sample of some of the key security focus areas.

Racker authentication
^^^^^^^^^^^^^^^^^^^^^

All Rackspace employees must leverage multifactor authentication for all access
to customer account data and customer environments.

Racker privileges
^^^^^^^^^^^^^^^^^

Rackspace tightly controls each Racker's access privileges for our Fanatical
Support for AWS management systems based on job role, reviewing it
periodically to ensure that each Racker has the minimum level of
permissions required to perform their job duties adequately. We also log
all privilege changes that require management approval for later review.

Encryption at rest
^^^^^^^^^^^^^^^^^^

All databases leverage the AWS Key Management Service (KMS) for data
encryption at rest. We encrypt all EBS volumes with KMS and use KMS
and the AWS SDKs for application-level encryption of secrets.

Encryption in transit
^^^^^^^^^^^^^^^^^^^^^

We encrypt all communication between services that make up the Fanatical
Support for AWS shared management system during transit by using SSL. You
can access our customer and Racker UIs and APIs only through HTTPS.

AWS account best practices
^^^^^^^^^^^^^^^^^^^^^^^^^^

As outlined in the :ref:`AWS Accounts section <account_defaults>`, we always
enable AWS CloudTrail and AWS Config in all regions for each new account. We
also have checks within :ref:`CloudHealth <cloudhealth>` that ensure these
remain enabled and configured according to our best practices.

Activity logging
^^^^^^^^^^^^^^^^

As described in the :ref:`Rackspace Logbook section <logbook>`, the system logs all control
plane and data plane activities and makes them visible to both customers and
Rackers through the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_,
providing a complete playback of events that occurred on an account.

AWS security
------------

Amazon Web Services places a high degree of importance on the security of
your infrastructure. For an overview of the AWS Security Processes, we
recommend reviewing their
`whitepaper <https://d0.awsstatic.com/whitepapers/Security/AWS_Security_Whitepaper.pdf>`_.

We also encourage you to review the
`Securing Data at Rest with Encryption whitepaper <https://d0.awsstatic.com/whitepapers/AWS_Securing_Data_at_Rest_with_Encryption.pdf>`_
to see an overview of the methods for securing your data.

If you have questions about the whitepapers or environment security,
:ref:`contact a member of your Support team <support>`.

Security updates
^^^^^^^^^^^^^^^^

As Amazon Web Services says on their
`Security Bulletins <https://aws.amazon.com/security/security-bulletins/>`_
web page, "No matter how carefully engineered the services are, from time
to time it may be necessary to notify customers of security and privacy
events with AWS services."

If you are interested in staying informed about these security bulletins, watch the
AWS `Security Bulletins <https://aws.amazon.com/security/security-bulletins/>`_
web page or the companion
`RSS feed <https://aws.amazon.com/security/security-bulletins/feed/>`_
channels. Sometimes, Rackspace provides additional details or guidance to our
customers for specific security incidents. We publish such value-add security
updates here.

.. toctree::
   :maxdepth: 1

   processor_speculative_execution_research_disclosure.rst

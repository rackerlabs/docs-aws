.. _response_spectre_meltdown:

==========================================
Rackspace Response to Meltdown and Spectre
==========================================

On 3 January 2018, Rackspace was made aware of a vulnerability affecting
certain processors by Intel, AMD and ARM. Multiple vendors have subsequently
released statements regarding the vulnerability and its impact on their
respective environments.

These issues were originally uncovered by
`Google's Project Zero <https://googleprojectzero.blogspot.com/2018/01/reading-privileged-memory-with-side.html>`_.
Their research findings show that an unauthorized party may read sensitive
information in the system's memory such as passwords, encryption keys, or
sensitive information open in applications.

The remainder of this update is addressed to our Fanatical Support for AWS
customers specifically. For updates about our other Rackspace supported
hosting environments, please refer to the
`Rackspace blog <https://blog.rackspace.com/>`_.

Overview
--------

Details about the security vulnerabilities can be found in
`CVE-2017-5753 <http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5753>`_,
`CVE-2017-5715 <http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5715>`_,
and
`CVE-2017-5754 <http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5754>`_.
Amazon's security bulletin regarding these vulnerabilities can be found
`here <https://aws.amazon.com/security/security-bulletins/AWS-2018-013/>`_.
The website `spectreattack.com <https://spectreattack.com/>`_ provides a
good overview of these vulnerabilities.

There is not a single fix
^^^^^^^^^^^^^^^^^^^^^^^^^

There is no single fix for all three security vulnerabilities. Many vendors
have patches available for one or more of these attacks.

Amazon Web Services (AWS) Response
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

These vulnerabilities affect many CPUs, including those used by Amazon EC2.
As of 2018/01/04 15:30 PST, Amazon
`reports <https://aws.amazon.com/security/security-bulletins/AWS-2018-013/>`_
that "all instances across the Amazon EC2 fleet are protected...against these
threats from other instances."

This is an important first step in mitigating the security risk that these
vulnerabilities represent for your environments. As a result of this fix to
the EC2 infrastructure, attackers will no longer be able to exploit EC2
infrastructure to view the contents of memory allocated to a different
virtual machine running on the same hypervisor as their attacking software.

Actions that customers are responsible for taking
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Despite the actions taken by Amazon to patch EC2 infrastructure, a risk
remains that malicious software running within your guest operating system
may be able to exploit these security vulnerabilities to gain access to
private data stored in memory on your EC2 instances. To protect against
this risk, Rackspace will be communicating with you over the next several
days with guidance and options for patching your EC2 instances.

Watch this page for updates
---------------------------

Please check back at this web page for updates on this security issue.
Rackspace will post updates as additional details become available from
affected vendors, and we will add additional guidance to this page over the
next several days.

Change Log
----------

.. list-table::
   :widths: 10 30
   :header-rows: 1

   * - Date
     - Description
   * - 2018/01/04 18:03 CST
     - Initial revision of this security update
   * - 2018/01/05 08:02 CST
     - Update title; Update status to reflect that Amazon have completed EC2
       infrastructure patching
   * - 2018/01/04 14:57 CST
     - Minor update to wording to better align to Amazon's security bulletin

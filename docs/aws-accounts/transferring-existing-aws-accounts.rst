.. _transferring_existing_aws_accounts:

======================================================================
Transferring existing AWS Master Payers & Linked Accounts to Rackspace
======================================================================

While the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
enables the ability to easily provision new AWS accounts, there may be
situations where you would like to transfer an existing AWS account to
Rackspace for management. This is also supported, and once complete, will
allow Rackspace management tooling and expertise to function with your
existing AWS account.

This process involves formally assigning your AWS account to Rackspace for
management, which can be initiated by submitting a request via the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_.

1. Click the **Add AWS Account** card at the bottom of the AWS account
list. 
2. For account source, select **Use an existing AWS account not currently
managed by Rackspace**. The following information is required:

  * AWS Payer(s) or Account Number(s)
  * Legal Company Name
  * Legal Company Address
  * Authorized Signatory Name (the individual who can legally give
    authorization to assign your AWS account to Rackspace)
  * Authorized Signatory Email Address

Once we receive your request, we will create a ticket for you with
instructions that your team must carry out in order to prepare the AWS
account for transition to Rackspace support.

Once your team completes those instructions from the ticket, Rackspace
sends a request to AWS to review and approve the account assumption
request. AWS will confirm if any custom legal or pricing terms exist that
need to be transferred to Rackspace. Once completed, AWS will approve
the account assumption.

After those steps are complete, Rackspace will automatically apply several
default settings to the account based on best practices we have developed
in cooperation with AWS. For details, please refer to the
:ref:`Account Defaults <account_defaults>` section of this product guide.

This process typically takes 2-4 weeks from start to finish, which is
somewhat dependent on you since certain steps of the process require action
on your part. Please monitor your email and the Support Tickets section
of the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
for tickets that require your action.

Note that transferring an existing AWS account to Rackspace does not count
against the limit of new AWS accounts you are able to provision via the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_.

Please note that Reserved Instance and Savings Plan sharing between AWS
accounts may be disrupted during the account transition process. For details,
please consult your Rackspace Onboarding Manager or Customer Success Manager.

Minimum Account Requirements
----------------------------

In order for an existing AWS account to be transitioned to Rackspace, it
must meet our minimum account requirements, which include:

* `No access keys exist for the root user of the AWS account <https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html#root-password>`_
* The account is not consolidated under a payer account or serving as a
  payer account with linked child accounts

These requirements **must** be met before the account can be transitioned
to Rackspace.

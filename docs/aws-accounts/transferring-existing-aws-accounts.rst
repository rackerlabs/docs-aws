.. _transferring_existing_aws_accounts:

========================================================================
Transferring existing AWS Master Payers and linked accounts to Rackspace
========================================================================

While the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
enables you to provision new AWS accounts easily, you might occasionally
want to transfer an existing AWS account to Rackspace for management. We
also support this, and after the transfer completes, it allows Rackspace
management tooling and expertise to function with your existing AWS account.

This process involves formally assigning your AWS account to Rackspace for
management, which you can initiate by submitting a request in the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_.

Click **Add AWS Account** at the bottom of the AWS account
list. For **account source**, select **Use an existing AWS account not currently
managed by Rackspace**. Include the following required information:

  * AWS Payer(s) or Account Number(s)
  * Legal Company Name
  * Legal Company Address
  * Authorized Signatory Name (the individual who can legally give
    authorization to assign your AWS account to Rackspace)
  * Authorized Signatory Email Address

After receiving your request, we create a ticket for you with
instructions that your team must carry out to prepare the AWS
account for the transition to Rackspace support.

After your team completes the instructions in the ticket, Rackspace
sends a request to AWS to review and approve the account assumption
request. AWS confirms whether any custom legal or pricing terms exist that
should transfer to Rackspace. Then, AWS approves the account assumption.

After those steps finish, Rackspace automatically applies several
default settings to the account based on best practices we have developed
in cooperation with AWS. For details, refer to the
:ref:`Account Defaults <account_defaults>` section of this product guide.

This process typically takes two to four weeks from start to finish. This 
partly depends on you because certain steps of the process require action
on your part. Monitor your email and the Support Tickets section of the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
for tickets that require your action.

**Note**: Transferring an existing AWS account to Rackspace does not count
against the limit of new AWS accounts you can provision through the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_.

**Note**: The transition process might disrupt the Reserved Instance and Savings
Plan sharing between AWS accounts. For details, consult your Rackspace
Onboarding Manager or Customer Success Manager.

Minimum account requirements
----------------------------

For you to transition an existing AWS account to Rackspace, it
must meet our minimum account requirements, which include the 
following criteria:

* `No access keys exist for the root user of the AWS account <https://docs.aws.amazon.com/general/latest/gr/aws-access-keys-best-practices.html#root-password>`_.
* The account is not consolidated under a payer account or serving as a
  payer account with linked child accounts.
* The account cannot be a part of an AWS Organization.

Make sure your account meets these **mandatory** requirements before you
transition the account to Rackspace.

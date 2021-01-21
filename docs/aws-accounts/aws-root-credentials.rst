.. _aws_root_credentials:

=======================================
AWS root credentials and account access
=======================================

Rackspace requires access to each AWS account's root credentials to complete
certain elements of the account transition and maintenance. Root
credentials are stored in a secure vault, and access is limited to a
specific set of employees. This access is audited and constrained to only
the few situations in which the credentials are required. Rackspace will
transfer control of these credentials to your ownership should the
partnership with Rackspace end.

**Why must Rackspace hold root credentials for AWS accounts?**

Securing AWS accounts to prevent fraudulent usage, and security compromise
is a critical aspect to our management of AWS accounts. AWS specifies a
number of Identity and Access Management best-practices to minimize the
risk of account compromise.  These include locking away the AWS account
root user access keys and enabling multi-factor authentication (MFA). By
holding the root permission/credentials, we are enabled to enforce these
best practices on AWS accounts.

Amazon requires Rackspace to use these root credentials to communicate with
Amazon's billing department to address billing issues.

The root user's email address is set to a unique Rackspace email account.
Automation creates and updates tickets in the Rackspace ticketing systems
based on emails sent to that email address. This lets Rackspace Fanatical
Support for AWS (FAWS) to share important account updates with you via
ticket.

**How will my team and I be impacted by not holding our AWS account root
user credentials?**

You'll be able to manage all access as either:

* Users within the
  `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
* IAM Roles for AWS resources, such as EC2 instances (see
  `AWS Identity and Access Management <https://manage.rackspace.com/aws/docs/product-guide/access_and_permissions/aws_iam.html#aws-iam>`_)

For the specific tasks that require AWS account root user permission, a
small set of the Fanatical Support for AWS Rackers carry out the tasks.   

**How does Rackspace secure and store root credentials?**

After credentials for the root user of the AWS account are updated to a
Rackspace email address, a new strong password is generated, two
factor authentication is enabled for the AWS account. The new password
is encrypted and vaulted using AWS Key Management Service (KMS).

Nearly all management of AWS accounts by Rackspace tools and employees
is accomplished using IAM roles and users.

**Why does Rackspace require root access keys to be deleted?**

Access keys (an access key ID and secret access key) can be used to make
programmatic requests to AWS. Rackspace requires that root access keys
be deleted, as using root access keys violates AWS Identity and Access
Management best-practices, and exposes the account to risk of security
compromise. Amazon encourages the use of IAM users, groups, and roles to
manage access.

**How does Rackspace release root credentials?**

There are two relevant scenarios: the closure of an account, and a reverse
assumption (customers taking ownership of accounts). In the case of
closing accounts, root credentials will lead to a "dead end" and do not
need to be destroyed.

When customers terminate management services with Rackspace, a process is
followed that Rackspace refers to as "reverse assumption" process. This
includes changing the root user credentials to those defined by the
customer.

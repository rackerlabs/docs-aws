.. _aws_root_credentials:

=======================================
AWS root credentials and account access
=======================================

Rackspace requires access to each AWS account's root credentials to complete
certain elements of the account transition and maintenance. We store
Root credentials in a secure vault and limits access to a
specific set of employees. We audit this access and constrain it to only
the few situations in which we need the credentials. Rackspace
transfers control of these credentials to your ownership if you end the
partnership with Rackspace.

**Why must Rackspace hold root credentials for AWS accounts?**

Rackspace holds the root credentials to secure AWS accounts and prevent
fraudulent usage because security compromise
is critical to our management of AWS accounts. AWS specifies
several Identity and Access Management best practices to minimize the
risk of account compromise.  These include locking away the AWS account
root user access keys and enabling multifactor authentication (MFA). By
holding the root permission and credentials, we can enforce these
best practices on AWS accounts.

Amazon requires Rackspace to use these root credentials to communicate with
Amazon's billing department to address billing issues.

We set the root user's email address to a unique Rackspace email account.
Automation creates and updates tickets in the Rackspace ticketing systems
based on emails sent to that email address. This lets Rackspace Fanatical
Support for AWS (FAWS) share important account updates with you through
tickets.

**How are my team and I impacted by not holding our AWS account root user credentials?**

You can manage all access as either:

- Users within the `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
- IAM Roles for AWS resources, such as EC2 instances (see
  `AWS Identity and Access Management <https://manage.rackspace.com/aws/docs/product-guide/access_and_permissions/aws_iam.html#aws-iam>`_)

For the specific tasks that require AWS account root user permission, a
small set of FAWS Rackers can carry out the tasks.   

**How does Rackspace secure and store root credentials?**

After we update the credentials for the root user of the AWS account to a
Rackspace email address, we generate a new strong password and enable
multifactor authentication for the AWS account. We encrypt the new password
and vault it by using AWS Key Management Service (KMS).

Rackspace tools and employees accomplish most AWS account management
by using IAM roles and users.

**Why does Rackspace require root access keys deletion?**

You can use access keys (an access key ID and secret access key) to make
programmatic requests to AWS. Rackspace requires that you delete root
access keys because using root access keys violates AWS Identity and Access
Management best practices and exposes the account to the risk of security
compromise. Amazon encourages the use of IAM users, groups, and roles to
manage access.

**How does Rackspace release root credentials?**

There are two relevant scenarios: the closure of an account and a reverse
assumption (customers taking ownership of accounts). If you close an
account, root credentials lead to a *dead end* so we don't need
to destroy them.

When customers terminate management services with Rackspace, we follow a
*reverse assumption* process. This includes changing the root user credentials
to those defined by the customer.

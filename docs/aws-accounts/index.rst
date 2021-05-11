.. _aws_accounts:

============
AWS Accounts
============

Each Rackspace account can house one or more AWS accounts. By default, you
can create up to five new AWS accounts through the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_.
If you need more than five accounts, open a ticket to request a
limit increase.  In addition to creating new AWS accounts, you can also
:ref:`transfer existing AWS accounts <transferring_existing_aws_accounts>`
to Rackspace for management.

Each AWS account provides a top-level administrative control boundary for the
resources that it contains. While you can leverage Amazon's Identity and Access
Management (IAM) platform to isolate certain resource access, we typically
recommend provisioning an AWS account per application deployment phase (such
as development, staging, and production). This provisioning allows
you to assign different users in your organization access to one or more
accounts without complex IAM policies. In this example, you could grant
developers access to provision EC2 instances, RDS databases, and so on in
your development and staging accounts and restrict them to read access for the
resources in your production account.

In addition to being a strong permission boundary, AWS accounts also provide
a convenient construct for tracking expenses because, by default, the system
groups both AWS and Rackspace charges by AWS account. For example, if you use
four separate AWS accounts (**app1-dev**, **app1-prod**, **app2-dev**, and
**app2-prod**), you can easily see how much you are spending on each application
environment. We highly encourage you to use tagging for more fine-grained expense
tracking within accounts. However, tagging is more complicated. You might miss
tagging certain resources resulting in unallocated cost, and not all AWS resource
types support tagging. AWS accounts provide a great default cost allocation construct.

Lastly, using separate AWS accounts per environment gives you the flexibility
to select different Rackspace :ref:`service levels <service_levels>` for each
environment because Rackspace applies service levels at the AWS account
level. For example, you might opt for the Navigator service level on your
development account while using the Aviator service level for your production
environment.

As we describe later in this document, several FAWS
features (such as :ref:`Rackspace Logbook <logbook>`) are available in both
cross-account and account-specific views, enabling unified visibility across
multiple AWS accounts.


.. toctree::
   :maxdepth: 1

   account-defaults.rst
   transferring-existing-aws-accounts.rst
   offboarding.rst
   aws-root-credentials.rst

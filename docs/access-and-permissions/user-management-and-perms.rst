.. _user_management_and_perms:

===============================
User Management and Permissions
===============================

Account Owner
-------------

When you sign up for Fanatical Support for AWS, the first user you create
is the **Account Owner**.  After signing up, you can reassign Account
Owner status to another user on the account.  You can make this change
from the **Account Settings** page.  There can only be one Account Owner
at a time.

The **Account Owner** has full administrative privileges, including:

* AWS ``AdministratorAccess`` IAM policy rights on all AWS accounts
* ``Admin`` rights to all Fanatical Support for AWS features on all AWS
  accounts
* ``Admin`` rights to the Rackspace Billing and Payments portal
* Ability to add additional AWS accounts for Rackspace to manage
* Ability to create and delete users on the Rackspace account and manage
  their permissions on a per AWS account basis
* Ability to make other users Account Administrators
* Ability to reassign Account Owner status
* Ability to configure Rackspace account-wide settings including enabling
  multi-factor authentication, configuring session duration, etc.
* Ability to cancel the Rackspace account

Creating and Managing Users
---------------------------

If you have more than one person in your organization that will need
access to the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_,
the AWS Console/APIs, or both, you can create additional users and assign
them permissions on a per AWS account basis.

To create and manage users:

1. Log in to the
   `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_.
2. Click your **user name** at the top right to activate the account menu.
3. Select **User Management**.

From the **User Management** page you'll have the ability to create new
users, manage existing users, and assign permissions to users.

Identity Federation
-------------------

Rackspace Identity Federation enables you to configure your corporate
security and identity systems to enable your employees to use their
regular company credentials to authenticate to Rackspace accounts. For more
information about Identity Federation, see the
`Rackspace Identity Federation User Guide <https://developer.rackspace.com/docs/rackspace-federation/>`_.

Account Administrator
---------------------

One permission that can be assigned is **Account Administrator**. This
permission is useful when the Account Owner wishes to delegate a
significant set of rights to another user on the account, e.g. if
someone else in the organization besides the Account Owner is responsible
for creating new users and assigning them permissions.

Users with the **Account Administrator** right have the following privileges:

* AWS ``AdministratorAccess`` IAM policy rights on all AWS accounts
* ``Admin`` rights to all Fanatical Support for AWS features on all
  AWS accounts
* ``Admin`` rights to the Rackspace Billing and Payments portal
* Ability to add additional AWS accounts for Rackspace to manage
* Ability to create and delete users on the Rackspace account and manage
  their permissions on a per AWS account basis
* Ability to make other users Account Administrators

**Account Administrators** do **NOT** have the following permissions:

* Ability to view or modify the Account Owner or other users with the
  Account Administrator permission
* Ability to configure Rackspace account-wide settings including enabling
  multi-factor authentication, configuring session duration, etc.
* Ability to cancel the Rackspace account

The **Account Administrator** permission does not determine user status
within CloudHealth. Please see **Account Owner** and the Product
Permissions section for CloudHealth user status controls.


Understanding and Managing Permissions
--------------------------------------

The **Account Owner** and **Account Administrators** have the ability to
manage permissions for other users.

There are two categories of permissions:

1. Rackspace Account Permissions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

These permissions are Rackspace account-wide and broader than Fanatical
Support for AWS.

* **Account Administrator** - Gives the user a substantial subset of
  Account Owner permissions (see above for details).
* **Billing and Payments** - Provides access to the Rackspace Billing and
  Payments portal which includes information like invoices, payment methods,
  and billing settings.
* **Support Tickets** - Provides the ability to give more granular access
  to your Rackspace Account support tickets.  You can prevent users from
  seeing tickets.  You can also allow users to only see tickets, however,
  they will not be able to create tickets.
* **Rackspace Managed Security** - Helps secure your Rackspace-supported
  cloud — across AWS, VMware, Microsoft Azure, Microsoft HyperV and 
  traditional dedicated environments.

2. Product Permissions
^^^^^^^^^^^^^^^^^^^^^^

These permissions are Rackspace product specific.  This is where Fanatical
Support for AWS permissions are managed (other product permissions will
not be covered in this guide).

There are three Fanatical Support for AWS permissions:

* **Allow this user to add AWS Accounts** - Enables the user to add
  additional AWS accounts for Rackspace to manage.  These could be new or
  existing AWS accounts.
* **Fanatical Support for AWS** - Controls what access, if any, the user
  will have within the
  `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_.
  This permission applies to **all** Rackspace features including Passport,
  Logbook, Compass, and Usage.  This permission is configured on a per
  AWS account basis.
* **AWS Console and APIs** - Controls what access, if any, the user will
  have when federating to the AWS Console or retrieving AWS temporary API
  credentials.  This permission can be any AWS managed or custom IAM
  policy available on the AWS account and is configured on a per AWS account
  basis.

Rackspace Permission Types
^^^^^^^^^^^^^^^^^^^^^^^^^^

Rackspace specific permissions can be set to one of three values:

* **None** - No access
* **Observer** - Read-only access
* **Admin** - Read and write access

Permission Example
------------------

You have two AWS accounts managed by Rackspace, both at the Aviator service
level. They are named **App1-Staging** and **App1-Production**.

You might grant a junior developer working on this application the following
permissions:

Account Permissions
^^^^^^^^^^^^^^^^^^^

* **Account Administrator** - ``Disabled``
* **Billing and Payments** - ``None`` since he does not need access
  to invoice and payment information

Product Permissions
^^^^^^^^^^^^^^^^^^^

* **Allow this user to add AWS Accounts** - ``Disabled``

**App1-Staging**

* ``Admin`` access to **Fanatical Support for AWS** so, for example, he has
  the ability to authenticate to instances via Passport.
* ``AdministratorAccess`` IAM policy access so he has full access to AWS
  services via the **AWS Console and APIs**.

**App1-Production**

* ``Observer`` access to **Fanatical Support for AWS** so he can view but
  not make changes to the production AWS Account via Rackspace tooling. This
  will disable Passport access but Compass and Logbook are still available.
* ``ViewOnlyAccess`` IAM policy to limit his **AWS Console and API** access
  to view-only.

CloudHealth Permissions
^^^^^^^^^^^^^^^^^^^^^^^

CloudHealth views are available at a default organization or
sub-organization level. The default organization is a view of all AWS
accounts under your Rackspace account. The sub-organization view is only
the individual AWS accounts for which you have AWS control plane access.

CloudHealth access is given at either a Power User or Standard User
permission. A Power User has full operational privileges across all data.
A Standard User can view but not edit or delete data within CloudHealth.

.. list-table::
   :header-rows: 1

   * - Rackspace Role
     - CloudHealth User Status
     - CloudHealth Organization
   * - Account Owner
     - Power User
     - Default Org
   * - Product Access: Admin
     - Power User
     - Default Org
   * - Product Access: Observer
     - Standard User
     - Default Org
   * - Fanatical Support for AWS: Admin
     - Power User
     - Sub-Org
   * - Fanatical Support for AWS: Observer
     - Standard User
     - Sub-Org


Please contact your Rackspace Customer Success Manager with any questions about permissions.

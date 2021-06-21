.. _user_management_and_perms:

===============================
User management and permissions
===============================

The following sections cover user management and permissions considerations:

Account Owner
-------------

When you sign up for Fanatical Support for AWS, the first user you create is the
**Account Owner**.  After signing up, you can reassign Account Owner status to
another user on the account.  You can make this change from the **Account
Settings** page.  There can be only one Account Owner at a time.

The **Account Owner** has full administrative privileges, including:

- AWS ``AdministratorAccess`` IAM policy rights on all AWS accounts.
- ``Admin`` rights to all Fanatical Support for AWS features on all AWS
  accounts.
- ``Admin`` rights to the Rackspace Billing and Payments portal.
- Ability to add additional AWS, Microst Azure, GCP, VMware accounts for Rackspace to manage.
- Ability to create and delete users on the Rackspace account and manage
  their permissions for each AWS account.
- Ability to make other users Account Administrators.
- Ability to reassign Account Owner status.
- Ability to configure Rackspace account-wide setting, including enabling
  multi-factor authentication, configuring session duration, and so on.
- Ability to cancel the Rackspace account.

Creating and managing users
---------------------------

If you have more than one person in your organization that needs
access to the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_,
the AWS Console and APIs, or both, you can create additional users and assign
them permissions for each AWS account.

To create and manage users:

1. Log in to the
   `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_.
2. Click your **user name** in the upper-right corner to activate the **Account** menu.
3. Select **User Management**.

From the **User Management** page, you can create new users,
manage existing users, and assign permissions to users.

Identity Federation
-------------------

Rackspace Identity Federation enables you to configure your corporate security
and identity systems to allow your employees to use their regular company
credentials to authenticate to Rackspace accounts. For more
information about Identity Federation, see the
`Rackspace Identity Federation User Guide <https://developer.rackspace.com/docs/rackspace-federation/>`_.

Account Administrator
---------------------

You can assign the **Account Administrator** permission, which is useful
when the Account Owner wants to delegate a significant set of rights to
another user on the account. For example, suppose someone else in the
organization besides the Account Owner is responsible for creating new users and
assigning them permissions.

Users with the **Account Administrator** right have the following privileges:

- AWS ``AdministratorAccess`` IAM policy rights on all AWS accounts.
- ``Admin`` rights to all AWS, Mirosft Azure, GCP, VMware on all accounts.
- ``Admin`` rights to the Rackspace Billing and Payments portal.
- Ability to add additional AWS accounts for Rackspace to manage.
- Ability to create and delete users on the Rackspace account and manage
  their permissions for each AWS account.
- Ability to make other users Account Administrators.

**Account Administrators** do **NOT** have the following permissions:

* Ability to view or modify the Account Owner or other users with the
  Account Administrator permission.
* Ability to cancel the Rackspace account.

The **Account Administrator** permission does not determine user status within
CloudHealth. See **Account Owner** and the Product Permissions section
for CloudHealth user status controls.

Understanding and managing permissions
--------------------------------------

The **Account Owner** and **Account Administrators** can
manage permissions for other users.

There are two categories of permissions:

1. Rackspace account permissions
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

These permissions are Rackspace account-wide and broader than Fanatical
Support for AWS.

* **Account Administrator**: Gives the user a substantial subset of
  Account Owner permissions (see the preceding section for details).
* **Billing and Payments**: Provides access to the Rackspace Billing and
  Payments portal, including invoices, payment methods, and billing settings.
* **Support Tickets**: Lets you give more granular access
  to your Rackspace Account support tickets. You can prevent users from
  seeing tickets. You can also allow users to see tickets but not
  create them.
* **Rackspace Managed Security**: Helps secure your Rackspace-supported
  cloud—across AWS, VMware, Microsoft Azure, Microsoft HyperV, and
  traditional dedicated environments.

2. Product permissions
^^^^^^^^^^^^^^^^^^^^^^

These permissions are Rackspace product-specific. This is where you manage
Produc Access. This guide doe not cover other product permissions.

There are three Fanatical Support for AWS permissions:

* **Allow this user to add AWS Accounts**: Enables the user to add
  additional AWS accounts for Rackspace to manage. These could be new or
  existing AWS accounts.
* **Product Access**: Controls what access the user has within the
  `Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_.
  This permission applies to **all** Rackspace features, including Passport,
  Logbook, CloudHealth, and Usage. You can configure this permission for
  each AWS account.
* **AWS Console and APIs**: Controls what access, if any, the user has
  when federating to the AWS Console or retrieving AWS temporary API
  credentials. You can manage this permission for any AWS managed or custom IAM
  policy available on the AWS account and configure it for each AWS account.

For AWS accounts with users groups and identity federation enabled: non-federated user group members will not inherit **Product Access** or **AWS Console and APIs permissions** from a user group. 

Rackspace permission types
^^^^^^^^^^^^^^^^^^^^^^^^^^

You can set Rackspace specific permissions to the following values:

* **None**: No access
* **Observer**: Read-only access
* **Admin**: Read and write access

Permission example
------------------

Suppose you have two AWS accounts managed by Rackspace named **App1-Staging**
and **App1-Production**.

You might grant a junior developer working on this application the following
permissions:

Account permissions
^^^^^^^^^^^^^^^^^^^

* **Account Administrator**: ``Disabled``
* **Billing and Payments**: ``None`` because he does not need access
  to invoice and payment information

Product permissions
^^^^^^^^^^^^^^^^^^^

* **Allow this user to add AWS Accounts**: ``Disabled``

**App1-Staging**

* ``Admin`` access to **Product Access** so, for example, he can
  authenticate to instances through Passport.
* ``AdministratorAccess`` IAM policy access so he has full access to AWS
  services through the **AWS Console and APIs**.

**App1-Production**

* ``Observer`` access to **Product Access** so he can view but
  not make changes to the production AWS Account through Rackspace tooling. This
  disables Passport access, but CloudHealth and Logbook are still available.
* ``ViewOnlyAccess`` IAM policy to limit his **AWS Console and API** access
  to view-only.

CloudHealth permissions
^^^^^^^^^^^^^^^^^^^^^^^

CloudHealth views are available at a default organization or sub-organization
level. The default organization is a view of all AWS accounts under your
Rackspace account. The sub-organization view is only the individual AWS accounts
to which you have AWS control plane access.

CloudHealth access has Power User or Standard User permissions.
A Power User has full operational privileges across all data. A Standard User
can view but not edit or delete data within CloudHealth.

.. list-table::
   :header-rows: 1

   * - Rackspace role
     - CloudHealth user status
     - CloudHealth organization
   * - Account owner
     - Power user
     - Default org
   * - Product access: Admin
     - Power user
     - Default org
   * - Product access: Observer
     - Standard user
     - Default org
   * - Fanatical Support for AWS: Admin
     - Power user
     - Sub-org
   * - Fanatical Support for AWS: Observer
     - Standard user
     - Sub-org

Contact your Rackspace Customer Success Manager with any questions about
permissions.

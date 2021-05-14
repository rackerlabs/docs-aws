.. _billing:

=======
Billing
=======

When you sign up for Fanatical Support for AWS, Rackspace establishes
one or more AWS accounts for you and becomes your reseller of AWS
services. This means that a consolidated Rackspace bill provides all
billing of both infrastructure and management fees, and
you do not have to maintain a direct payment relationship with AWS. We
automatically bill the credit card you provided when signing up for your
Rackspace account for both your AWS infrastructure and management fees,
as described in the following sections.

.. _billing_currency:

Billing currency
----------------

Our default pricing and billing currency is US Dollars (USD). However, when
you signup, you can choose to be billed in Australian Dollars (AUD).
Customers that choose the AUD billing option should be aware of the following:

* All pricing (AWS infrastructure and management fees) remain in USD.
* We convert the bill from USD to AUD at monthly billing processing
  time by using a recent spot exchange rate.
* Non-USD billing incurs a premium: 1% for customers billed using a
  credit card, 2% for customers billed through an invoice. We add this to
  the spot exchange rate.
* The invoice shows the exchange rate.
* CloudHealth, Waypoint, and Usage Details show pre-converted costs in
  USD. The invoice shows costs in AUD.
* You cannot change the billing currency on existing accounts.

.. _billing_cycles:

Billing cycles
--------------

AWS bills for all infrastructure on a calendar month basis. AWS charges for
the previous month's usage typically finalize by the 10th day of each
month. After AWS finalizes the charges, we add both infrastructure and
support charges to your Rackspace account, and they appear on
your next Rackspace bill. Each line item includes the month in which
you incurred the charges. The system creates your Rackspace bill on the 15th of
each month if you signed up for a FAWS account after
July 6, 2017. If you signed up before July 6, 2017, or are using an
account originally created for the Rackspace Public Cloud, we bill you
based on the anniversary date you created the account.

.. _billing_rackspace_account:

Financial benefits of your Rackspace account
--------------------------------------------

Your Rackspace account is the top-level container that contains one or
more AWS accounts. When aggregating the usage to generate a bill at the
Rackspace account level, you receive the following benefits:

* Favorable :ref:`Reserved Instance allocation <reserved_instances>`.
* Tiering of usage across all accounts for AWS services provides
  tiered pricing. For example, if S3 has a 0-10 TB storage tier and a
  10-20 TB storage tier and you have one AWS account which uses 8 TB and
  another which uses 3 TB, your overall usage rates as a combined
  11 TB.

.. _billing_monthly_service_fees:

Monthly service fees
--------------------

We calculate your monthly service fees by pooling the AWS infrastructure
charges from all of your AWS accounts at the same service level. If the AWS
infrastructure charges are greater than $30, we assess a monthly service fee
and proportionally distribute it to each of your AWS accounts at
that service level.

For example, if you have two AWS accounts, one with $45,000 in AWS
infrastructure charges and the other with $30,000 in AWS infrastructure charges,
your monthly service fee would be $25,000 based on your combined AWS
infrastructure charge of $75,000.

During your first month with any AWS accounts at a specific service level, we
prorate the monthly service fee for the remainder of the month based on
your signup date unless you make any Reserved Instance purchases during
that month. If you do make a Reserved Instance purchase, we remove the
proration as the service fees paid during your first month cover our
services for the length of the reserved instance reservation. Note that
we base proration on AWS account signup date and not the date AWS
infrastructure charges reach more than $30. For example, if you signed up
for your AWS account on March 15th but did not start using resources in your
account until April 5th, we charge you for a full month of service fees
for April.

.. _billing_usage:

Usage
-----

The Usage page in the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
provides you with a mid-month view of your charges and an estimate of your
full month's charges, typically updated a few times per day, along with
historical usage from previous months. You can use this information to avoid
unexpected AWS infrastructure charges. To access the report, select the **Usage**
link in the primary navigation.

Due to our :ref:`Account Defaults <account_defaults>`
and associated management
tooling, each AWS account that you provision has approximately $5-10 of
monthly infrastructure charges, regardless of whether you provision any
additional AWS resources.

.. _viewing_your_invoices:

Viewing your invoices
---------------------

To view your invoices, log in to the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
and click the Billing link toward the top right of the page.

The primary account holder receives an email when we process a payment,
indicating that a new invoice is available for review.

.. _billing_tagging:

Tagging
-------

Rackspace provides detailed views of your AWS billing data by resource
tags. The views include only tags with a key from the following list
(case-sensitive):

* BusinessUnit
* Group
* Department
* CostCenter
* Application
* Environment
* Project
* Owner
* Service
* Cluster
* Role
* Customer
* Version
* Billing1
* Billing2
* Billing3
* Billing4
* Billing5

We also include the following AWS-generated tags in the detailed views of your
AWS billing data:

* aws:autoscaling:groupName
* aws:cloudformation:logical-id
* aws:cloudformation:stack-id
* aws:cloudformation:stack-name

While you can use tags beyond the preceding list of tags to identify your resources
for other reasons, we do not include those other tags in the detailed views of your
billing data.

.. _modifying_payment_method:

Modifying your payment method
-----------------------------

If you need to update the credit card or ACH (eCheck - United States only)
details you have on file, log in to the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
and click the **Billing** link near the upper-right corner of the page. From there,
find the link to update your payment details.

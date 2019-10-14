.. _billing:

=======
Billing
=======

When you signup for Fanatical Support for AWS, Rackspace establishes
one or more AWS accounts for you and becomes your reseller of AWS
services. This means that all billing of both infrastructure and
management fees is provided through a consolidated Rackspace bill, and
you do not have to maintain a payment relationship with AWS directly. The
credit card you provided when signing up for your Rackspace account
will be automatically billed for both your AWS infrastructure and
management fees, as described below.

.. _billing_currency:

Billing Currency
----------------

Our default pricing and billing currency is US Dollars (USD). However, when
you signup, you can choose to be billed in Australian Dollars (AUD).
Customers that choose the AUD billing option should be aware of the following:

* All pricing (AWS infrastructure and management fees) will remain in USD.
* The bill will be converted from USD to AUD at monthly billing processing
  time, using a recent spot exchange rate.
* Non-USD billing will incur a premium: 1% for customers billed using a
  credit card, 2% for customers billed via an invoice. This will be added to
  the spot exchange rate.
* The exchange rate will be displayed on the invoice.
* Compass, Waypoint, and Usage Details will show pre-converted costs in
  USD. The invoice will show costs in AUD.
* It is not possible to change the billing currency on existing accounts.

.. _billing_cycles:

Billing Cycles
--------------

AWS bills for all infrastructure on a calendar month basis. AWS charges for
the previous month's usage are typically finalized by the 10th day of each
month. After the charges are finalized by AWS, both infrastructure and
support charges are added to your Rackspace account and will appear on
your next Rackspace bill. Each line item will include the month in which
the charges were incurred. Your Rackspace bill is created the 15th of
each month if you signed up for a Fanatical Support for AWS Account after
July 6, 2017. If you signed up prior to July 6, 2017 or are using an
account originally created for the Rackspace Public Cloud, you will be
billed based on the anniversary date the account was created.

.. _billing_rackspace_account:

Financial Benefits of your Rackspace account
--------------------------------------------

Your Rackspace account is the top-level container which contains one or
more AWS accounts. When aggregating the usage to generate a bill at the
Rackspace account level, you receive the following benefits:

* Favorable :ref:`Reserved Instance allocation <reserved_instances>`
* Tiering of usage across all accounts for AWS services which provide
  tiered pricing (for example, if S3 has a 0-10 TB storage tier and a
  10-20 TB storage tier and you have one AWS account which uses 8 TB and
  another which uses 3 TB your overall usage would be rated as a combined
  11 TB)

.. _billing_monthly_service_fees:

Monthly Service Fees
--------------------

Your monthly service fees will be calculated by pooling the AWS infrastructure
charges from all of your AWS accounts at the same service level. If the AWS
infrastructure charges are greater than $30, a monthly service fee will be
assessed and proportionally distributed out to each of your AWS accounts at
that service level.

For example, if you have two AWS accounts at the Aviator service level, one
with $45,000 in AWS infrastructure charges and the other with $30,000 in
AWS infrastructure charges, your monthly service fee would be $25,000 based
on your combined AWS infrastructure charge of $75,000.

During your first month with any AWS accounts at a specific service level, we
will prorate the monthly service fee for the remainder of the month based on
your signup date unless you make any Reserved Instance purchases during
that month. If you do make a Reserved Instance purchase, we remove the
proration as the service fees paid during your first month will cover our
services for the length of the reserved instance reservation. Please note that
proration is based on AWS account signup date, and not the date AWS
infrastructure charges reach more than $30. For example, if your AWS account
has a signup date of March 15th but you do not start using resources in your
account until April 5th, you will be charged a full month of service fees
for April.

.. _billing_usage:

Usage
-----

The Usage page in the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
will provide you with a mid-month view of your charges and an estimate of your
full month's charges, typically updated a few times per day, along with
historical usage from previous months. You can use this information to avoid
unexpected AWS infrastructure charges. To access the report, select the Usage
link in the primary navigation.

Due to our :ref:`account_defaults` and associated management
tooling, each AWS account that you provision will have approximately $5-10 of
monthly infrastructure charges, regardless of whether you provision any
additional AWS resources.

.. _viewing_your_invoices:

Viewing your Invoices
---------------------

To view your invoices, log in to the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
and click the Billing link toward the top right of the page.

The primary account holder will receive an email any time a payment is
processed, indicating that a new invoice is available for review.

.. _billing_tagging:

Tagging
-------

Rackspace will provide detailed views of your AWS billing data by resource
tags. Tags must use a key from the following list (case sensitive) in order
to be included in these views:

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

While you may use tags outside of those listed above to identify your resources
for other reasons, they will not be included in the detailed views of your
billing data.

.. _modifying_payment_method:

Modifying your Payment Method
-----------------------------

If you need to update the credit card or ACH (eCheck - United States only
details that you have on file, log in to the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
and click the Billing link toward the top right of the page. From there, you'll
find a link to update your payment details.

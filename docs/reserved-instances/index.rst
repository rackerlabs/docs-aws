.. _reserved_instances:

==================
Reserved Instances
==================

Reserved Instances play an important role in helping you manage the
overall costs of your AWS environments. In cases where you plan to have
sustained 24x7 usage of one or more EC2 or RDS instances of the same
instance type in the same availability zone and region, purchasing a
one-year or three-year reserved instance can save up to 70% versus the
on-demand hourly rates.

You can learn more about Reserved Instances at
https://aws.amazon.com/ec2/pricing/reserved-instances/.

Allocation across AWS accounts
------------------------------

If you have more than one AWS account that is part of the same Rackspace
account you can benefit from automatic allocation of unused reserved
instances from one AWS account to another. Our billing system automatically
detects unused reserved instances on your AWS account and searches for
corresponding EC2/RDS on-demand instances of the same instance type and
provisioned in the same availability zone on your other AWS accounts under
the same Rackspace account. If a match is found, the reserved instance is
automatically applied to the usage on the other AWS account.

A few key considerations:

* Reserved instances are a billing construct only; you do not need to specify
  anything at the time you launch the EC2 or RDS instance. As long as the
  instance type and availability zone match, the reserved instance benefit
  will automatically be applied.
* The allocation of reserved instances to other accounts occurs on an hourly
  basis; therefore, if the account that purchased the reserved instance
  originally begins using the same instance type in the same availability
  zone at a later time, the reserved instance benefit will be applied to
  the original purchasing AWS account.
* Although the underlying data centers powering a specific availability
  zone vary across accounts (e.g. us-east-1a may be different on account X
  than account Y), for the purposes of reserved instance allocation the
  availability zone match is done based only on the availability zone name.

Purchasing Reserved Instances
-----------------------------

You can purchase reserved instances directly from AWS via the AWS Console
or CLI, or programmatically via the SDKs or CLI.

Impact on Monthly Service Fees
------------------------------

As described in the :ref:`Pricing <pricing>` section, your monthly service
fee is calculated based on the total of all AWS infrastructure charges.
Reserved instance purchases are included in these charges, so months where
you make one or more reserved instance purchases may cause you to incur a
higher monthly service fee. Since the reserved instance will lower or
eliminate your charges for that portion of the infrastructure in future
months, you'll see a similar benefit apply to your monthly service fees. The
effective rate of our service fees decreases as AWS infrastructure spend
increases, so you will likely pay a lower total amount of service fees
over the life of the reserved instance than if you had run on-demand
instances during the same time period.

Example Service Level 1
^^^^^^^^^^^^^^^^^^^^^^^

For this example, assume that your application requires a single m4.4xlarge
instance and no other AWS on-demand infrastructure. Your options are:

* Reserved Instance Purchase

  * Reserved Instance Purchases - month 1 (one m4.4xlarge instance; one
    year; all up front): $5,082
  * Service fee - month 1 (based on spend of $5,082): $750
  * Service fee - months 2 through 12 (based on spend of $0): $0
  * Total cost: $5,832

* No Reserved Instance Purchase

  * On-demand usage - months 1 through 12 (one m4.4xlarge instance): $735.84
  * Service fee - months 1 through 12 (based on spend of $735.84): $400
  * Total cost: $13,630.08

In the example above, you would save 84% on service fees and 42% on AWS
infrastructure costs when purchasing reserved instances.

Example Service Level 2
^^^^^^^^^^^^^^^^^^^^^^^

For this example, assume that your application requires 25 c4.2xlarge
instances and no other AWS on-demand infrastructure. Your options are:

* Reserved Instance Purchase

  * Reserved Instance Purchases - month 1 (25 c4.2xlarge instances; one
    year; partial front): $33,648.25
  * Service fee - month 1 (based on spend of $33,648.25): $17,000
  * Reserved Instance monthly fees - months 2 through 12 (25 c4.2xlarge
    instances): $2,573.25
  * Service fee - months 2 through 12 (based on spend of $2,573.25): $2,500
  * Total cost: $106,454

* No Reserved Instance Purchase

  * On-demand usage - months 1 through 12 (25 c4.2xlarge instance): $8,048.25
  * Service fee - months 1 through 12 (based on spend of $8,048.25): $5,750
  * Total cost: $165,579

In the example above, you would save 36% on service fees and 36% on AWS
infrastructure costs when purchasing reserved instances.

Example Service Level 3
^^^^^^^^^^^^^^^^^^^^^^^

For this example, assume that your application requires 15 c4.2xlarge
instances and no other AWS on-demand infrastructure. Your options are:

* Reserved Instance Purchase

  * Reserved Instance Purchases - month 1 (15 c4.2xlarge instances; one
    year; partial front): $20,188.95
  * Service fee - month 1 (based on spend of $20,188.95): $3,500
  * Reserved Instance monthly fees - months 2 through 12 (15 c4.2xlarge
    instances): $1,543.95
  * Service fee - months 2 through 12 (based on spend of $1,543.95): $750
  * Total cost: $48,922.40

* No Reserved Instance Purchase

  * On-demand usage - months 1 through 12 (15 c4.2xlarge instance): $4,828.95
  * Service fee - months 1 through 12 (based on spend of $4,828.95): $1,500
  * Total cost: $75,947.40

In the example above, you would save 35% on service fees and 36% on AWS
infrastructure costs when purchasing reserved instances.

.. note::

  The costs used in the examples above are for illustrative purposes
  only and could change at any time. In some cases, your service fees will be
  higher when purchasing reserved instances versus not purchasing them,
  decreasing, but not eliminating, your overall savings. Your
  :ref:`Account Manager <support>` can assist you with calculating reserved
  instance benefits for your specific account.

Additional Billing Information
------------------------------

For detailed billing information and methodology related to Reserved
Instances, please reference the AWS documentation at
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-reserved-instances-application.html.

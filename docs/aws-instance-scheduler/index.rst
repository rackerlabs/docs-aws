.. _instance_scheduler:

======================
AWS Instance Scheduler
======================

AWS Instance Scheduler is an AWS-provided solution that enables customers to
configure custom start and stop schedules for their EC2 and RDS instances. The
solution can help reduce operational costs by stopping resources when they are
not needed and start them back up based on a defined schedule. The most common
example is stopping DEV instances outside of working hours (reducing weekly
utilization from 168 hours to 50 hours—yielding a 70 percent reduction in
running costs).

Instance Scheduler is a *solution*, not an AWS *service*, so you can't
find it in the AWS console. It is composed of several AWS services that are
packaged together into a CloudFormation template. It's important to note that it
does not feature a user interface. AWS develops, maintains, and
packages this solution. Rackspace deploys, configures, and manages it.

.. _use_cases:

Use cases
---------

You might find Instance Scheduler useful if you have any of the following:

* Non-production environments that you don't need 24/7
* Proof-of-concept environments that you use for occasional demos
* Nightly batch or job processing environments
* Resources that are started manually by users only when they need the resources

.. _features:

Features
--------

Instance Scheduler supports:

* Stopping and starting stand-alone EC2 instances
* Stopping and starting RDS instances
* Stopping and starting instances in multiple regions
* Stopping and starting instances manually outside the defined schedule
* Partial automation (stop-only or start-only schedule)

It does not support:

* Stopping or starting instances that are part of an auto-scaling group
  (You can use native ASG scheduled actions in this case.)
* Stopping or starting other managed services (such as Redshift, Elasticsearch,
  ElastiCache, and so on)

.. _scheduler_usage:

Usage
-----

If you want to start using Instance Scheduler, submit a request in
a Support ticket or reach out to your Account Manager.

Rackspace deploys the solution for interested customers and
configures the schedules according to their needs.

Instance Scheduler stores schedule definitions in a DynamoDB table, with every
Schedule named uniquely. It uses resource tags to associate EC2 and RDS instances
with a particular schedule. For example, the tag might be `Schedule=uk-office-hours`,
when `uk-office-hours` is the name of one of the Schedules defined in DynamoDB.

When need to override a schedule, use one of the following methods:

* If it’s just for a short time (such as a few hours), you can
  simply start or stop the instance through the AWS Console. Instance Scheduler
  keeps applying the defined schedule as before.
* If it’s for a longer period, you can change the value of the
  **schedule** tag key on the instance to either **running** or **stopped**.
  Before you do that, take a note of the previous value. Instance
  Scheduler keeps the instance in this state until you change the tag's value
  back to its original value.

.. _scheduler_pricing:

Pricing
-------

Management of Instance Scheduler is provided at no additional cost for Rackspace
Elastic Engineering customers. Customers are responsible for the minimal
infrastructure cost to run the solution (normally up to $10 per AWS account per
month) and this may consume hours from your Elastic Engineering Pod to setup or
manage.

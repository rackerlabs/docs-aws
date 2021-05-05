.. _instance_scheduler:

======================
AWS Instance Scheduler
======================

AWS Instance Scheduler is an AWS-provided solution that enables customers to
configure custom start and stop schedules for their EC2 and RDS instances. The
solution can help reduce operational costs by stopping resources when they are
not needed, and start them back up based on a defined schedule. The most common
example is stopping DEV instances outside of working hours (reducing weekly
utilization from 168 hours to 50 hours - yielding a 70 percent reduction in
running costs).

Instance Scheduler is a "solution". It is not an AWS "service", so you will not
find it in the AWS console. It is composed of a number of AWS services that are
packaged together into a CloudFormation template. It's important to note that it
does not feature a user interface. The solution is developed, maintained and
packaged by AWS. It is deployed, configured and managed by Rackspace.

.. _use_cases:

Use Cases
---------

You might find Instance Scheduler useful if you have any of the following:

* Non-prod environments that are not needed 24/7
* Proof-of-Concept environments that are used for occasional demos
* Nightly batch/job processing environments
* Resources that are started manually by users only when they are needed

.. _features:

Features
--------

Instance Scheduler supports:

* Stopping and starting stand-alone EC2 instances
* Stopping and starting RDS instances
* Stopping and starting instances in multiple regions
* Starting or stopping instances manually outside the defined schedule
* Partial automation (stop-only or start-only schedule)

It does not support:

* Stopping or starting instances that are part of an auto-scaling group
  (native ASG scheduled actions can be used in this case)
* Stopping or starting other managed services (e.g. Redshift, Elasticsearch,
  ElastiCache, etc.)

.. _scheduler_usage:

Usage
-----

If you would like to start using Instance Scheduler, please submit a request via
a Support ticket, or reach out to your Account Manager.

Rackspace will deploy the solution for customers that are interested, and will
configure the schedules according to their needs.

Schedule definitions are stored in a DynamoDB table, with every Schedule having
a unique name. Resource tags are used to associate EC2 and RDS instances with a
particular Schedule (e.g. Schedule=uk-office-hours, when“uk-office-hours” is a
name of one of the Schedules we defined in DynamoDB).

If you ever need to “override” a schedule, there are 2 ways to achieve this:

* If it’s just for a short period of time (e.g. a few hours), you can
  simply start/stop the instance via the AWS console. Instance Scheduler will
  keep applying the defined schedule as before.
* If it’s for a longer period of time, you can change the value of the
  “Schedule” tag key on the instance to either **running** or **stopped**.
  Before you do that, please take a note of the previous value. Instance
  Scheduler will keep the instance in this state until you change the value of
  the tag back to its original value.

.. _scheduler_pricing:

Pricing
-------

Management of Instance Scheduler is provided at no additional cost for Aviator
customers. Customers are responsible for the minimal infrastructure cost to run
the solution (normally up to $10 per AWS account per month).

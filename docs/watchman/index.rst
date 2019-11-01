.. _watchman:

========
Watchman
========

AWS CloudWatch is the primary monitoring system used by our Fanatical
Support for AWS support teams. CloudWatch provides a wide variety of
metrics that cover the entire suite of AWS services - from CPU utilization
and disk I/O on EC2 instances to network throughput of your ELB load balancers.

While AWS CloudWatch is available to Fanatical Support for AWS accounts at
all service levels, customers using our Aviator service level can opt to
have a Racker respond to unexpected deviations in metrics. Watchman is the
system responsible for receiving CloudWatch alarms and creating tickets
on your Rackspace account.

CloudWatch Alarms
-----------------

CloudWatch Alarms can be triggered to fire when the value of a CloudWatch
metric deviates from its expected value. For example, if CPU utilization
on an EC2 instance exceeds 80% for a period of five minutes or greater, the
CloudWatch alarm can be configured to send an alert to a Rackspace-managed
SNS (Simple Notification Service) topic (named *rackspace-support*) tha
 will generate a ticket for further investigation by a Racker.

The *rackspace-support* SNS topic is configured in each region when your
AWS account is first setup for Fanatical Support for AWS. A subscription
to the SNS topic is created for a centralized region-specific SQS
(Simple Queue Service) queue that resides in our shared management services
account. Our shared management services system continually monitors these
queues and generates a ticket when a valid CloudWatch alarm is received from
an Aviator service level account.

Note: While the SNS topic described above is present on every Fanatical
Support for AWS account, only accounts at the Aviator service level will
have tickets generated. If your account is at the Navigator service
level, no action will be taken for CloudWatch alarm notifications sent to
your account's *rackspace-support* SNS queue.

Custom CloudWatch Configuration
-------------------------------

CloudWatch allows for the creation of custom metrics to allow monitoring the
things that are most critical to the uptime of your applications. As an
Aviator customer, you can create custom CloudWatch metrics and alarms, as
well as send notifications to the *rackspace-support* SNS topic if you
desire a Racker response to triggered alarms. We do recommend that you
work with a Racker when first creating custom CloudWatch metrics and alarms
so that we can ensure that everything is configured properly and that the
desired Racker response is clearly documented.

SmartTickets
-------------------------------

SmartTickets is an automation system connected to Watchman that helps
provide Rackers additional contextual information in response to CloudWatch
Alarms. SmartTickets leverages AWS Systems Manager and AWS APIs to run
diagnostic commands against your AWS infrastructure, and displays this
information to the Rackers responding to alarms.

SmartTickets activities are recorded in AWS CloudTrail and Rackspace
Logbook, and can be identified by examining the API history for the
*racker-faws-a63460cb* user.

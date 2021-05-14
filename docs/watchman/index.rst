.. _watchman:

========
Watchman
========

AWS CloudWatch is the primary monitoring system used by our Fanatical
Support for AWS support teams. CloudWatch provides a wide variety of metrics
that cover the entire suite of AWS services,from CPU utilization and
disk I/O on EC2 instances to network throughput of your ELB load balancers.

While AWS CloudWatch is available to Fanatical Support for AWS accounts at all
service levels, you can opt to have a Racker respond to unexpected deviations in
metrics. Watchman is the system responsible for receiving CloudWatch alarms and
creating tickets on your Rackspace account.

CloudWatch alarms
-----------------

We can configure CloudWatch Alarms to fire when the value of a CloudWatch
metric deviates from its expected value. For example, suppose CPU utilization on
an EC2 instance exceeds 80% for a period of five minutes or greater. In that case,
we can set the CloudWatch alarm to send an alert to a Rackspace-managed
Simple Notification Service (SNS) topic, *rackspace-support*, which
generates a ticket for further investigation by a Racker.

We configure the *rackspace-support* SNS topic in each region when we first set
up your AWS account for Fanatical Support for AWS. We create a subscription to the
SNS topic for a centralized, region-specific Simple Queue Service (SQS) queue that
resides in our shared management services account. Our
shared management services system continually monitors these queues and
generates a ticket when it receives a valid CloudWatch alarm.

Custom CloudWatch configuration
-------------------------------

CloudWatch enables you to create custom metrics to monitor the most critical
things to the uptime of your applications. You can create custom CloudWatch
metrics and alarms, as well as send notifications to the *rackspace-support*
SNS topic if you want a Racker response to triggered alarms. We recommend that
you work with a Racker when first creating custom CloudWatch metrics and alarms
so that we can ensure that you configure everything properly and that you
document the desired Racker response clearly.

SmartTickets
-------------------------------

SmartTickets, an automation system connected to Watchman, helps provide
Rackers additional contextual information in response to CloudWatch
alarms. SmartTickets leverages AWS Systems Manager and AWS APIs to run
diagnostic commands against your AWS infrastructure and displays this
information to the Rackers responding to alarms.

AWS CloudTrail and Rackspace Logbook record SmartTickets activities,
and you can identify them by examining the API history for the
*racker-faws-a63460cb* user.

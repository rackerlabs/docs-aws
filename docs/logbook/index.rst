.. _logbook:
.. |LogbookTM|  raw:: html

    Logbook&trade;

=======
Logbook
=======

AWS and Rackspace generate detailed control plane logs for all activities
taking place in your Fanatical Support for AWS accounts, aggregating data
from the following sources:

- `AWS CloudTrail <https://aws.amazon.com/cloudtrail/>`_: Detailed logs of
  most AWS API requests made on your account to supported AWS services. These
  logs ignore most
  `object-level S3 actions <https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudtrail-logging.html#cloudtrail-object-level-tracking>`_
  and store only ``PutObjectAcl``, ``DeleteObject``, and
  ``DeleteObjects`` in Logbook. Logbook does not store read-only events.
- **Fanatical Support for AWS shared management system and user interfaces**: View
  Control Portal logins and other actions, such as creating a new AWS account
  or modifying user permissions.
- **Fanatical Support for AWS environment access**: Any time a Racker, or one
  of your employees, accesses your AWS environment by creating a
  :ref:`Passport access request <passport_v2>`, you can view the specific
  instances they had access to, the source of their Passport access
  request, and other associated details throughout the Passport access request.

The |Logbook™| section of the
`Rackspace Technology Customer Portal <https://manage.rackspace.com/aws>`_
provides a timeline-based view of all these activities. You can view
the activities for a specific AWS account or view activities across all
your AWS accounts. You can also filter the results to find the
specific activities you want to see. Logbook indexes and retains the
last 90 days of historical data for you to explore.

The information in Logbook can be extremely valuable if you need
to view the changes Rackers, your employees, or automated processes
made to your environment when troubleshooting an issue or reviewing the
root cause of a service-impacting event.

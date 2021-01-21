.. _logbook:
.. |LogbookTM|  raw:: html

    Logbook&trade;

=======
Logbook
=======

AWS and Rackspace generate detailed control plane logs for all activities
taking place in your Fanatical Support for AWS account(s). This data is
aggregated from a number of different sources:

* `AWS CloudTrail <https://aws.amazon.com/cloudtrail/>`_: detailed logs of
  most AWS API requests made on your account to supported AWS services. Most
  `object-level S3 actions <https://docs.aws.amazon.com/AmazonS3/latest/dev/cloudtrail-logging.html#cloudtrail-object-level-tracking>`_
  will be ignored. Only ``PutObjectAcl``, ``DeleteObject``, and
  ``DeleteObjects`` will be stored in Logbook. Read-only events are not
  stored in Logbook.
* Fanatical Support for AWS shared management system and user interfaces: view
  control panel logins and other actions (such as creating a new AWS account
  or modifying user permissions)
* Fanatical Support for AWS environment access: any time a Racker, or one
  of your employees, accesses your AWS environment by creating a
  :ref:`Passport access request <passport_v2>`, you can view the specific
  instances they had access to, the source of their Passport access
  request, and other associated details throughout the duration of
  the Passport access request.

The |LogbookTM| section of the
`Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_
provides a timeline-based view of all of these activities. You can view
the activities for a specific AWS account or view activities across all of
your AWS accounts. You can also filter/facet the results to find the
specific activities you are looking for. Logbook retains the last 90 days
of historical data indexed for you to explore.

The information in Logbook can prove to be extremely valuable if you need
to view the changes your employees, our Rackers, or automated processes
made to your environment when troubleshooting an issue or reviewing the
root cause of a service impacting event.

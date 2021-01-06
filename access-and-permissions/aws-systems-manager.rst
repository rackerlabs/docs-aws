.. _aws_systems_manager:

=======================================
AWS Systems Manager EC2 Session Manager
=======================================

AWS accounts managed by Rackspace require the use of the AWS Systems
Manager Agent for operating system support.

AWS Systems Manager Session Manager may be used to provide shell access
to Operating Systems via the AWS console or CLI. You can learn more about
Session Manager at:
'<https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html>'_.

It should be noted that use of AWS Session Manager will result in commands
being executed under a shared user account (ssm-user) within the
Operating System. This user will persist even if the SSM agent is
removed. Customers with specific compliance or internal security policies
should consult with their compliance personnel on whether Session Manager
is appropriate for their use. For compliance information from AWS,
see: '<https://aws.amazon.com/compliance/services-in-scope/>'_.

Rackspace recommends customers secure their Rackspace and AWS accounts
with 2-factor authentication. Customers may restrict their personnel's
usage of AWS Session Manager via AWS IAM.

Rackspace personnel may use Session Manager as needed to perform
administrative tasks. :ref:'account_defaults'
ensure any Rackspace usage of AWS Systems Manager and its associated
features is logged in AWS CloudTrail.

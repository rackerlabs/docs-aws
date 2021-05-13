.. _cloud_native_security:


Cloud Native Security
=====================

AWS is constantly expanding its portfolio of native security products. Thanks to
its more holistic access to backend data and resources, Amazon can offer
security features that third-party tools cannot provide. Rackspace is expanding
its managed security services to provide SOC-as-a-Service for native AWS
security products.

AWS customers who want to improve their security posture by using products
like `AWS Security Hub <https://aws.amazon.com/security-hub/>`_,
`Amazon GuardDuty <https://aws.amazon.com/guardduty/>`_, and
`IAM Access Analyzer <https://aws.amazon.com/iam/features/analyze-access/>`_
but have neither the expertise nor resources to invest in a 24x7x365 Security
Operations Center (SOC) can now use the Cloud Native Security Service Block
from Rackspace.

**Amazon GuardDuty** provides threat detection using existing AWS-native
data sources (CloudTrail Logs, VPC Flow Logs, and DNS Logs) without any
potentially disruptive deployment steps, such as agent installation. AWS
describes GuardDuty as a service that “uses machine learning, anomaly detection,
and integrated threat intelligence to identify and prioritize potential threats."

**IAM Access Analyzer** allows customers to verify that their policies provide
exactly the level of access they need. It continuously monitors for new or
updated policies and analyzes permissions granted by using policies for Amazon
S3 buckets, AWS KMS keys, Amazon SQS queues, AWS IAM roles, and AWS Lambda
functions.

**AWS Security Hub** provides the aggregation point for GuardDuty and IAM Access
Analyzer findings across multiple AWS accounts, acts as the conduit to Rackspace
systems, and serves as a single pane of glass for all native security services
that generate findings. It also provides security standard checks against
industry best practices, such as CIS AWS Foundations. We enable Security Hub
for all Cloud Native Security Service Block customers, but the security standards
feature is optional.

This Service Block requires Security Hub. However, the other native security products
are optional, and you can disable them by creating a ticket with Rackspace.

Onboarding
----------

During onboarding to this Service Block, Rackspace deploys and configures the
security products onto the customer's AWS accounts across different regions.
Rackspace also collaborates with the customer to create a customer-specific
runbook.

Every customer has a dedicated AWS account for use as Security Hub
master and GuardDuty master. Rackspace enables and configures Security Hub
and GuardDuty on the master account and all other accounts in scope,
including configuring the master-member relationship.

Rackspace configures Security Hub to ingest security findings from GuardDuty
and IAM Access Analyzer. We also configure it to deliver the events to the
Rackspace Security Information and Event Management (SIEM), a system
that our security specialists use to monitor the security of customer
environments 24x7x365.

We create a runbook for every customer. The runbook provides Rackspace engineers
with information about the customer’s environment and allows them to apply context
to security findings. A typical runbook might include the following elements:

- **Information about the environments**: Details such as what is production versus
  non-production, which environments contain sensitive data, any expected suspicious
  traffic to remote regions, or crypto-currency activities.
- **Customer escalation process**: Who to contact and when.
- **Any actions Rackspace can perform as part of remediation without explicit approval**:
  Tasks such as isolate compromised instances, invalidate compromised credentials,
  and patch vulnerabilities.
- **Any known IP whitelists or threat lists**

Monitoring
----------

Rackspace security specialists monitor Security Hub, GuardDuty, and IAM
Access Analyzer findings 24x7x365. We begin analysis of findings
within response times commensurate with the following finding severity:

- **Critical**: 30 minutes
- **High**: 60 minutes
- **Medium**: 4 hours

Rackspace security specialists analyze and filter the findings and
apply context based on the customer’s runbook. For example, they
might perform the following activities:

* Identify false-positive findings
* Identify the affected environment, such as production, test, or development
* Aggregate multiple related findings into a single incident
* Review the findings against the customer’s runbook

After we analyze the findings, Rackspace initiates the escalation and
notification processes.

Investigation and remediation 
-----------------------------

Rackspace engineers investigate the findings, engage the customer as
necessary according to the runbook, and recommend remediation actions. On AWS
accounts that include the Manage & Operate Service Block, Rackspace
remediates the findings.

Ongoing management
------------------

When customers create new AWS accounts, they need to open a ticket and ask
Rackspace to enable and configure the security products on the newly created
AWS accounts.

Rackspace provides ongoing management of the security products in a
customer's environment. This might include creating custom
Security Hub Insights based on customer's security needs and managing
GuardDuty auto-archive rules and the trusted IP and threat lists according to the
customer's requirements.

To ensure that the service coverage remains sufficient for the customer's
requirements, Rackspace performs monthly account reviews. These reviews
enable customers to adjust the service level and the mix of the security
products as their requirements change. Account reviews might include the
following items:

- Review of the customer’s runbook
- Summary of findings and remediations
- Compliance status
- Review of reoccurring findings
- Review of IP lists

Findings and events
-------------------

Native security products produce findings rather than raw data points. Every
security finding aggregated by Security Hub includes one of the following
associated normalized severity levels:

- **Critical**
- **High**
- **Medium**
- **Low**
- **Informational**

The system sends findings at or above the defined minimum-severity level
to Rackspace SIEM, where they go through correlation rules and transform into
events. Every event includes one or more correlated findings. Rackspace security
specialists respond to these events.

Occasionally, customers might want Rackspace to investigate a finding that
is below the defined minimum severity level. The Security Hub user interface
of the AWS Console on the master account provides this functionality.
Select a finding and choose **Send to Rackspace** in the
**Actions** drop-down menu to send the finding to the Rackspace SIEM to be
investigated by a specialist. For customers who opted for the per-event billing
model, standard charges apply for findings sent to Rackspace by using this method.

.. note::
   The **Send to Rackspace** action supports single findings only. To send
   multiple findings to Rackspace, customers should repeat the process for
   each finding individually.

Billing
-------

Cloud Native Security Service Block service fees do not include the cost of
the native security products themselves. The AWS infrastructure charges
portion of the customer's Rackspace bill includes the cost of the native
products and the infrastructure supporting the Rackspace SIEM integration.

Rackspace charges the initial deployment and configuration as a one-time
onboarding fee.

Customers can choose one of the following billing models for the Cloud Native
Security Service Block:

- Percentage of AWS infrastructure billing model
- Per-event billing model

Percentage of AWS infrastructure billing model
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Rackspace charges customers who opt for this billing model a set percentage
of their total AWS infrastructure costs on accounts in scope for Cloud Native
Security. We base charges on the usage of all AWS services and marketplace fees on
accounts in scope for Cloud Native Security.

To provide valuable service and help with prioritization, Rackspace defines a
minimum severity level for each native AWS security product (the source of
findings). Rackspace ingests and responds to only findings that are at or
above the defined minimum severity level for each product. Rackspace does not
process findings with severities below this threshold. The following list shows
the minimum severity levels for each product:

- IAM Access Analyzer: **LOW**
- Amazon GuardDuty: **MEDIUM**
- AWS Security Hub (Security Standards): **HIGH**

Per-event billing model
^^^^^^^^^^^^^^^^^^^^^^^

Rackspace charges customers who opt for this billing model a set fee for every
security event Rackspace responds to. We calculate the monthly charge for the
service as the product of the number of events multiplied by the cost per
event, or the minimum monthly fee, whichever is greater.

The per-event fee applies to events (SIEM-correlated findings). For example,
suppose the native security products generate five findings and deliver them to
the SIEM. The SIEM then correlates the findings and generates two events, one for
two related findings and another for three related findings. In this case,
Rackspace charges the customer for only two events.

To give customers some control over costs that directly correlate with the
volume of findings Rackspace responds to and to help with prioritization,
we define a minimum severity level for each customer. Rackspace ingests and
responds to only findings that are at or above the defined minimum severity
level. Rackspace does not process findings with lower severity levels or
charge the customer for those. The customer and Rackspace agree on the minimum
severity level.

You can choose to set the initial minimum severity level for Rackspace response
based on one of the following options:

- Set them based on a review of the native security products in your environment,
  if they are already enabled.
- Set to the highest severity level (that is, ``Critical`` or ``High``).

As part of the regular monthly account reviews, Rackspace and the customer review
the minimum severity level. When the current setting does not generate too many
findings, we can reduce the minimum severity level and respond to findings with
lower severity. Likewise, if the current setting generates too many findings,
we can increase the minimum severity level.

Additional services
-------------------

Cloud Native Security provides SOC-as-a-Service for native AWS security
products. Customers interested in improving their security posture beyond the
scope of the Cloud Native Security Service Block can purchase
`add-on services <https://www.rackspace.com/security>`_ for agent-based
OS-level threat detection, threat hunting, and threat intelligence.


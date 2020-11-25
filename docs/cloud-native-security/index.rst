.. _cloud_native_security:


Cloud Native Security
=====================

AWS is constantly expanding its portfolio of native security products. Thanks to its more holistic access to backend data and resources, Amazon can offer security features that third-party tools cannot provide. Rackspace is expanding its managed security services to provide SOC-as-a-Service for native AWS security products.

AWS customers who want to improve their security posture by using products
like `AWS Security Hub <https://aws.amazon.com/security-hub/>`_,
`Amazon GuardDuty <https://aws.amazon.com/guardduty/>`_ and
`IAM Access Analyzer <https://aws.amazon.com/iam/features/analyze-access/>`_
but do not have the expertise or the resources to invest in a 24x7x365 Security
Operations Center (SOC) are now able to utilize the Cloud Native Security
Service Block from Rackspace.

**Amazon GuardDuty** provides threat detection utilizing existing AWS native
data sources (CloudTrail Logs, VPC Flow Logs, and DNS Logs) without any
potentially disruptive deployment steps such as agent installation. AWS
describes GuardDuty as a service that “uses machine learning, anomaly
detection, and integrated threat intelligence to identify and prioritize
potential threats”.

**IAM Access Analyzer** allows customers to verify that their policies provide
exactly the level of access they need. It continuously monitors for new or
updated policies, and analyzes permissions granted using policies for Amazon
S3 buckets, AWS KMS keys, Amazon SQS queues, AWS IAM roles, and AWS Lambda
functions.

**AWS Security Hub** provides the aggregation point for GuardDuty and IAM
Access Analyzer findings across multiple AWS accounts, acts as the conduit
to Rackspace systems, and serves as a single pane of glass for all native
security services which generate findings. It also provides security standard
checks against industry best practices (e.g. CIS AWS Foundations). Security
Hub will be enabled for all Cloud Native Security customers, but the
security standards feature is optional.

This Service Block requires Security Hub, but the other native security
products are optional and can be disabled by creating a ticket with Rackspace.

Onboarding
----------

During onboarding to this Service Block, Rackspace will deploy and configure
the security products onto customer's AWS account(s) across different
regions. Rackspace will also collaborate with the customer to create a
customer-specific runbook.

Every customer will have a dedicated AWS account to be used as Security Hub
master and GuardDuty master. Rackspace will enable and configure Security Hub
and GuardDuty on the master account and all other accounts that are in
scope, including configuration of the master-member relationship.

Rackspace will configure Security Hub to ingest security findings from
GuardDuty and IAM Access Analyzer. It will also be configured to deliver the
events to the Rackspace SIEM (Security Information and Event Management), a
system that is used by our security specialists to monitor the security of
customer environments 24x7x365.

A runbook will be created for every customer. The purpose of the runbook is
to provide Rackspace engineers with information about the customer’s
environment and allow them to apply context to security findings. A typical
runbook might include:

* Information about the environments (what is prod/non-prod, which environments
  contain sensitive data, any expected “suspicious” traffic to remote regions
  or crypto-currency activities)
* Customer escalation process (who to contact and when)
* Any actions Rackspace can perform as part of remediation without explicit
  approval (e.g. isolate compromised instances, invalidate compromised
  credentials, patch vulnerabilities)
* Any known IP whitelists or threat lists

Monitoring
----------

Rackspace security specialists will monitor Security Hub, GuardDuty and IAM
Access Analyzer findings 24x7x365. Rackspace will begin analysis of findings
within response times commensurate with the finding severity:

* Critical: 30 minutes
* High: 60 minutes
* Medium: 4 hours

Rackspace security specialists will analyze and filter the findings and will
apply context based on customer’s runbook – for example:

* Identification of false-positive findings
* Identification of affected environment – production/test/dev
* Aggregation of multiple related findings into a single incident
* Review of the findings against customer’s runbook

Once the findings have been analyzed, escalation and notification processes
will be initiated.

Investigation and Remediation
-----------------------------

Rackspace engineers will investigate the findings, engage the customer as
necessary according to the runbook, and recommend remediation actions. On AWS
accounts that include the Manage & Operate Service Block, Rackspace will
remediate the findings.

Ongoing Management
------------------

When customers create new AWS accounts, they will need to request Rackspace via
a ticket to enable and configure the security products on these newly created
AWS accounts.

Rackspace will provide ongoing management of the security products in a
customer's environment. This might include activities such as creation of
custom Security Hub Insights based on customer's security needs and management
of GuardDuty auto-archive rules and trusted IP/threat lists according to
the customer's requirements.

In order to ensure that the coverage of the service remains sufficient for the
customer's requirements, Rackspace will perform monthly account reviews. This
will allow customers to adjust the level of service and the mix of the
security products as their requirements change. Account reviews might
include: review of the customer’s runbook, summary of findings and
remediations, compliance status, review of reoccurring findings, review of
IP lists.

Findings and Events
-------------------

Native security products produce findings (rather than raw data points). Every security finding aggregated by Security Hub includes an associated normalized severity level – Critical, High, Medium, Low, Informational.

Findings that are at or above the defined minimum severity level are sent to Rackspace SIEM, where they go through correlation rules and transformed into events. Every event includes one or more correlated findings. Rackspace security specialists respond to these events.

From time to time, customers might want Rackspace to investigate a finding that is below the defined minimum severity level. Such functionality is available directly in the Security Hub user interface of the AWS console on the master account. Selecting a finding and choosing **Send to Rackspace** in the **Actions** drop-down menu sends the finding to the Rackspace SIEM to be investigated by a specialist. Standard charges apply for findings sent to Rackspace using this method for customers who opted for the per-event billing model. **Note:** The **Send to Rackspace** action supports single findings only. To send multiple findings to Rackspace, customers should repeat the process for each finding individually.

Billing
-------

Cloud Native Security service fees do not include the cost of the native security products themselves. The cost of the native products as well as the costs of the infrastructure supporting the integration with the Rackspace SIEM are included in the AWS infrastructure charges portion of the customer's Rackspace bill.

Initial deployment and configuration are charged as a one-time onboarding fee.

Customers can choose between 2 billing models for Cloud Native Security – percentage of AWS infrastructure billing model or per-event billing model.

Percentage of AWS infrastructure billing model
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Customers that opt for this billing model are charged a set percentage of their total AWS infrastructure costs on accounts that are in scope for Cloud Native Security. Charges are based on usage of all AWS services and marketplace fees on accounts in scope for Cloud Native Security.

To provide valuable service and to help with prioritization, Rackspace defined a minimum severity level for each native AWS security product (source of findings). Rackspace ingests, and responds to, only findings that are at or above the defined minimum severity level for each product. Findings with severities below this threshold are not processed by Rackspace. The minimum severity levels for each product are defined as:

* IAM Access Analyzer – **LOW**
* Amazon GuardDuty – **MEDIUM**
* AWS Security Hub (Security Standards) – **HIGH**

Per-event billing model
^^^^^^^^^^^^^^^^^^^^^^^

Customers that opt for this billing model are charged a set fee for every security event Rackspace responds to. The monthly charge for the service is calculated as the product of the number of events multiplied by the cost per event, or the minimum monthly fee, whichever is greater.

The per-event fee applies to events (SIEM-correlated findings). For example, if the native security products generate five findings that are delivered to the SIEM and, after correlation, the SIEM generates two events (one for two related findings and one for three related findings), the customer is charged for two events only.

To give customers some control over costs (which have a direct correlation with the amount of findings Rackspace responds to) and to help with prioritization, we define a minimum severity level for each customer. Rackspace ingests, and responds to, only findings that are at or above the defined minimum severity level. Findings with lower severity level are not processed by Rackspace and the customer is not charged for those. The minimum severity level will be agreed upon between the customer and Rackspace.

Initial selection of the minimum severity level for Rackspace response can either be based on a review of the native security products in the customer’s environment (if they are already enabled) or simply be set to the highest severity level (that is, ``Critical`` or ``High``) to start with. As part of the regular monthly account reviews, Rackspace and the customer review the minimum severity level. When the current setting does not generate too many findings, we can reduce the minimum severity level and start responding to findings with a lower severity. Likewise, if the current setting is generating too many findings, we can increase the minimum severity level.

Additional Services
-------------------

Cloud Native Security provides SOC-as-a-Service for native AWS security products. Customers interested in improving their security posture over and above what is possible from the Cloud Native Security Service Block alone can purchase `add-on services <https://www.rackspace.com/security>`_ for agent-based OS-level threat detection, threat hunting, and threat intelligence.


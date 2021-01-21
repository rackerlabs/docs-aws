.. _deploying_code:

==============
Deploying Code
==============

From time to time, you will be faced with a decision about how to deploy
a file, instance configuration, agents, or even entire applications
into an AWS environment (we refer to these collectively as
'artifacts' below). This page is intended to be our Fanatical AWS
"best practices" and opinions around each option.

Many of these options provide an initial bootstrapping step that can then
be used to perform additional work or copy additional files from other
locations.

Bake files into AMI
-------------------

Copy needed artifacts to an EC2 image, create an Amazon machine
image (AMI), and rotate instances using the new AMI.

**Variations:**

  - Create an instance manually and create an AMI
  - Use tools like Packer to automatically build AMIs

**Benefits:**

  - No dependence on external sources
  - Fastest instance boot time
  - Guaranteed state
  - Strongly version controlled
  - Can release updates to multiple files simultaneously
  - Allows for testing before deployment
  - Encryption possible

**Drawbacks:**

  - Updates require a new AMI be built
  - Storage cost of AMIs
  - May have many AMIs with duplicate artifacts (e.g. one AMI per region)
  - Requires additional management to clean up old AMIs
  - Some artifacts need to be staged before AMI taken (i.e. sysprep style)
  - Some artifacts (e.g. agents) may conflict with user-data/cloud-init

AWS CodeDeploy
--------------

Install CodeDeploy agent using one of the methods in this table, then
use APIs to drive deployment from GitHub, S3, or another supported
Git hosting provider. Embed additional artifacts in the deployment
artifact or fetch them during CodeDeploy lifecycle hook execution.

**Variations:**

  - Store artifacts in git and deploy them as part of application
  - Fetch artifacts in S3 or another location

**Benefits:**

  - CodeDeploy offers blue-green and canary deployment options
  - Allows for live deployments of configuration files without rotating AMIs
  - Config files can be tied to application deployments
  - Encryption possible with S3

**Drawbacks:**

  - Another agent to maintain and update
  - Secrets should not be stored in git repositories
  - Requires a deploy of application to update configuration files

User Data
---------

Embed scripts in user-data or in cloud-init (called by user data). These
scripts can fetch artifacts from S3, embed smaller artifacts directly, or
even add package repositories and install packages.

**Variations:**

  - Fetch files in S3 on boot
  - Write files directly on boot

**Benefits:**

  - Fastest ability to update files (just build more instances)
  - Ability to always download the latest versions (e.g. for agents)
  - Customer can deploy secrets without Rackspace needing to be involved
  - S3 can be secured and accessible only from a VPC Endpoint
  - Encryption possible

**Drawbacks:**

  - Slows down provisioning of new instances
  - Dependence on external source to boot instance
  - Difficult / slow to debug, as autoscaling may terminate unhealthy
    instances
  - No guarantee that instances will have same artifact versions
  - Security controls must be managed appropriately, with 3rd party code
    without review on new versions

Native AWS APIs
---------------

Write your application to utilize native EC2 SSM Parameter Store or other
AWS storage services to directly retrieve artifacts at runtime.

**Variations:**

  - EC2 SSM Parameter Store
  - S3, DynamoDB, etc

**Benefits:**

  - No need to manage config file deployment
  - Applications can be dynamically updated

**Drawbacks:**

  - Significantly more opaque than a file-based method
  - Requires a very good knowledge of the AWS APIs
  - May require a re-architecture of the application

Terraform Module
----------------

Terraform offers a
`template provider <https://www.terraform.io/docs/providers/template/index.html>`_
that can be used to embed artifacts inline or as separate files. You can
then use these artifacts via data sources when building a cloud-init
configuration.

**Variations:**

  - Keep files in git
  - Embed scripts directly in Terraform file

**Benefits:**

  - Terraform native functionality to deploy files with dynamic values
  - Allows for collaboration on artifacts in Git
  - Uses cloud-init for cross-platform functionality
  - Less files strewn around various places
  - Easier to pull in dynamic values from other APIs
  - Single place to manage instance configuration

**Drawbacks:**

  - Requires co-locating configuration files and Terraform files
  - Inline artifacts make Terraform harder to read; painful escaping of
    strings
  - Not in the spirit of Terraform or Infrastructure as Code
  - Cannot dynamically update artifacts without applying Terraform again

.. _managed_infra_as_code:

==============================
Managed Infrastructure as Code
==============================

Deployment through infrastructure-as-code (IaC) helps you build and manage
cloud infrastructure through code, utilizing software development best
practices and industry-standard DevOps tools and techniques. Using an
industry-standard tool called Terraform, your infrastructure code
is peer reviewed through pull requests, and committed to version
control, all while being tested and deployed through automation steps
called continuous integration (CI) and continuous delivery (CD).

This means that changes to your environment are managed through this
specialized Terraform workflow, and not through the AWS Console
directly. Changes in the AWS Console can conflict with Terraform
management, resulting in downtime, data loss, or delays to reconcile
these manual changes. It is important that all changes to your
environment are managed with Terraform. If you need assistance
applying a change, the Rackspace Support team will be happy to help.


.. toctree::
   :maxdepth: 1

   change-workflow.rst
   using-github.rst
   using-terraform.rst
   tf_style.rst
   using-circleci.rst
   deploying-code.rst
   faq.rst

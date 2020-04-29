.. _faq:

==========================
Frequently Asked Questions
==========================


**Should I have a backup of my GitHub repositories? Does Rackspace keep a
backup of them as well?**

GitHub keeps three copies of all data; we believe
`that these assurances about data reliability <https://github.com/security>`_
are adequate. Beyond that, we also have a copy of the Terraform files for
every build that runs through CircleCI, as well as local copies of all
revisions anywhere that someone has checked out a local copy recently. We
are confident this is enough redundancy to keep your infrastructure
safe, however GitHub does offer some
`tooling suggestions <https://help.github.com/en/articles/backing-up-a-repository>`_
if you would like to create an additional backup of your data on your own.

**Why am I seeing Terraform plans with EC2 instances that have one security
group removed?**

This is most likely from
`Passport <https://manage.rackspace.com/aws/docs/product-guide/passport.html>`_.
You should close the Passport request before making infrastructure
changes, or restore the removed security group once the change has been
applied.

**I've submitted a pull request to my repository. Why isn't it being tested
and checked by the continuous automation?**

This most commonly occurs if you've created a fork of your repository and
you're submitting a pull request from that fork instead of a branch on
the same repository. In order to protect against the exfiltration of
build data, our CI system won't build from a fork. Please push your
forked branch to a branch on the original repository.

**I'm seeing authentication failures in CloudTrail and in Compass when
Terraform runs. What are these and what can I do about them?**

Unfortunately, the ``DescribeVpcClassicLinkDnsSupport`` API call, used by
the Terraform provider for AWS to determine EC2 capabilities, is recorded
as an authentication failure when an AWS account does not have
"EC2 Classic" enabled (a previous generation of the EC2 service). When
this occurs, CloudTrail records an error message
``"This request has been administratively disabled"``.

**How do you handle multiple, concurrent changes? Won't they break on
each other?**

Pull requests are designed to fail testing when the branch is out of date
with master. This ensures we'll only apply one set of Terraform changes
at a time. We believe this provides adequate concurrency limits to prevent
problems.

**How can I share modules across repositories but still develop them
quickly, without multiple pull requests for every change?**

We recommend developing a module in the repository that will be first using
it, to limit the amount of review and pull requests while you're in the
development phase and iterating quickly. Once a module has become
relatively stable, it can be relocated to your Shared Repository and used
in multiple accounts.

**How do I protect resources from accidental deletion?**

Some Terraform-created resources should be protected from deletion, either
due to external dependencies or because they contain data that shouldn't
ever be destroyed. Likewise, sometimes a new resource should be created
before the older one is removed, so that there's always a resource
available to serve requests. For these use cases, we recommend using
`lifecycle blocks <https://www.terraform.io/docs/configuration-0-11/resources.html#lifecycle>`_
on resources to ensure they are never deleted, or are re-created in a
specific order.

**How do I tell Terraform to ignore my application deployment pipeline's
changes? Other types of third-party changes?**

For various reasons, you may want to ignore certain attributes on a
resource. You may be updating a version attribute as part of a separate
application deployment pipeline, or using a third-party service that
manages a specific resource in AWS. For these use cases, we recommend using the
`ignore_changes attribute <https://www.terraform.io/docs/configuration/resources.html#ignore_changes>`_
on specific resources. This *should be used sparingly*, as it has associated
risks and makes your infrastructure harder to rebuild in a repeatable way.

**Why don't you use Terraform's workspaces feature?**

According to
`the Terraform project developers <https://github.com/hashicorp/terraform/issues/18632#issuecomment-412247266>`_,
workspaces are intended to be, "*temporary* copies of an infrastructure
during development," modeled after git branches. "Most teams should
not use workspaces, and should instead use the module-per-environment
pattern." The developers intend to revise the *When To Use Workspaces*
section to be a lot more explicit about what workspaces are suited
for and what they are less suited for. In the mean time, they recommend
users should instead adopt the module-per-environment pattern. This is
what we've done with the layers concept.

**How do I reapply the master branch on my account, without making
infrastructure changes?**

The most straightforward way to do this is by making a simple
whitespace/comment change to any layers you'd like to have re-applied.
Please reach out to your Support team if you need further assistance. At
the current time, Rackspace does not monitor for outstanding/unapplied
changes between your Terraform configuration and your infrastructure.

**Can I take my Terraform files and scripts with me if I leave Rackspace?**

All Terraform files used to build your infrastructure can be downloaded and
taken with you at any time. Your Terraform module files are located in
the GitHub repository connected to your AWS account. The Rackspace
developed and managed Terraform module files, which are referenced by
your Terraform module(s), are publicly available on a Rackspace owned
GitHub repository and are licensed under the MIT license. If you would
like assistance in cloning your GitHub repository or downloading your
Terraform files, please open a ticket with us.

**What is the IAM user on my account being used for? How can I be sure it
is secure?**

We're allocating an IAM user on every AWS account strictly to be used by
Terraform when running through the CI system. This user's access keys
are known only to the CI system. We will eventually remove this user
and use a new process that relies on API keys, scoped only to your AW
account, that can be used by the CI system to get temporary, short-lived
credentials that have access to build and manage resources in your AWS
account.

**How many users can I add to GitHub? How do I add them?**

By default, we limit the number of users we can add to your GitHub
repositories to fifteen (15). Please contact us if you need additional
users added, or need to exceed that limit.

**How can I request a pull request review from Rackspace?**

Our tooling and automation automatically tracks pull requests that you
create, and prioritizes their review to our Support Teams. Please give
us a call if you have something you need urgent review on, and we'll
review immediately with you.

**How do I give feedback on the infrastructure-as-code product?**

Please open a normal Rackspace support ticket and submit your
feedback. Support Rackers will pass your feedback along to our product
teams. Your feedback means a lot to us. Thank you.

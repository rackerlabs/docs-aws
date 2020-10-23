.. _using_circleci:

==============
Using CircleCI
==============

Rackspace employs continuous integration and delivery (CI/CD) to deploy
your infrastructure based on the ``master`` branch of your repository.
Therefore, the `master` branch should always reflect a consistent,
deployable, and current expected state of your infrastructure. The
``master`` branch is also protected from unreviewed changes, and
should only be modified through a pull request process.

Any user with GitHub repository access (see :ref:'using_github') has the
same access to CircleCI projects configured to build that repository, using
the, "Log In with GitHub" button. These projects, as well as
logs, artifacts, and configuration, can be found by directly visiting
the ``rackspace-infrastructure-automation`` organization in
`CircleCI <https://circleci.com>`_. You may also navigate to individual
jobs and workflow steps by following the links from the CircleCI status
checks on a pull request in GitHub.

Build Environment
-----------------

Rackspace maintains a standard Docker container, ``rackspace-toolbox``, that
is used in every CircleCI job when building, testing, and deploying your
repository. This container includes standard tools like tfenv, awscli,
python, jq. It also contains our open source
`Terraform linting tool tuvok <https://github.com/rackerlabs/tuvok>`_ and
our tooling that wraps Terraform commands, analyzes layers, and
retrieves temporary credentials. All changes to this container and scripts
are heavily tested before release. This container also gives us a mechanism
to release product improvements and security fixes without impacting your
repository or workflow.  While we don't publish the source Dockerfile for
this container, the container itself is available from
`rackautomation/rackspace-toolbox <https://hub.docker.com/r/rackautomation/rackspace-toolbox/>`_
to use locally. The container is versioned semantically, and your build
configuration references the container with a tag like
``rackautomation/rackspace-toolbox:1``.

Running Locally
^^^^^^^^^^^^^^^

Combined with your repository's ``.circleci/config.yml`` file, that calls
the various scripts in the toolbox, you are able to run the same builds
locally, as long as the container contains AWS credentials
(try running ``aws configure list`` to confirm), and you've defined the
following environment variables:

.. code::

  TF_STATE_REGION='us-west-2',
  TF_STATE_BUCKET='your-bucket-name'
  TF_VAR_aws_account_id='your-aws-account-number'


As mentioned in :ref:`Using Terraform <using_terraform>`, we recommend
using an existing build's output to find out your state bucket name. You
can find the state bucket name in the `terraform_all_outputs.log` file
under the Artifacts tab of the plan stage under the most recent build.

You may also copy and paste the final commands from those builds,
bypassing the need to set some environment variables.

Workflow Execution
------------------

.. caution::

  This section refers to the CircleCI concepts of
  workflows, jobs, and steps. These should not be confused with the more
  general usage of terms like "workflow" or other services where these terms
  exist, like GitHub.

Job Steps and Configuration
^^^^^^^^^^^^^^^^^^^^^^^^^^^

On every branch, your builds run standard commands like
``terraform fmt`` and ``terraform init``, as well as our custom
linting tool, `tuvok <https://github.com/rackerlabs/tuvok>`_. We also
calculate what layers have changed using a detailed comparison between
the current branch and the most recent successful master build.

1. On branch ``master``, your builds run both ``terraform plan`` and
   ``terraform apply`` for any changed or removed layers.

2. On any other branch, your builds will only run ``terraform plan`` for
   any changed or removed layers.

Your CircleCI configuration is stored in your repository at
``.circleci/config.yml``. This file configures the CI/CD system with
specific workflow steps to execute, and a defines a container in which to
run them. This file should not be modified except through coordination
with Rackspace.

In your CircleCI configuration, these two main steps are organized as two
steps in the workflow, called "plan" and "apply", and we use the branch
filtering functionality to ensure the "apply" step only runs on master, and
depends on the plan step. If you're running terraform locally, it's
important to use the same steps used in CI/CD, and also to never apply
a change before it's been merged into master.

Failed Builds
^^^^^^^^^^^^^

From time to time, either due to code changes or Terraform/AWS
internals, build steps may fail. For branches other than master, this is
a totally normal part of writing and testing code. We also enforce that
branches are up to date with the latest commits from master before
merging, which can cause failures or plans that show unexpected
changes. Most failed builds can be resolved through re-running the build
or pushing additional commits or pulling in the latest changes from master.

In the event that a master build fails, on the plan or apply steps, Rackspace
will automatically create an urgent, public ticket and investigate. We
believe that these events could indicate larger problems with your
infrastructure, partially applied changes to your infrastructure, or
other impactful situations that require immediate attention.

Artifacts and Storage
---------------------

Each build step writes logs in order to help record what is happening, make
troubleshooting easier, and shed light on unexpected failures. These log
files are made available in the CircleCI UI for a given build, in an
"Artifacts" tab. Over time, we plan to make more artifacts available, with
additional helpful output, to make it easier to troubleshoot problems or
understand what's happening in a build. Please note that these artifacts
eventually do expire.

AWS Credentials
---------------

Temporary credentials are issued to each build, at the start of the
build, after our automation confirms that the build is associated with
the correct GitHub repository, AWS account, and Rackspace customer. This
confirmation relies on the same RSA keys used by GitHub to authorize
access to the repository itself.

CircleCI builds now use temporary credentials rather than requiring an IAM
user to be assigned to each AWS account. This is based on the same
`AWS STS-based temporary credentials mechanism <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html>`_
used when you access your AWS account via the Fanatical Support for AWS
control panel "Console" button.

There are several advantages to using temporary, short-lived credentials
over static credentials, given how permissive and powerful Terraform's
credentials need to be when building and managing AWS services on your
account:

- Credentials are not stored permanently in the account or in Terraform
  state (an S3 bucket)
- Temporary credentials will be valid for a short period of time from
  the start of a build and expire safely
- Static credentials require a terraform change, slowing down the
  provisioning process for new accounts

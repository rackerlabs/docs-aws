.. _patching_ec2_meltdownspectre:

==================================================
Automation Artifacts for Patching Meltdown/Spectre
==================================================

Rackspace has developed several Amazon Systems Manager documents to help
automate patching and AMI generation tasks. For customers seeking to patch
their instances or Auto-Scaling Groups against the January 2018 *Meltdown*
and *Spectre* vulnerabilities, particularly useful documents are listed
below. These can be leveraged as part of the process described in the
:ref:`Patching Guide for Amazon EC2 <patching_ec2>` to patch vulnerable
instances in place, or to generate patched AMIs from existing instances or
AMIs.

Customers can download these from the direct links below.

#. `FAWS-MeltdownSpectre-PatchRunningWinLinuxEC2 <https://s3.us-east-2.amazonaws.com/rackspace-faws-public-ssm-docs/spectre_meltdown_remediation/spectre_meltdown_vuln_ec2_patch_winlinux/spectre_meltdown_vuln_ec2_patch_winlinux.json>`_

   * *Checks for presence of meltdown/spectre patch for Windows and Linux
     machines. Optionally apply patches also.*

#. `FAWS-MeltdownSpectre-PatchLinuxAMI <https://s3.us-east-2.amazonaws.com/rackspace-faws-public-ssm-docs/spectre_meltdown_remediation/spectre_meltdown_vuln_ami_patch_linux/spectre_meltdown_vuln_ami_patch_linux.json>`_

   * *Creates new patched AMI (Spectre/Meltdown) from Linux source AMI*

#. `FAWS-MeltdownSpectre-PatchWindowsAMI <https://s3.us-east-2.amazonaws.com/rackspace-faws-public-ssm-docs/spectre_meltdown_remediation/spectre_meltdown_vuln_ami_patch_windows/spectre_meltdown_vuln_ami_patch_windows.json>`_

   * *Creates new patched AMI (Spectre/Meltdown) from Windows source AMI*

#. `FAWS-MeltdownSpectre-PatchLinuxEC2toAMI <https://s3.us-east-2.amazonaws.com/rackspace-faws-public-ssm-docs/spectre_meltdown_remediation/spectre_meltdown_vuln_instance_to_ami_patch_linux/spectre_meltdown_vuln_instance_to_ami_patch_linux.json>`_

   * *Creates new patched AMI (Spectre/Meltdown) from running EC2 instance*

#. `FAWS-MeltdownSpectre-PatchWindowsEC2toAMI <https://s3.us-east-2.amazonaws.com/rackspace-faws-public-ssm-docs/spectre_meltdown_remediation/spectre_meltdown_vuln_instance_to_ami_patch_windows/spectre_meltdown_vuln_instance_to_ami_patch_windows.json>`_

   * *Creates new patched AMI (Spectre/Meltdown) from running Windows EC2
     instance*

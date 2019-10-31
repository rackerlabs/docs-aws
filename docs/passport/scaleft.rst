.. _scaleft_agents_and_tools:

========================
ScaleFT Agents and Tools
========================

.. _passport_scaleft_agents_and_tools_server_agent:

Server Agent
------------

The ScaleFT Server Agent must be installed on each of your servers that
you wish for members of either the Rackspace team, your team, or both to
have access to via Passport. The agent will automatically register with
our centralized ScaleFT control plane. The easiest way to initiate the
install is to include the following script in your EC2 instance's user
data, which will automatically execute the script the first time the server
boots. For existing servers, you can run the script at any time.

The agent will configure SSH (Linux) or RDP (Windows) to authenticate
certificates against the Certificate Authority (CA) that the agent
downloads (specific to your AWS account), but should not impact existing
users that you already have in place.

Install and Configure
^^^^^^^^^^^^^^^^^^^^^

Debian and Ubuntu
"""""""""""""""""

1. Add the
   :ref:`ScaleFT package repository <passport_scaleft_agents_and_tools_package_repositories>`
   for your Linux distribution.
2. Execute the following commands::

    #!/bin/bash
    mkdir -p /etc/sft
    # Set the Rackspace ScaleFT Control Plane URL
    echo "InitialURL: https://scaleft.api.manage.rackspace.com" > /etc/sft/sftd.yaml
    # Install the ScaleFT Server Tools
    sudo apt-get install scaleft-server-tools

Amazon Linux, CentOS, Fedora, and Red Hat
"""""""""""""""""""""""""""""""""""""""""

1. Add the
   :ref:`ScaleFT package repository <passport_scaleft_agents_and_tools_package_repositories>`
   for your Linux distribution.
2. Execute the following commands::

    #!/bin/bash
    mkdir -p /etc/sft
    # Set the Rackspace ScaleFT Control Plane URL
    echo "InitialURL: https://scaleft.api.manage.rackspace.com" > /etc/sft/sftd.yaml
    # Install the ScaleFT Server Tools
    sudo yum install scaleft-server-tools

Windows Server
""""""""""""""

**Supported Operating Systems:** Windows Server 2012, Windows Server
2012 R2, Windows 2016 (except Nano Server, which doesn't support RDP)

1. Specify the following User Data (or remove the ``<powershell>`` tags and
   execute the commands directly via PowerShell)::

    <powershell>
    # Set the Rackspace ScaleFT Control Plane URL
    New-Item -Path 'C:\Windows\System32\config\systemprofile\AppData\Local\ScaleFT\sftd.yaml' -Value 'InitialURL: https://scaleft.api.manage.rackspace.com' -ItemType File -Force | Out-Null
    Add-Content -path C:\Windows\System32\config\systemprofile\AppData\Local\ScaleFT\sftd.yaml -value "`r`nLogLevel: WARN"

    # Install ScaleFT Server Tools
    $installer_url = "https://dist.scaleft.com/server-tools/windows/latest/ScaleFT-Server-Tools-latest.msi"
    $installer_path = [System.IO.Path]::ChangeExtension([System.IO.Path]::GetTempFileName(), ".msi")
    (New-Object System.Net.WebClient).DownloadFile($installer_url, $installer_path)
    msiexec.exe /qb /I $installer_path
    While(-Not (Get-Service "ScaleFT Server Tools" -ErrorAction SilentlyContinue)){Start-Sleep 10}
    Get-Service "ScaleFT Server Tools" | Format-List
    </powershell>

.. _passport_scaleft_agents_and_tools_workstation_tools:

Workstation Tools
-----------------

The ScaleFT Workstation Tools provide an easy way to manage the short-lived
certificates that are issued by ScaleFT Access. Follow these instructions
to initially install and configure the Workstation Tools.

The Workstation Tools will automatically register a URL handler which is used
to provide convenient login links from the Access Request Details page in the
Control Panel.

Install and Configure
^^^^^^^^^^^^^^^^^^^^^

Mac OS X
""""""""

1. Download the latest Workstation Tools from
   https://dist.scaleft.com/client-tools/mac/latest/ScaleFT.pkg and run the
   installer.
2. Run the following command, making sure to replace
   **<your_rackspace_account_number>** with your six or seven-digit
   Rackspace account number (which can be found by clicking on the account
   dropdown in the top right of the
   `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_)::

    sft enroll --default --url https://scaleft.api.manage.rackspace.com --team <your_rackspace_account_number>

3. Follow the on-screen prompts to login and complete the registration
   process.

Debian and Ubuntu
"""""""""""""""""

1. Add the
   :ref:`ScaleFT package repository <passport_scaleft_agents_and_tools_package_repositories>`
   for your Linux distribution.
2. Execute the following commands::

    sudo apt-get install scaleft-client-tools
    sudo apt-get install scaleft-url-handler

3. Run the following command, making sure to replace
   **<your_rackspace_account_number>** with your six or seven-digit
   Rackspace account number (which can be found by clicking on the account
   dropdown in the top right of the
   `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_)::

    sft enroll --default --url https://scaleft.api.manage.rackspace.com --team <your_rackspace_account_number>

4. Follow the on-screen prompts to login and complete the registration
   process.

Amazon Linux, CentOS, Fedora, and Red Hat
"""""""""""""""""""""""""""""""""""""""""

1. Add the
   :ref:`ScaleFT package repository <passport_scaleft_agents_and_tools_package_repositories>`
   for your Linux distribution.
2. Execute the following commands::

    sudo yum install scaleft-client-tools
    sudo yum install scaleft-url-handler

3. Run the following command, making sure to replace
   **<your_rackspace_account_number>** with your six or seven-digit
   Rackspace account number (which can be found by clicking on the account
   dropdown in the top right of the
   `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_)::

    sft enroll --default --url https://scaleft.api.manage.rackspace.com --team <your_rackspace_account_number>

4. Follow the on-screen prompts to login and complete the registration
   process.

Windows
"""""""

**Supported Operating Systems:** Windows 8, Windows 10

1. Download the
   `ScaleFT installer <https://dist.scaleft.com/client-tools/windows/latest/ScaleFT.msi>`_
   and run the installation MSI.
2. Open a command prompt and run the following command, making sure to
   replace **<your_rackspace_account_number>** with your six or seven-digit
   Rackspace account number (which can be found by clicking on the account
   dropdown in the top right of the
   `Fanatical Support for AWS Control Panel <https://manage.rackspace.com/aws>`_)::

    sft enroll --default --url https://scaleft.api.manage.rackspace.com --team <your_rackspace_account_number>

3. Follow the on-screen prompts to login and complete the registration
   process.
4. The first time ScaleFT is run on a Windows system it needs to be started
   manually from a command line::

     %USERPROFILE%\AppData\Local\Apps\ScaleFT\ScaleFT.exe

   When the first Passport login request executes, you will be prompted to
   remember the association for access request links. Select "Yes".

   When ScaleFT is running you will see a white, 3-lobed icon in the system
   tray near the clock.

5. Your monitor resolution may require that you adjust display settings for
   ScaleFT. You can adjust your ScaleFT display size by setting a specific
   resolution, or starting in Fullscreen mode. See the following command
   examples:

Set screen resolution::

   sft config rdp.screensize 1280x1024

Start in Fullscreen mode::

   sft config rdp.fullscreen true


.. _passport_scaleft_agents_and_tools_package_repositories:

ScaleFT Package Repositories
----------------------------

ScaleFT distributes client and server packages for Linux via APT and RPM
repositories.

Debian and Ubuntu
^^^^^^^^^^^^^^^^^

::

    # Add the ScaleFT apt repo to your /etc/apt/sources.list system config file
    echo "deb http://pkg.scaleft.com/deb linux main" | sudo tee -a /etc/apt/sources.list

    # Trust the repository signing key
    curl -C - https://dist.scaleft.com/pki/scaleft_deb_key.asc | sudo apt-key add -

    # Retrieve information about new packages
    sudo apt-get update

Amazon Linux, CentOS, Fedora, and Red Hat
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
::

    # Add the ScaleFT yum repository
    curl -C - https://pkg.scaleft.com/scaleft_yum.repo | sudo tee /etc/yum.repos.d/scaleft.repo

    # Trust the repository signing key
    sudo rpm --import https://dist.scaleft.com/pki/scaleft_rpm_key.asc

Known Issues and Suggestions
----------------------------

1. The following is a list of known issues or errors encountered by users:

- Passport does not support EC2 instances with multiple Elastic Network
  Interfaces (ENIs)
- ScaleFT requires manual start-up the first time it is run on a Windows
  workstation. See instructions earlier in this article under Workstation
  Tools.
- Client-side error for expired authentication token. Contact your Fanatical
  Support team for assistance.
- sshd refuses to authenticate your ScaleFT-issued key. Contact your
  Fanatical Support team for assistance.

2. Log files can be helpful when troubleshooting an issue. When contacting
   your Fanatical Support team for assistance, please attach your client
   logs to the support ticket.

Log files are typically stored in the following directories:::

    Windows: %USERPROFILE%\AppData\Local\ScaleFT\Logs
    Linux: ~/.cache/ScaleFT/logs/sft/
    Mac: ~/Library/Logs/ScaleFT/sft/

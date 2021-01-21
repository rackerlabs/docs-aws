:orphan:

=================================================
Rackspace Fanatical Support for AWS Product Guide
=================================================

This repository contains the source files that generate the Rackspace Fanatical
Support for AWS Product Guide:


Setup the environment
---------------------

To compile the documentation you need Sphinx Python library. To install it
and all its dependencies run the following command from this dir

::

    pip install -r requirements.txt


Compile the documentation
-------------------------

To compile the documentation (to classic HTML output) run the following command
from this dir::

    npm run build

Documentation will be generated (in HTML format) inside the ``build/html`` dir.


View the documentation
----------------------

To view the documentation run the following command::

    npm run dev

This command will fire up your default browser and open the main page of your
(previously generated) HTML documentation.


Start over
----------

To cleanup all generated documentation files and start from scratch run::

    npm run build

Keep in mind that this command won't touch any documentation source files.



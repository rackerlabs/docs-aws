# Rackspace Fanatical Support for AWS Product Guide

This repository contains the source files that generate the Rackspace Fanatical
Support for AWS Product Guide:

* <https://developer.rackspace.com/docs/fanatical-support-aws/>

When you commit changes to the master branch of this repository, the
OpenShift CI/CD build job
builds the documentation. Successful builds are deployed to production.

[![Netlify Status](https://api.netlify.com/api/v1/badges/bba6c4a7-222d-46da-93e3-5b7d19ed49bc/deploy-status)](https://app.netlify.com/sites/docs-aws/deploys)

## Local Setup

`npm i -g netlify-cli`
`netlify init`
`netlify build`
`netlify dev`
`netlify deploy`

### Support and feedback

We welcome feedback, comments, and bug reports. Follow the [contributor guidelines](CONTRIBUTING.md)
to propose a source file change, or [submit a GitHub issue](https://github.com/rackerlabs/docs-cloud-servers/issues/new)
to request an update or to provide feedback.

You can also contact the [Rackspace documentation team](mailto:devdoc@rackspace.com) directly for general
issues or questions about the content.

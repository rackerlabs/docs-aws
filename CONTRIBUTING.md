# Contributor guidelines

These guidelines provide the general process for updating the Fanatical Support for AWS Product Guide.

- [Updating and adding content](#updating-and-adding-content)
- [Using writing guidelines](#using-writing-guidelines)
- [Submitting your content](#submitting-changes)
- [Previewing changes](#previewing-changes)

## Updating and adding content

Contributions are submitted, reviewed, and accepted by using GitHub pull
requests (PRs), following the [GitHub workflow](GITHUBING.md) for this repository.

To update existing source files or add new ones, follow the
[GitHub workflow](GITHUBING.md) for this repository.

* Update source files by using the GitHub editor or any plain text editor.
* Format RST source files with
  [reStructuredText syntax](http://www.sphinx-doc.org/en/stable/rest.html), and for quick syntax checking, try the [Online reStructuredText editor](http://rst.ninjs.org/).

## Using writing guidelines

When you add or update content, use the writing and style guidelines
in the [Style guidelines for technical content](http://rackerlabs.github.io/docs-rackspace/style-guide/index.html).
Start with the guidelines in the [Quickstart](http://rackerlabs.github.io/docs-rackspace/style-guide/quickstart.html#quickstart)
section.

## Submitting changes

When you've completed your changes, submit a PR and the post a link to the PR in the #docs channel in Slack. Someone on the
Information Development team will review your PR.

- Minor updates and corrections get a quick review to ensure that content is
  error-free and doesn't introduce other issues.
- More complex changes or additions require both technical and editorial review.

Depending on the review feedback, you might be asked to make additional changes.

After content has been reviewed and approved, the updates can be merged to the
master branch.

## Previewing changes

When you submit a PR, the build process creates a preview of
your changes in a staging environment. After the build process completes, a
message displays in the PR comments with a link to the
content in a staging environment.

You can also build the project locally using the [Sphinx documentation
generator](http://sphinx-doc.org/). For details, see
[Building from source](https://github.com/rackerlabs/docs-rackspace/blob/master/doc/tools/build-from-source.rst).

# Makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    =
SPHINXBUILD   = sphinx-build
SPHINXVERS    = sphinx-versioning
PAPER         =
BUILDDIR      = _build
DOCDIR        = docs

# User-friendly check for sphinx-build
ifeq ($(shell which $(SPHINXBUILD) >/dev/null 2>&1; echo $$?), 1)
	$(error The '$(SPHINXBUILD)' command was not found. Make sure you have Sphinx \
	installed, then set the SPHINXBUILD environment variable to point to the full \
	path of the '$(SPHINXBUILD)' executable. Alternatively you can add the \
	directory with the executable to your PATH. If you don\'t have Sphinx \
	installed, grab it from http://sphinx-doc.org/)
endif

# Internal variables.
PAPEROPT_a4     = -D latex_paper_size=a4
PAPEROPT_letter = -D latex_paper_size=letter
ALLSPHINXOPTS   = -d $(BUILDDIR)/doctrees $(PAPEROPT_$(PAPER)) $(SPHINXOPTS) .
# the i18n builder cannot share the environment and doctrees with the others
I18NSPHINXOPTS  = $(PAPEROPT_$(PAPER)) $(SPHINXOPTS) .

.PHONY: help clean htmlvers html dirhtml singlehtml pickle spelling

help:
	@echo "Please use \`make <target>' where <target> is one of"
	@echo "  htmlvers   to make standalone HTML files with version options"
	@echo "  html       to make standalone HTML files"
	@echo "  dirhtml    to make HTML files named index.html in directories"
	@echo "  singlehtml to make a single large HTML file"
	@echo "  pickle     to make pickle files"
	@echo "  spelling   to run spell check on all documentation"

clean:
	rm -rf $(BUILDDIR)/*

htmlvers:
	$(SPHINXVERS) -l conf.py build $(DOCDIR)/ $(BUILDDIR)/html/
	@echo
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/html."

html:
	$(SPHINXBUILD) -E -q -b html $(ALLSPHINXOPTS) $(BUILDDIR)/html
	@echo
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/html."

dirhtml:
	$(SPHINXBUILD) -b dirhtml $(ALLSPHINXOPTS) $(BUILDDIR)/dirhtml
	@echo
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/dirhtml."

singlehtml:
	$(SPHINXBUILD) -E -q -b singlehtml $(ALLSPHINXOPTS) $(BUILDDIR)/singlehtml
	@echo
	@echo "Build finished. The HTML page is in $(BUILDDIR)/singlehtml."

pickle:
	$(SPHINXBUILD) -b pickle $(ALLSPHINXOPTS) $(BUILDDIR)/pickle
	@echo
	@echo "Build finished; now you can process the pickle files."

spelling:
	$(SPHINXBUILD) -b spelling $(ALLSPHINXOPTS) $(BUILDDIR)/spelling
	@echo
	@echo "Build finished. The spelling files are in $(BUILDDIR)/spelling."

VERSION := $(shell cat ../engine/nanofl/engine/Version.hx | grep player | grep -o '[0-9]\+[.][0-9]\+[.][0-9]\+')

DEST_JS := ../ide/bin/templates/scripts/nanofl-$(VERSION).js

.PHONY: build engine node_modules clean

build: node_modules engine ../plugins/bin/filters/StdFiltersPlugin.js
	haxe build.hxml
	npx webpack
	mkdir -p $$(dirname $(DEST_JS))
	cat bin/nanofl-bundle.js ../plugins/bin/filters/StdFiltersPlugin.js > $(DEST_JS)

engine:
	npx symlink-dir ../engine engine

../plugins/bin/filters/StdFiltersPlugin.js:
	make -C ../plugins

node_modules:
	npm ci

clean:
	rm -rf bin/
	rm -f $(DEST_JS)

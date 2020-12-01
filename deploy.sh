#!/bin/bash

cp -r src/mpw/ ./docs/
cp -r src/resources/ ./docs/
cp src/{*.png,*.svg,*.xml,*.ico,manifest.json,working.html,notfound.html} ./docs

if [ -e wuhanstudio.tar.gz ] 
then
	rm wuhanstudio.tar.gz
fi

# tar -czvf wuhanstudio.tar.gz docs/* 


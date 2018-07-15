#!/bin/bash

cp -r src/mpw src/focus ./dist
cp src/{*.png,*.svg,*.xml,*.ico,manifest.json} ./dist

if [ -e wuhanstudio.tar.gz ] 
then
	rm wuhanstudio.tar.gz
fi

tar -czvf wuhanstudio.tar.gz dist/* 


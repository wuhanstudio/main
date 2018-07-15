#!/bin/bash

cp -r src/resources/mpw src/resources/focus ./dist
cp src/{ *.png, *.svg, *.xml, *.ico, *.json } ./dist

if [ -e wuhanstudio.tar.gz ] then
	rm wuhanstudio.tar.gz
fi
	tar -cvf wuhanstudio.tar.gz dist/* 

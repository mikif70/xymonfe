#!/bin/bash

DIR="../xymonfe.exe"

/usr/local/bin/meteor build $DIR --directory

cp start.json "$DIR/bundle"

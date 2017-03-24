#!/bin/bash

path=$(dirname "$1")
filename=$(basename "$1")
extension="${filename##*.}"
filename="${filename%.*}"

avconv -i $1 -filter:v scale=720:-1 -c:a copy  -an $path/$filename.small.$extension

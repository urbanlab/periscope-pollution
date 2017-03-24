#!/bin/bash

path=$(dirname "$1")
filename=$(basename "$1")
extension="${filename##*.}"
filename="${filename%.*}"

die () {
    echo >&2 "$@"
    exit 1
}

# check if opts are here
[ "$#" -eq 1 ] || die "Please provide a video file to compress"

# check if file exists
if [ ! -f $1 ]; then
    die "File '${1}' not found! Please input a valid filename"
fi

avconv -i $1 -filter:v scale=720:-1 -c:a copy  -an $path/$filename.small.$extension

#!/bin/bash

[ ! -d "./output" ] && mkdir "output"
rm -f ./output/*.csv

docker-compose up

echo "Done!"

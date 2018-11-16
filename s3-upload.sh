#!/bin/sh

aws s3 cp . s3://aws-ml-bootcamp/ --recursive  --exclude "*" --include "*.csv"

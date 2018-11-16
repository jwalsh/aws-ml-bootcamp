#!/bin/sh

BUCKET=aws-ml-bootcamp
aws s3api create-bucket --bucket $BUCKET --region us-east-1

aws s3 cp . s3://$BUCKET/ --recursive  --exclude "*" --include "*.csv"

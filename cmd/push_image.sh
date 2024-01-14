#!/usr/bin/env bash

ARTS_AWS_ACC_ID="${1:-$ARTS_AWS_ACC_ID}"
ARTS_AWS_REGION="${2:-$ARTS_AWS_REGION}"
TAG=$ARTS_AWS_ACC_ID.dkr.ecr.$ARTS_AWS_REGION.amazonaws.com/artsense-frontend:1
docker build -t $TAG --platform linux/amd64  .
docker push $TAG
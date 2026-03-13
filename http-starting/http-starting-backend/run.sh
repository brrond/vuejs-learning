#!/bin/sh

podman run --rm --name=mockserver -p 1080:1080 \
  -v $(pwd)/expectations.json:/opt/mockserver/expectations.json \
  -e MOCKSERVER_INITIALIZATION_JSON_PATH=/opt/mockserver/expectations.json \
  mockserver/mockserver \
  -serverPort 1080 \
  -logLevel INFO

#!/bin/bash

export REDIS_CONFIGURE_KEYSPACE_NOTIFICATIONS=1
export REDIS_URL=redis://127.0.0.1:6379
export ROOT_URL='http://xymonfe.tiscali.sys'
#export MAIL_URL='smtp://user:pass@server:port/'
export PRODUCTION='false'
export PORT=8000

meteor run $@

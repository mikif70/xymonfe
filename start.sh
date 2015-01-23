#!/bin/bash

#export MONGO_URL='mongodb://bike:3asycl377a@proximus.modulusmongo.net:27017/zyjo7qAj'
REDIS_CONFIGURE_KEYSPACE_NOTIFICATIONS=1
REDIS_URL=redis://10.39.253.206:6379
export ROOT_URL='http://xymonfe.tiscali.sys'
#export MAIL_URL='smtp://user:pass@server:port/'
export PRODUCTION='false'
export PORT=8000

meteor run $@

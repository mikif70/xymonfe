#!/bin/bash

#export REDIS_CONFIGURE_KEYSPACE_NOTIFICATIONS=1
#export REDIS_URL=redis://10.39.109.78:6379
export MONGO_URL=mongodb://10.39.109.78:27017/xymon
export ROOT_URL='http://noc.monitoring.tiscali.sys'
export PRODUCTION='false'
export PORT=5000

meteor run -p $PORT $@

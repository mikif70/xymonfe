#!/bin/bash

export MONGO_URL=mongodb://10.39.109.78:27017/xymon
export ROOT_URL='http://noc.monitoring.tiscali.sys'
export PORT=5000

node main.js

#!/bin/bash
cd /home/pi/FSSwitchPanel/
git pull
npm prune
npm install
pm2 reload panel
#!/usr/bin/env bash

env=$1

cd /var/www/${env}_deploy
yarn install
yarn build --prod 
cp /var/www/${env}/config.js ./
cd /var/www
mv ./${env} ./${env}_old
mv ./${env}_deploy ./${env}
cd ${env}
pm2 stop ${env}
pm2 start server.js --name="${env}"
cd /var/www ; rm -rf ${env}_old
echo "Well done ! ${env} Start"

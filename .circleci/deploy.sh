#!/usr/bin/env bash

cd /var/www/prod_deploy
yarn install
yarn build --prod 
cp /var/www/prod/config.js ./
cd /var/www
mv ./prod ./prod_old
mv ./prod_deploy ./prod
cd prod
pm2 stop prod
pm2 start server.js --name="prod"
cd /var/www ; rm -rf prod_old
echo "Well done !"

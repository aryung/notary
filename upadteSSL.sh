/root/.acme.sh/acme.sh --issue -w /root/www -d notary40.com --force
/usr/sbin/nginx -s reload

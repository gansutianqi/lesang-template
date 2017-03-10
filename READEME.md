# 乐桑游戏平台模板


## 相关信息
+ 服务器ip`123.56.158.37`
+ 所在目录`home\lesang`
+ 服务器相关软件在`alidata\`目录下
+ 虚拟Vhost
```
<VirtualHost *:80>
	DocumentRoot /home/default
	ServerName localhost
	ServerAlias localhost 127.0.0.1
	<Directory "/home/default">
	    Options Indexes FollowSymLinks
	    AllowOverride all
	    Order allow,deny
	    Deny from all
	</Directory>
</VirtualHost>

<VirtualHost *:80>
	DocumentRoot /home/pigcms
	ServerName www.ledouba.com
	ServerAlias ledouba.com www.tlydwl.com gs820.weihubao.com
	<Directory "/home/pigcms">
	    Options Indexes FollowSymLinks
	    AllowOverride all
	    Order allow,deny
	    Allow from all
	</Directory>
	<IfModule mod_rewrite.c>
		RewriteEngine On
		RewriteRule ^(.*)-htm-(.*)$ .php?
		RewriteRule ^(.*)/simple/([a-z0-9\_]+\.html)$ /simple/index.php?
	</IfModule>
	ErrorLog "/alidata/log/httpd/phpwind-error.log"
	CustomLog "/alidata/log/httpd/phpwind.log" common
</VirtualHost>



<VirtualHost *:80>
	DocumentRoot /home/lesang
	ServerName www.lesang.com
	ServerAlias lesang.com www.lesang.com
	<Directory "/home/lesang">
	    Options Indexes FollowSymLinks
	    AllowOverride all
	    Order allow,deny
	    Allow from all
	</Directory>
</VirtualHost>

``
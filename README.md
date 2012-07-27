TDv3AutoDeploy
==============

1. Setup WebHook URL http://timedoctortest.com:20081/push on GitHub
2. Install Node.JS
3. Install Forever https://github.com/nodejitsu/forever/
4. forever start onPush.js
5. Fix add forever to /etc/rc.local ( << exec sudo -i -u gituser forever start onPush.js )
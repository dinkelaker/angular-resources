# Client-Server Application Template

This project was inherited from the my-app-temaple project.
It adds server component to it.

##Install IP

Ti fix error message:
GET http://localhost:4200/sockjs-node/info?t=1456748942511 net::ERR_CONNECTION_REFUSED

Run ```npm install ip --save-dev ```

And change configuration of Webpack: ```'webpack-dev-server/client?http://' + require("ip").address() + ':9191/',```


##Install ESLint

Run ```npm install -g eslint```


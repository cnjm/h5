# web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### api线上端口
```
8000

pm2 start h5api.js --watch

cd /www/chweb/h5/server

location /h5/api {
    #8000
    proxy_pass http://127.0.0.1:8000;
    root   html;
    index  index.html index.htm;
}

db.auth('adminchweb', 'adminchwebpassword')
db.auth('chweb', 'adminchwebpassword')
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

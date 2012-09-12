var http = require('http')
  , express = require('express')
  , RedisStore = require('connect-redis');
  , app = express();

RedisStore(express);

app.use(express.session({
  store: new RedisStore,
  secret: 'MyLittleSecret'
}));

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(app.router);

// Launch app
var server = http.createServer(app);

server.listen(3000);
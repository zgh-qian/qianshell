const express = require("express");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const morgan = require("morgan");
const cors = require('cors');
const { requestLimit } = require("./constant/index");
const redisClient = require('./db/redis');
const RedisStore = require("connect-redis")(expressSession);
const responseMiddleware = require("./middleware/responseMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");
const router = require("./routes/index");
const userRouter = require("./routes/user");
const translatorRouter = require("./routes/translator");
const musicRouter = require("./routes/music");
const btApiRouter = require("./routes/btApi");

// 创建服务器的实例对象
const app = express();
// 记录 http 日志
app.use(morgan("short"));
// 配置跨域
// app.use(cors());
app.all("*", (req, res, next) => {
  // 开启跨域
  res.setHeader("Access-Control-Allow-Credentials", "true");
  const origin = req.get("Origin");
  // 允许的地址 http://127.0.0.1:9000 这样的格式
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  // 允许跨域请求的方法
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT"
  );
  // 允许跨域请求 header 携带哪些东西
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since"
  );
  next();
});
// 配置解析表单数据
app.use(express.urlencoded({ extended: false, limit: requestLimit }));
// 解析 JSON 格式的请求体
app.use(bodyParser.json({ limit: requestLimit }));
// 设置了 Express 应用的 x-powered-by 头部字段为 false
app.set("x-powered-by", false);
// 使用 Express 和 Redis 存储会话数据
const sessionOptions = {
  // store session存储实例，默认为一个新的 MemoryStore 实例。
  store: new RedisStore({ client: redisClient }), // 只需设置这个就可存储到redis
  name: "session_id", // 默认connect.sid
  secret: "QianShell", // 设置签名秘钥  内容可以任意填写
  resave: false, // 强制保存，如果session没有被修改也要重新保存,默认true(推荐false)
  saveUninitialized: true, // 如果原先没有session那么就设置，否则不设置(推荐true)
  rolling: true, // 每次请求更新有效时长
  cookie: {
    // 全局设置 cookie，就是访问随便 api 就会设置 cookie，也可以在登录的路由下单独设置
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 天后过期
    httpOnly: true, // 是否允许客户端修改 cookie（默认 true 不能被修改）
  },
};
app.use(expressSession(sessionOptions));
// 封装响应函数
app.use(responseMiddleware);
// 请求前缀路径
const contextPath = '/api';
// 导入路由
app.use(contextPath + '/', router);
app.use(contextPath + '/user', userRouter);
app.use(contextPath + '/translator', translatorRouter);
app.use(contextPath + '/music', musicRouter);
app.use(contextPath + '/bt', btApiRouter);
// 导入错误级别的中间件
app.use(errorMiddleware)
// 启动服务器
const port = 9000;
app.listen(port, () => {
  console.log(`api server running at http://127.0.0.1:${port}`)
});

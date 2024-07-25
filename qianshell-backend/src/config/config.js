/**
 * 默认配置
 */
module.exports = {
  redisConfig: {
    host: "localhost",
    port: "6379",
    db: 2,
  },
  // MySQL 配置
  dbConfig: {
    database: "qianshell",
    username: "root",
    password: "123456",
    host: "localhost",
    port: 3306,
  },
  // 百度翻译配置
  baiduFanYiConfig: {
    appid: "",
    key: "",
  },
};

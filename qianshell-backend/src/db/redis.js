const redis = require("redis");
const { redisConfig } = require("../config/getConfig");

// 创建Redis连接配置
const redisClient = redis.createClient(redisConfig);

redisClient.on("connect", function () {
  console.log("Redis client connected");
});

redisClient.on("error", function (e) {
  console.error(e);
});

module.exports = redisClient;
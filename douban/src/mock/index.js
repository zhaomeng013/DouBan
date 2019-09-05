var Mock = require("mockjs");
// 1 首页数据接口
Mock.mock("/index","get",require("./json/index"))

// 2 电影数据接口
Mock.mock("/movie","get",require("./json/movie"))


// 2.1 发现好电影数据接口
Mock.mock("/findMovie","get",require("./json/findMovie"))

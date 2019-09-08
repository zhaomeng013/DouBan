var Mock = require("mockjs");
// 1 首页数据接口
Mock.mock("/index","get",require("./json/index"))

// 2 电影数据接口
Mock.mock("/movie","get",require("./json/movie"))


// 2.1 发现好电影数据接口
Mock.mock("/findMovie","get",require("./json/findMovie"))

// 3 图书数据接口
Mock.mock("/book","get",require("./json/book"))


// 3.1 发现好图书接口
Mock.mock("/goodBook","get",require("./json/goodBook"))
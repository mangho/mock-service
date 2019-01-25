let Mock = require('mockjs');
let Random = Mock.Random;

var newsFn = function () {
    let news = [];
    let images = [1, 2, 3].map(x => Random.image('200x100', Random.color(), Random.word(2, 6)));
    for (let i = 0; i < 12; i++) {
        let tags=  [1, 2, 3].map(x => Random.cword(2, 3));
        let content = Random.cparagraph(0, 10);
        news.push({
            id: i,
            title: Random.cword(8, 20),
            abstract: content.length>29?content.substr(0, 30)+'...':content,
            desc: content,
            tag:  tags.slice(0, Random.integer(1, 3)),
            views: Random.integer(100, 5000),
            images: Random.image('200x' + Random.integer(100, 500), Random.color(), Random.word(2, 6))
            // images: images.slice(0, Random.integer(1, 3))
        })
    }
    
    return news
}
var usersFn = function () {
    let users = [];
    for (let i = 0; i < 24; i++) {
        users.push({
            id: i,
            userId:Random.increment(2000),
            name: Random.cname(),
            province:Random.province(),
            city: Random.city(),
            followers: Random.integer(10, 5000),
            zip: Random.zip(),
            avator: Random.image('160x160', Random.color(), Random.word(2, 6))
        })
    }
    
    return users
}
var news = newsFn();
var userinfo = usersFn();
module.exports = {
    news,userinfo
}
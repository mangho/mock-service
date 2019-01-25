let Mock = require('mockjs');
let Random = Mock.Random;

module.exports = function () {
    let resContent = {
        status: "1",
        msg: "OK",
        errMsg: ""
    }
    let data={news:[]};
    let images = [1, 2, 3].map(x => Random.image('200x100', Random.color(), Random.word(2, 6)));
    for (let i = 0; i < 12; i++) {
        let content = Random.cparagraph(0, 10);
        data.news.push({
            id: i,
            title: Random.cword(8, 20),
            desc: content.substr(0, 40),
            tag: Random.cword(2, 6),
            views: Random.integer(100, 5000),
            images: Random.image('200x' + Random.integer(100, 500), Random.color(), Random.word(2, 6))
            // images: images.slice(0, Random.integer(1, 3))
        })
    }
    // let data={news:Object.assign(resContent,news)}

    return data
}
const axios = require('axios');
// https://api.btstu.cn

const getRandomBackground = async (req, res, next) => {
    // 请求示例 https://api.btstu.cn/sjbz/api.php?lx=dongman&format=images
    const method = "pc";
    const lx = "dongman";
    const format = "json";
    const url = `https://api.btstu.cn/sjbz/api.php?method=${method}lx=${lx}&format=${format}`;
    const result = await axios.get(url).then((res) => res.data);
    res.success(result.imgurl);
}

module.exports = {
    getRandomBackground
}
const MyError = require("../exception/index");
const {
    REQUEST_PARAMS_ERROR_CODE,
    NOT_FOUND_ERROR_CODE,
} = require("../exception/errorCode");
const { searchMusics, playlistDetail } = require('../thirdpart/netEaseCloudMusic');

/**
 * 获取单首音乐
 */
const getSingleMusicApi = async (req, res, next) => {
    const { keywords } = req.query;
    if (!keywords) {
        return next(new MyError(REQUEST_PARAMS_ERROR_CODE, '请输入关键词'));
    }
    const songs = await searchMusics(keywords, 1);
    if (songs.length < 1) {
        return next(new MyError(NOT_FOUND_ERROR_CODE));
    }
    const song = songs[0];
    res.success({
        id: song.id,
        name: song.name,
    })
}

/**
 * 获取歌单详情
 */
const getPlaylistDetailApi = async (req, res, next) => {
    const songs = await playlistDetail();
    if (!songs) {
        return next(new MyError(NOT_FOUND_ERROR_CODE));
    }
    res.success(songs);
}

module.exports = {
    getSingleMusicApi,
    getPlaylistDetailApi,
};

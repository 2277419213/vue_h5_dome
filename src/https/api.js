import request from './request'

export default {
    login(data) {
        return request({
            url: 'url地址',
            method: 'post',
            data
        })
    },
}
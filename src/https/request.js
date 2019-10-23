import axios from 'axios'

// create an axios instance
const service = axios.create({
    baseURL: "地址前缀", // api 的 base_url
    timeout: 5000, //超时时间，5秒
})

service.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    console.log(response)
    return response;
}, function(error) {
    // 对响应错误做点什么
    if (error == 'Error: Request failed with status code 500') {
        console.log("服务器报500")
    } else if (error.includes('timeout')) {
        console.log("请求超时")
    } else if (error == "Error: Network Error") {
        console.log("一般都是跨域问题")
    } else {
        console.log(error)
    }
    return;
});

export default service
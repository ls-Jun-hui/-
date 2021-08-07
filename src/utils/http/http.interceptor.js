const install = (Vue, vm) => {
	// 此为自定义配置参数，具体参数见上方说明
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'https://api-hmugo-web.itheima.net/api/public/v1',
        loadingText: '努力加载中~',
		loadingTime: 800,
		// 设置自定义头部content-type
		// header: {
		// 	'content-type': 'xxx'
		// }
		// ......
	});
}

export default {
	install
}
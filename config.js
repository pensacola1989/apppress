var config = {
	name: 'AppPress',
	description: '',
	version: '0.1.0',
    api_version: '/api/1/',

	site_headers: [
		'<meta name="author" content="aaronchen2k@gmail.com" />',
		'<meta name="description" content="">'
	],
	host: 'localhost', // host 结尾不要添加'/'
	site_logo: '', // default is `name`
	site_navs: [
		// [ path, title, [target=''] ]
		[  ]
	],
	site_static_host: '', // 静态文件存储域名  dbUserName:dbPassword@127.0.0.1:27017/dbName
	db: 'mongodb://localhost/apppress',
	session_secret: 'apppress',
	auth_cookie_name: 'apppress',
	port: 9090,
    
      // 话题列表显示的话题数量
    list_topic_count: 10,
    recent_topic_count: 10,

	mail_port: 25,
	mail_user: '',
	mail_pass: '',
	mail_host: '',
	mail_sender: '',
	mail_use_authentication: true,

	admins: { admin: true },

    modules: [['app','user']],
    components: [],
	plugins: []
};
exports = module.exports = config;

var host = exports.host;
if (host[host.length - 1] === '/') {
	exports.host = host.substring(0, host.length - 1);
}

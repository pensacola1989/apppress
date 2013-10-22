Constant = {
    ApiVer: 'v1',
    WebRoot: 'N/A'
};
if (location.href.indexOf("192.168") > -1) {
    Constant.WebRoot = "http://192.168.1.228:9000/";
} else {
    Constant.WebRoot = "http://56.io/";
}
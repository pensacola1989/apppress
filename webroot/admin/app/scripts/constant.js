Constant = {
    ApiVer: 'v1',
    WebRoot: 'N/A',
    ClientRoot: 'N/A'
};
if (location.href.indexOf("192.168") > -1) {
    Constant.WebRoot = "http://192.168.1.228:9000/";
    if (location.href.indexOf("dist") > -1) {   // build testing
        Constant.ClientRoot = Constant.WebRoot + "dist/client/";
    } else {    // develop
        Constant.ClientRoot = Constant.WebRoot + "client/app/";
    }
} else {    // production
    Constant.WebRoot = "http://56.io/";
    Constant.ClientRoot = Constant.WebRoot + "client/";
}
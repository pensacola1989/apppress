//jQuery.post("/app", {
//    "title": "JavaScript the good parts",
//    "author": "Douglas Crockford",
//    "releaseDate": new Date(2008, 4, 1).getTime()
//}, function(data, textStatus, jqXHR) {
//    console.log("Post response:"); console.dir(data); console.log(textStatus); console.dir(jqXHR);
//});

jQuery.get("/app", function (data, textStatus, jqXHR) {
    console.log("Get resposne:");
    console.dir(data);
    console.log(textStatus);
    console.dir(jqXHR);
});

//jQuery.get("/app/4f95a8cb1baa9b8a1b000006", function (data, textStatus, jqXHR) {
//    console.log("Get resposne:");
//    console.dir(data);
//    console.log(textStatus);
//    console.dir(jqXHR);
//});

//jQuery.ajax({
//    url:"/app/5222a121c69957ac07000003",
//    type:"PUT",
//    data:{
//        "title": "JavaScript The good parts",
//        "author": "The Legendary Douglas Crockford",
//        "releaseDate": new Date(2008, 4, 1).getTime()
//    },
//    success: function(data, textStatus, jqXHR) {
//        console.log("Put resposne:"); console.dir(data); console.log(textStatus); console.dir(jqXHR);
//    }
//});
//
//jQuery.ajax({
//    url:'/app/5222a121c69957ac07000003',
//    type: 'DELETE',
//    success:function(data, textStatus, jqXHR){
//        console.log("Post resposne:");
//        console.dir(data);
//        console.log(textStatus);
//        console.dir(jqXHR);
//    }
//});
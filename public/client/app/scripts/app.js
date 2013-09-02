var ApppressClient = window.ApppressClient = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

jQuery.get("/app", function (data, textStatus, jqXHR) {
    console.log("Get resposne:");
    console.dir(data);
    console.log(textStatus);
    console.dir(jqXHR);
});

jQuery.get("/app/5222a0d49200ae7c1b000002", function (data, textStatus, jqXHR) {
    console.log("Get resposne:");
    console.dir(data);
    console.log(textStatus);
    console.dir(jqXHR);
});

jQuery.ajax({
    url:"/app/5222a0d49200ae7c1b000002",
    type:"PUT",
    data:{
        "title": "JavaScript The good parts",
        "author": "The Legendary Douglas Crockford",
        "releaseDate": new Date(2008, 4, 1).getTime()
    },
    success: function(data, textStatus, jqXHR) {
        console.log("Put resposne:"); console.dir(data); console.log(textStatus); console.dir(jqXHR);
    }
});

jQuery.ajax({
    url:'/app/5222a0d49200ae7c1b000002',
    type: 'DELETE',
    success:function(data, textStatus, jqXHR){
        console.log("Post resposne:");
        console.dir(data);
        console.log(textStatus);
        console.dir(jqXHR);
    }
});
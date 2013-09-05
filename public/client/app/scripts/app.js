var Client = window.Client = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

$.post("/app", {
    "title": "JavaScript the good parts",
    "author": "Douglas Crockford",
    "releaseDate": new Date(2008, 4, 1).getTime()
}, function(data, textStatus, jqXHR) {
    console.log("Save response: "); console.dir(data); //console.log(textStatus); console.dir(jqXHR);

    var id = data.data._id;
    $.get("/app", function (data, textStatus, jqXHR) {
        console.log("Find all resposne: "); console.dir(data); //console.log(textStatus); console.dir(jqXHR);
    });

    $.get("/app/" + id, function (data, textStatus, jqXHR) {
        console.log("Find by id resposne: "); console.dir(data); // console.log(textStatus); console.dir(jqXHR);
    });

    $.ajax({
        url:"/app/" + id,
        type:"PUT",
        data:{
            "title": "JavaScript The good parts",
            "author": "The Legendary Douglas Crockford",
            "releaseDate": new Date(2008, 4, 1).getTime()
        },
        success: function(data, textStatus, jqXHR) {
            console.log("Update resposne:"); console.dir(data); // console.log(textStatus); console.dir(jqXHR);
        }
    });

    $.ajax({
        url:'/app/' + id,
        type: 'DELETE',
        success:function(data, textStatus, jqXHR){
            console.log("delete resposne:"); console.dir(data); //console.log(textStatus); console.dir(jqXHR);
        }
    });
});

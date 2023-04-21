data = {
    "people":[
        {
            "id":"1",
            "name": "John"
        }
    ]
}

var $select = $('#people');

$.getJSON('data.JSON', function(data){
    console.log(data);
});

data = {
    "people":[
        {
            "id":"1",
            "name": "John"
        }
    ]
}

var $select = $('#people');

$.getJSON('data', function(data){
    console.log(data);
});

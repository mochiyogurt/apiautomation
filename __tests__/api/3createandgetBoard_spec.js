const frisby = require('frisby');
var boardid;
var tkey = 'xyz';
var ttoken = 'xyz';


describe('POST then GET', function(){
    it('POST should return a status of 200 OK', function(){
    return frisby
    .post('https://api.trello.com/1/boards/',{
        name: 'My First Board',
        key: tkey,
        token: ttoken
    })
    .expect('status', 200)
    .then(function (res) {
        boardid = res.json.id; //get the response id to pass to the next get request
        console.log("Boardid is "+boardid);

        return frisby.get('https://api.trello.com/1/boards/'+boardid+'?key='+tkey+'&token='+ttoken)
        .expect('status', 200)
        .expect('json', 'id', boardid)
        .expect('json', 'name', 'My First Board')
        .inspectJSON()
    })
    
});

});



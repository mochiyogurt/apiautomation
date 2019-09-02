const frisby = require('frisby')
frisby.globalSetup({
    request: {
        headers:{
            'Content-Type': 'application/json'
        }
    }
})


it('Submit a post get 201 created', function(){
    return frisby
    .post('https://jsonplaceholder.typicode.com/posts',{
        body: JSON.stringify({
            userId: 1,
            title: 'My first post',
            body: 'Learning api with frisby.js'
        })
    })
    .expect('status', 201)
    .expect('json', 'userId', '1')
    .expect('json', 'title', 'My first post')
    .expect('json', 'body', 'Learning api with frisby.js')
    .inspectJSON()
});


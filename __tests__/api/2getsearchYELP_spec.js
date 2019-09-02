const frisby = require('frisby')
frisby.globalSetup({
    request: {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer xyz'
        }
    }
})

it('Get should return 200', function(){
    return frisby
    .get('https://api.yelp.com/v3/businesses/search?term=sushi&location=Irvine,CA')
    .expect('status', 200)
    .expect('json', 'businesses[4].name', 'Taiko')
    .expect('json', 'businesses[4].rating', '4.0')
    .expect('json', 'businesses[4].categories[1].title', 'Sushi Bars')
    .expect('json', 'businesses[4].location.display_address', ["14775 Jeffrey Rd", "Ste K", "Irvine, CA 92618"])

});


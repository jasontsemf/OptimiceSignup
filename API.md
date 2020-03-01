# Sign Up for Optimice API

To get to `index.html`, `GET` the route `/`

You can access the API with the route `/signup`
with `GET` and `POST`

For `POST`ing, the request body should be structure as

``` JSON
{
    "name": "John Doe",
    "email": "jdoe@email.com"
}
```

The response will be like

``` JSON
{
    "description": "A list of people who signed up.",
    "people": [{
        "created": 1582966186911,
        "name": "cindy",
        "email": "cindy@email.com"
    }, {
        "created": 1582966214622,
        "name": "jason",
        "email": "jason@email.com"
    }, {
        "created": 1582966249313,
        "name": "John Doe",
        "email": "jdoe@email.com"
    }]
}
```

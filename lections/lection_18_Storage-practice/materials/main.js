console.log('Lection_18');


console.log(localStorage, sessionStorage);


if (!localStorage.a){
    a = prompt();
    localStorage.a = a;
}

console.log(localStorage.a);


// -------------------

// JSON -- text

var str = `
    {
        "title": "hello",
        "age": 10,
        "isTrue": true,
        "location": {
            "city": "Kiev",
            "country": "Ukraine",
            "postalCode": "04053",
            "streets": [
                "a1",
                "a2"
            ]
        },
        "list": [
            1, 2, 3, "str", false
        ]
    }
`;

 // parse it

 var body = JSON.parse(str);
 console.log(body);

 body.list = [];
 body.location.streets.push('a3');

 // to string

 var newJSON = JSON.stringify(body);
 console.log(newJSON);

 localStorage.data = newJSON;



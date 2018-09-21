console.log('lection_30');


// var foo = /привет шаблон /g;

// //search
// str = `9860 привет шаблон  прШаблоноектированияшабЛон`;
// console.log(str.search(foo));

// match
// var result = str.match(/шаблон/gi);
// console.log(result)

// //match /g
// result = str.match(/шаблон/gi);
// console.log(result);

//split
// console.log('12-34-56_12'.split(/[-_]/g));

// // split examples
// console.log('132sdkf123123alfknadskljfn123'.split(/-/));

//replace
// console.log('12- 34- 56'.replace( /- /g, ":" ));
// -----------------

/*
 - классы и спецсимволы
 - диапазоны
 - квантификаторы +, *, ? и {n}
 - Альтернация
*/

// var str = "Hello wor! How are you! привет мир! 1988 год Как дела? Что делать?  Когда нет ничего в 18 лет."
// // var result = str.match(/\b\w\w\w\b/gi);
// var result = str.match(/\b\w\w\w\s/gi);
// console.log(result)


// -----------------
// . ? [ ] { } & ^ \ /
// var str = "How are you. //99// Hello He!9o! How are you. 99 ! Heplo привет мир! 1988 год Как дела? Что делать?  Когда нет ничего в 18 лет."
// var result = str.match(/How are you\. \/\/\d\d\/\//gi);
// console.log(result)

// ----------------------------

// var str = "Hello Pet+a! Hello Petia! Hello Petra!";
// var result = str.match(/Pet[^r]a/gi);
// console.log(result);

// ----------------------------

// var str = "Hello Ivan! Hello Ivan Hello Ivan?";
// var result = str.match(/Hello Ivan[!.]?/gi);
// console.log(result);

// ----------------------------

// var str = "123 s123 hello 12.5 rhello 2 rrhello 23 rrrhelllllllloooo";
// // var result = str.match(/[0-9.]+/gi);
// var result = str.match(/r{2,4}hell+o/gi);
// console.log(result);

// ----------------------------

// var str = "homahomahoma123 homa123";
// var result = str.match(/[0-9.]+/gi);
// var result = str.match(/(homa){2}[\w\d]+\b/gi);
// var result = str.replace(/(homahoma)(.+)\b/g,"$2");
// console.log(result);

// ----------------------------


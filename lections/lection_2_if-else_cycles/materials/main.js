console.log("Lection_2");


// ===
// x = true;
// y = 1;
// console.log('x = ', x, ' ', 'y = ', y);
// console.log('x == y', x == y);
// console.log('x === y', x === y);




// --------------------------------

// x = +prompt();
// y = 20;

// if (x > 0){
//     // true
//     console.log('x > 0 and x = ' + x);
//     y = y + x;
// }
// // false

// console.log('Hello!', y);



// --------------------------------

// x = 10;

// // '', 0, false, NaN -> false

// state = x > 0;

// if (state) {
//     console.log('x > 0 and x = ' + x);
// }

// --------------------------------
// x = 20;

// if (x > 0) {
//     console.log('x > 0 and x = ' + x);
// } else {
//     console.log('x <= 0 and x =' + x);
// } 

// --------------------------------

// x = 0;
// y = 40;
// // zz = !!x;


// if (!x) {
//     x = +prompt();
// }
// bla = x == -4 || 
//     (x != 5 && x < y);
// if (bla)  {
//     console.log('foo ', x);
// }

// --------------------------------

// циклы

i = 0; // счетчик

while ( i <= 10 ) {
    i = i + 1;

    // do it
    if (i % 2 == 0) {
        // console.log(i);
    }
}
// console.log('LAST', i);

// -----------------

// i = 200; // счетчик

// do {
//     console.log(i);

//     i = i + 1;
// } while ( i <= 10 )

// console.log('LAST', i);

// -----------------

// step = 1;
// for (i = 0, j = 0; i < 40; i += step){
//     if (i % 2 != 0) {
//         console.log(i);
//     }

//     if (i % 5 == 0) {
//         j++;
//     }
// }

// console.log(j);

// -----------------

// x = 12;
// console.log( '5+3*( x++ - 4 )',  5+3*( x++ - 4 )  );
// console.log(x);

// x = 12;
// console.log( '5+3*( ++x - 4 )', 5+3*( ++x - 4 )  );
// console.log(x);

// -----------------


// a = +prompt();
// b = +prompt();

a = 10;
b = 153;

for (i = a; i <= b; i++) {
    if (i % 2 == 0){
        console.log(i*i);
    }
}

// -----------------

a = 11;
b = 153;

if (a % 2 != 0) {
    i = a + 1;
}
else {
    i = a;
}
for (; i <= b; i += 2) {
    console.log(i*i);
}

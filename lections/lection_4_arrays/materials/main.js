console.log('Lection_4');

// A = [1, 2, -7, 8, 'yguhij'];
// console.log(A);

// A[200] = false;
// A.length = 3;

// console.log(A.length);

// for (i = 0; i < A.length; i++) {
//     if (A[i] >= 0){
        // console.log('i=', i, '___', 'A[i]=', A[i]);
//     }
// }

// -------------------

// !

// continue; break;

// arr = [];

// do {
//     x = prompt();

//     if (x === '!'){
//         break;
//     }

//     x = +x;
//     if (isNaN(x)) {
//         console.error('no a number');

//         continue;
//     }

//     arr[arr.length] = x;
// } while(true);

// console.log(arr);


// for (i = 0; i < arr.length; i++){
//     fact = 1;
//     // n = arr[i];

//     for (j = 1; j <= arr[i]; j++) {
//         fact *= j;
//     }

//     console.log(arr[i] + '! = ' + fact);
// }

// ------------------------

// arr = [];
// arr.length = 15;

// arr2 = new Array(); // []
// arr3 = new Array(15); // arr3.length = 15;
// arr4 = new Array(2, 8, 5, 3); // [2, 8, 5, 3]


// ------------------------

arr = [];
arr.length = +prompt();
min = -100;
max = 125

for (i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random()*(max - min)) + min;

    res = arr[i] < 0 ? -arr[i] : arr[i];
    res = Math.floor(res / 10);

    if (res > 0 && res < 10){
        console.log(arr[i]);
    }
}

// x = Math.floor(Math.random()*(max - min)) + min;

console.log(arr);




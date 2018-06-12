console.log('Lection_5');

n = 50;
m = 50;
k = 16;
r = 9;

center = Math.ceil(n / 2) - 1;
x = center;
y = center;

var arr = new Array(n);
// fill
for (i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);

    for(j = 0; j < arr[i].length; j++){
        // arr[i][j] = Math.floor(Math.random()*10);

        // expression = i + j >= n - 1 && j <= center;

        // expression = i <= j && i <= center // A
        // expression =  i <= j && i >= center && i <= k // B
        // expression = i >= j && i >= center/2 && i <= center + center/2 + 1 && i + j <= n - 1 // c

        // expression = (i <= j && i + j <= n - 1) || (i >= j && i + j >= n - 1) // D

        expression =  Math.pow(i - x, 2) + Math.pow(j - y, 2) == r*r; // КРУГ

        if(expression) {
            arr[i][j] = '1 '; 
        } else {
            arr[i][j] = '0 ';
        }

        document.write(arr[i][j]);
    }

    document.write('<br />'); 
}

// render
// for( i = 0; i < arr.length; i++){
//     for(j = 0; j < arr[i].length; j++){
//         // console.log(arr[i][j]);

//         // if(i == j) {
//         //     arr[i][j] = 'x'; 
//         // }

//         // if(i + j == n - 1) {
//         //     arr[i][j] = 'x'; 
//         // }

//         // if( j == k ) {
//         //     arr[i][j] = 'x'; 
//         // }

//         // if( i > j ) {
//         //     arr[i][j] = 'x'; 
//         // }

//         // if( i + j > n - 1 ) {
//         //     arr[i][j] = 'x'; 
//         // }

//         if( i + j >= n - 1 && j <= center ) {
//             arr[i][j] = '_'; 
//         }


//         document.write(arr[i][j] + ' ');
//     }

//     document.write('<br />');
// }

// for( i = 0; i < arr.length; i++){
//     // console.log(arr[i]);
//     // inner = arr[i];
//     for(j = 0; j < arr[i].length; j++){
//         console.log(arr[i][j]);
//     }
// }

// ------------------

// min = arr[0][0];
// for( i = 0; i < arr.length; i++){
//     for(j = 0; j < arr[i].length; j++){
//         if (arr[i][j] < min) {
//             min = arr[i][j];
//         }
//     }
// }


// ------------------


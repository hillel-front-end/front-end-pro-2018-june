console.log('lection_3');

// ------------------
// a = 3;
// b = 27;
// odd = even = '';
// console.log(even)
// for(i = a; i<=b; i++){
//     if (i % 2 == 0) {
//         odd += i + '_';
//     } else {
//         even += i + '_';
//     }
// }

// console.log(even)

// document.write('<table border="1">');
// document.write('<tr><td>'+even+'</td></tr><tr><td>'+odd+'</td></tr>');
// document.write('</table>');

// --------------------------

// var flag=true;

// do {
//     x = +prompt();
//     y = +prompt();

//     flag = isNaN(x) || isNaN(y);
//     if (flag) {
//         console.error('invalid values');
//     }
// } while(flag);

// sum = 0;
// if (x <= y) {
//     for(i = x; i <= y; i++){
//         if (i % 2 != 0) {
//             sum += i;
//         }
//     }
// } else {
//     for(i = x; i >= y; i--){
//         if (i % 2 == 0) {
//             sum += i;
//         }
//     }
// }

// console.log(sum);


// --------------------------



// x = -10;
// y = 23;
// data = 4;

// for (i = x; i <= y; i++) {
//     if (i >= data - 5 && i <= data + 5)
//         console.log(i);
// }


// ---------------------


// document.write('*a b&nbsp;&nbsp;&nbsp;&nbsp;c');


n = 23;
m = 45;

separator = "*";
space = "&nbsp;";

full = line = '';

for (i = 1; i <= m; i++) {
    full += separator;

    if (i == 1 || i == m) {
        line += separator
    }
    else {
        line += space;
    }
}

document.write(full + "<br />");
for (i = 2; i < n; i++){
    document.write(line + "<br />");
}
document.write(full + "<br />");

// version 2
document.write("<hr />");
for (i = 1; i <= n; i++) {
    for(j = 1; j <= m; j++){
        if (i == 1 || i == n || j == 1 || j == m){
            document.write(separator);
        } else {
            document.write(space);
        }
    }

    document.write("<br />");
}
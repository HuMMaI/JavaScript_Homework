//Task 1
//function getMaxNumber(){
//    if (!arguments || arguments.length < 3 || arguments.length > 4){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    let max = arguments[0];
//    
//    for (let i = 1; i < arguments.length; i++){
//        if (arguments[i] > max){
//            max = arguments[i];
//        }
//    }
//    
//    return max;
//}
//
//console.log('Max = ' + getMaxNumber(5, -2, 10));
//console.log('Max = ' + getMaxNumber(5, -2, 30, 6));

//Task 2
//function geomProg(n, q){
//    if (!n || !q){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    let arr = [1];
//    
//    for (let i = 1; i < n; i++){
//        arr[i] = arr[i - 1] * q;
//    }
//    
//    return arr;
//}
//
//function firstMethod(arr){
//    if (!arr){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    let sum = 0;
//    
//    for (let i = 0; i < arr.length; i++){
//        sum += arr[i];
//    }
//    
//    return sum;
//}
//
//function secondMethod(arr, n, q){
//    if (!arr || !n || !q){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    let sum = arr[0] * ((1 - Math.pow(q, n)) / (1 - q));
//    
//    return sum;
//}
//
//let n = +prompt('Введіть кількість елементів прогресії:');
//let q = +prompt('Введіть знаменник прогресії:');
//let result = geomProg(n, q);
//console.log(firstMethod(result));
//console.log(secondMethod(result, n, q));

//Task 3
//function outputNumbers(arg1, arg2){
//    if (!arg1 || !arg2){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    if (arg1 > arg2){
//        let buff = arg1;
//        arg1 = arg2;
//        arg2 = buff;
//    }
//    
//    for (let i = arg1; i <= arg2; i++){
//        if (numChecker(i) != false){
//            console.log(i);
//        }
//    }
//}
//
//function numChecker(number){
//    if (!number){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    if (number == 1){
//        return false;
//    }
//    
//    for (let i = 2; i < number; i++){
//        if (number % i == 0){
//            return false;
//        }
//    }
//}
//
//let arg1 = +prompt('Enter first range argument:');
//let arg2 = +prompt('Enter second range argument:');
//outputNumbers(arg1, arg2);
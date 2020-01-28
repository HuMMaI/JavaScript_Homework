//Task 1
//function getArgumentsLength(){
//    return arguments.length;
//}
//
//console.log(getArgumentsLength(1, 3, 4));
//console.log(getArgumentsLength());

//Task 2
//function getMinNumber(){
//    if (!arguments || arguments.length < 2){
//        console.error('Must be at least 2 numbers');
//        return;
//    }
//    
//    let min = arguments[0];
//    
//    for (let i = 1; i < arguments.length; i++){
//        if (arguments[i] < min){
//            min = arguments[i];
//        }
//    }
//    
//    return min;
//}
//
//console.log(getMinNumber(2, 5, 4, -1));
//console.log(getMinNumber(1));

//Task 3
//function getMaxNumber(){
//    if (!arguments || arguments.length < 2){
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
//console.log(getMaxNumber(2, 6));
//console.log(getMaxNumber(1));

//Task 4
//function luckyTicket(){
//    if (!arguments || arguments.length < 8 || arguments.length > 8){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    let sum1 = 0;
//    let sum2 = 0;
//    for (let i = 0; i < 8; i++){
//        if (i < 4){
//            sum1 += arguments[i];
//        } else {
//            sum2 += arguments[i];
//        }
//    }
//    
//    if (sum1 === sum2){
//        return true;
//    }
//    
//    return false;
//}
//
//console.log(luckyTicket(0,2,2,4,1,1,2,4));
//console.log(luckyTicket(1,2,3,4,2,2,2,4));
//console.log(luckyTicket(1,2,3,4,5,6,4));

//Task 5
//function myFunc(){
//    if (arguments.length === 0){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    let arr1 = [];
//    let arr2 = [];
//    
//    for (let i = 0, j = 0, k = 0; i < arguments.length; i++){
//        if (arguments[i] >= 0){
//            arr1[j] = arguments[i];
//            j++;
//        } else {
//            arr2[k] = arguments[i];
//            k++;
//        }
//    }
//    
//    document.write('Додатні числа = [' + arr1 + ']; кількість чисел = ' + arr1.length + ' | ');
//    document.write('Від\'ємні числа = [' + arr2 + ']; кількість чисел = ' + arr2.length);
//}
//
//myFunc(1,-5,2,5);
//Task 1
//let arr = [2, 3, 5, 10];
//
//function firstSum(arr){
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
//let secondSum = arr.reduce((sum, item) => sum + item, 0);
//
//console.log('First method = ' + firstSum(arr));
//console.log('Second method = ' + secondSum);

//Task 2
//let arr = [2, 3, 4, 5, 10, 11, 12, 13];
//let arr2 = arr;
//let arrToPaste = [6, 7, 8, 9];
//
//let position = +prompt('Enter the position to insert:');
//
//function firstInsertToArray(arr, arrToPaste, position){
//    if (!arr || !arrToPaste){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    for (let i = position + 1, k = 0; i < arrToPaste.length + position + 1; i++, k++){
//        let buff = arr[i];
//        arr[i] = arr[i - 1];
//        
//        for (let j = i + 1; j < arr.length; j++){
//            let buff2 = arr[j];
//            arr[j] = buff;
//            buff = buff2;
//        }
//        
//        arr[arr.length] = buff;
//        arr[i - 1] = arrToPaste[k];
//    }
//    
//    return arr;
//}
//
//let secondInsertToArray = arr2.splice(position, 0, arrToPaste);
//console.log('First method = ' + firstInsertToArray(arr, arrToPaste, position));
//console.log('Second method = ' + arr2);

//Task 3
//let arr = [1, 2, 3, 4, 5, 6];
//let element = +prompt('Enter element:');
//
//function firstElementChecker(arr, element){
//    if (!arr || !element){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    let index = 0;
//    
//    for (let i = 0; i < arr.length; i++){
//        if (arr[i] === element){
//            index = i;
//            break;
//        } else {
//            index = -1;
//        }
//    }
//    
//    if (index === -1){
//        return 'Такого елементу немає';
//    }
//    
//    return index;
//}
//
//let secondElementChecker = (arr, element) => {
//    let index = arr.indexOf(element);
//    
//    if (index === -1){
//        return 'Такого елементу немає';
//    }  
//    
//    return index;
//};
//
//console.log('First method = ' + firstElementChecker(arr, element));
//console.log('Second method = ' + secondElementChecker(arr, element));

//Task 4
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//let condition = +prompt('Enter element:');
//
//function firstArrayFilter(arr, condition){
//    let filteredArr = [];
//    
//    for (let i = 0, j = 0; i < arr.length; i++){
//        if (arr[i] > condition){
//            filteredArr[j] = arr[i];
//            j++;
//        }
//    }
//    
//    return filteredArr;
//}
//
//let secondArrayFilter = arr.filter(item => item > condition);
//
//console.log('First method = ' + firstArrayFilter(arr, condition));
//console.log('Second method = ' + secondArrayFilter);

//Task 5
//let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3];
//
//function uniqueElements(arr){
//    let uniqueArr = [];
//    
//    for (let i = 0, k = 0; i < arr.length; i++){
//        let checker = true;
//   
//        for (let j = 0; j < arr.length; j++){
//            if (arr[i] === arr[j] && i != j){
//                checker = false;
//                break;
//            }
//        }
//        
//        if (checker){
//            uniqueArr[k] = arr[i];
//            k++;
//        }
//    }
//    
//    return uniqueArr;
//}
//
//console.log('Result = ' + uniqueElements(arr));
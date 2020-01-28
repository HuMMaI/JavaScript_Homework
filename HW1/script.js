//Task 1
//function pow(number, degree){
//    if (!number || degree == null){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    if (degree === 0){
//        return 1;
//    }
//    
//    let result = number;
//    
//    for (let i = 1; i < Math.abs(degree); i++){
//        result *= number;
//    }
//    
//    if (degree < 0){
//        result = 1 / result;
//    }
//        
//    return result;
//}
//
//let number = +prompt('Enter number:');
//let degree = +prompt('Enter degree:');
//
//console.log(pow(number, degree));

//Task 2
//function ageChecker(age){
//    if (!age){
//       console.error('Error receiving arguments'); 
//        return;
//    }
//    
//    if (age >= 18){
//        alert('Доступ дозволено!');
//    } else {
//        let accessConfirm = confirm('Батьки дозволили?');
//        
//        if (accessConfirm){
//            alert('Доступ дозволено!');
//        } else {
//            alert('У доступі відмовлено!');
//        }
//    }
//}
//
//let age = +prompt('Enter age:');
//ageChecker(age);

//Task 3
//function numChecker(number){
//    if (!number){
//        console.error('Error receiving arguments');
//        return;
//    }
//    
//    if (number === 1){
//        return 'Ні просте, ні не просте.';
//    }
//    
//    for (let i = 2; i < number; i++){
//        if (number % i === 0){
//            return false;
//        }
//    }
//    
//    return true;
//}
//
//let number = +prompt('Enter number:');
//console.log(numChecker(number));
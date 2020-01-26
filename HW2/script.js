let attempt = 5;
let password;

while (attempt != 0){
    password = prompt('Enter password:');
    
    if (password != 'password'){
        alert('Wrong password!\nAttempts left: ' + --attempt);
    }
    
    if (attempt == 0){
        alert('Please, try again later!');
    }
    
    if (password == 'password'){
        alert('Welcome!');
        attempt = 0;
    }
}
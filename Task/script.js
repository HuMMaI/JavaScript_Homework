window.onload = function(){
    let person = new Object();
    let fName = document.getElementById('fieldFirstName');
    let sName = document.getElementById('fieldSecondName');
    let em = document.getElementById('fieldEmail');
    let genderMan = document.getElementById('btnMan');
    let genderWoman = document.getElementById('btnWoman');
    let pos = document.getElementById('position');
    let checkBox = document.getElementById('check');
    let button = document.getElementById('btn');
    
    showSignForm();    
    
    document.getElementById('btn').onclick = function(){
        let checker = false;
        
        if (fName.value == ''){
            colorChanger(fName);
            checker = true;
        } 
        
        if (sName.value == ''){
            colorChanger(sName);
            checker = true;
        }
        
        if (em.value == ''){
            colorChanger(em);
            checker = true;
        }
        
        if (!genderMan.checked && !genderWoman.checked){
            checker = true;
        }
        
        if (pos.value == pos.children[0].value){
            colorChanger(pos);
            checker = true;
        }
        
        if (checker){
            alert('Fill in all the fields!');
            return;
        }
        
        person.firstName = fName.value;
        person.secondName = sName.value;
        person.email = em.value;
        
        if (genderMan.checked){
            person.gender = genderMan.value;
        } else if (genderWoman.checked){
            person.gender = genderWoman.value;
        }
        
        person.position = pos.value;
        
        showProfile(person);
    }
    
    document.getElementById('btnSignOut').onmousedown = function(){
        document.getElementById('btnSignOut').style.backgroundColor = '#008309';
        document.getElementById('btnSignOut').style.color = 'white';
    }
    
    document.getElementById('btnSignOut').onmouseup = function(){
        document.getElementById('btnSignOut').style.backgroundColor = 'white';
        document.getElementById('btnSignOut').style.color = '#008309';
    }
    
    document.getElementById('btnSignOut').onclick = function(){
        fName.value = '';
        sName.value = '';
        em.value = '';
        genderMan.checked = false;
        genderWoman.checked = false;
        pos.value = pos.children[0].value;
        checkBox.checked = false;
        
        showSignForm();
    }
}

function colorChanger(element){
    element.style.borderColor = 'red';
}

function inputChanger(element){
    element.style.borderColor = '#c9c9c9';
}

function showProfile(obj){
    document.getElementsByClassName('main')[0].style.display = 'none';
    document.getElementsByClassName('account')[0].style.display = 'flex';
    document.getElementsByClassName('info')[0].style.display = 'flex';

    
    if (obj['gender'] == 'man'){
        document.getElementById('profileLogo').src = 'profilePicture.png';
    } else if (obj['gender'] == 'woman'){
        document.getElementById('profileLogo').src = 'profileWomanLogo.jpg';
    }
    
    document.getElementById('nameBlock').innerHTML = obj['firstName'] + ' ' + obj['secondName'];
    document.getElementById('mailBlock').innerHTML = obj['email'];
    document.getElementById('posBlock').innerHTML = obj['position'];
    
    document.getElementsByClassName('info')[0].style.fontSize = '1.1em';
}

function showSignForm(obj){
    document.getElementsByClassName('account')[0].style.display = 'none';
    document.getElementsByClassName('info')[0].style.display = 'none';
    
    document.getElementsByClassName('main')[0].style.display = 'block';
}
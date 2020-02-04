window.onload = function(){
    let box = document.getElementById('box');
    box.style.fontSize = '2em';
    box.style.textAlign = 'center';
    boxMouseOut(box);
    
    box.onmouseover = function(){
        boxMouseOver(box);
    }
    
    box.onmousedown = function(){
        boxMouseDown(box);
    }
    
    box.onmouseout = function(){
        boxMouseOut(box);
    }
    
    box.onmouseup = function(){
        boxMouseOver(box);
    }
}
    
function boxMouseOver(box){
    box.style.backgroundColor = 'yellow';
    box.style.borderColor = 'green';
    box.innerHTML = 'Хочеш знати який?';
    box.style.color = 'blue';
}

function boxMouseOut(box){
    box.innerHTML = 'У мене є секрет!';
    box.style.backgroundColor = 'darkviolet';
    box.style.borderColor = 'orange';
    box.style.color = 'blue';
}

function boxMouseDown(box){
    box.innerHTML = 'А я тобі не скажу!';
    box.style.backgroundColor = 'black';
    box.style.borderColor = 'yellow';
    box.style.color = 'white';
}
let counter = 0;

document.getElementById('box').onmouseover = function(event){
    let colors = ['red', 'yellow', 'green'];
    
    if (counter > 2){
        counter = 0;
    }
    
    document.getElementById('box').style.backgroundColor = colors[counter];
    counter++;
}

document.getElementById('box').onmouseout = function(event){
    document.getElementById('box').style.backgroundColor = 'darkviolet';
}
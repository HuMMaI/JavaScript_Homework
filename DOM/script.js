window.onload = function() {
    let colors = ['green', 'yellow', 'blue', 'red', 'pink'];
    let items = '';
    for (let i = 0; i < colors.length; i++){
        items += (i + 1) + '. ' + colors[i] + '\n';
    }
    
    let txt = 'Enter page background color:\n' + items;
    let bodyColor = +prompt(txt);
    
    document.body.style.backgroundColor = colors[bodyColor - 1] || 'white';
    
    let fontType = +prompt('Enter font type:\n1.Serif\n2.Sans-serif\n3.Cursive\n4.Fantasy\n5.Monospace');
    
    switch (fontType){
        case 1:
            document.body.style.fontFamily = 'serif';
            break;
            
        case 2:
            document.body.style.fontFamily = 'sans-serif';
            break;
            
        case 3:
            document.body.style.fontFamily = 'cursive';
            break;
            
        case 4:
            document.body.style.fontFamily = 'fantasy';
            break;
            
        case 5:
            document.body.style.fontFamily = 'monospace';
            break;
            
        default:
            document.body.style.fontFamily = 'serif';
            break;
    }

    
    let hAlign = +prompt('Choose how to align h1:\n1.Left;\n2.Right;\n3.Center.');
    
    switch(hAlign){
        case 1:
            document.getElementById('title').style.textAlign = 'left'; break;
            
        case 2:
            document.getElementById('title').style.textAlign = 'right';
            break;
            
        case 3:
            document.getElementById('title').style.textAlign = 'center';
            break;
            
        default:
            document.getElementById('title').style.textAlign = 'left'; break;
    }
    
    txt = 'Enter p background color:\n' + items;
    let pColor = +prompt(txt);
    
    document.getElementById('links').style.backgroundColor = colors[pColor - 1] || 'white';
    
    txt = 'Enter p text color:\n' + items;
    let pTextColor = +prompt(txt);
    
    document.getElementById('links').style.color = colors[pTextColor - 1] || 'black';
    
    txt = 'Enter link color:\n' + items;
    let a = document.getElementById('links').children;
    
    for (let i = 0; i < a.length; i++){
        let aColor = +prompt(txt); 
        a[i].style.color = colors[aColor - 1] || 'blue';
    }
    
    txt = 'Enter text color in div:\n' + items;
    let textColor = +prompt(txt);
    
    document.getElementById('box').style.color = colors[textColor - 1] || 'black';
    
    txt = 'Enter text size in div(em):';
    let textSize = +prompt(txt);
    
    document.getElementById('box').style.fontSize = textSize + 'em';
    
    txt = 'Enter text weight in div(100-900):';
    let textWeight = +prompt(txt);
    
    document.getElementById('box').style.fontWeight = textWeight || '100';
    
    txt = 'Enter list marker:\n1.Circle\n2.Disc\n3.Square';
    let markerType = +prompt(txt);
    
    switch (markerType){
        case 1:
            document.getElementById('list').style.listStyleType = 'circle';
            break;
            
        case 2:
            document.getElementById('list').style.listStyleType = 'disc';
            break;
            
        case 3:
            document.getElementById('list').style.listStyleType = 'square';
            break;
            
        default:
            document.getElementById('list').style.listStyleType = 'disc';
            break;
    }
    
    for (let i = 0; i < a.length; i++){
        let link = prompt('Enter link:');
        a[i].href = 'https://' + link;
        a[i].innerHTML = link;
    }    
}

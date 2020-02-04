window.onload = function(){
    let divs = document.getElementsByTagName('div');
    
    for (let i = 0; i < 3; i++){
        let link = prompt('Enter picture link:');
        
        divs[i].children[0].src = link;
    }
}
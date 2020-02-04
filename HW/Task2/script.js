window.onload = function() {
    let li = document.getElementById('list').children;

    for (let i = 0; i < 7; i++){
        alert(li[i].innerHTML);
        
        li[i].style.backgroundColor = li[i].innerHTML.toLowerCase();
    }
}
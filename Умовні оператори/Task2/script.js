let name = prompt('Ім\'я користувача:');

if (name == 'Ім\'я') {
    let password = prompt('Пароль:');
    
    if (password == 'ЛОГОС') {
        alert('Ласкаво просимо!');
    } else if (password == null) {
        alert('Вхід скасований!');
    } else {
        alert('Пароль невірний!');
    }
} else if (name == null) {
    alert('Вхід скасований!');
} else {
    alert('Я вас не знаю!');
}
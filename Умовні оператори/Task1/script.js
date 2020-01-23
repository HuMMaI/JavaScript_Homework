let points = 0;

let question = +prompt('1.Скільки буде 2^5:');
if (question == 32) {
    points++;
}

question = prompt('2.Столиця Японії:');
if (question.toLowerCase() == 'токіо') {
    points++;
}

question = +prompt('3.Рік проголошення незалежності України:');
if (question == 1991){
    points++;
}

question = +prompt('4.Скільки областей в Україні:');
if (question == 24) {
    points++;
}

question = +prompt('5.Скільки континентів на планеті:');
if (question == 7) {
    points++;
}

question = prompt('6.Найбільший океан на планеті:');
if (question.toLowerCase() == 'тихий') {
    points++;
}

question = prompt('7.Найближча до Сонця планета:');
if (question.toLowerCase() == 'меркурій') {
    points++;
}

question = +prompt('8.За скільки днів Земля робить повний оберт навколо Сонця:');
if (question == 365) {
    points++;
}

question = prompt('9.Найхолодніший материк на планеті:');
if (question.toLowerCase() == 'антарктида'){
    points++;
}

question = +prompt('10.Розв\'язавати рівняння 2x/8+1=9:');
if (question == 32) {
    points++;
}

let result = 'Ви набрали: ' + points + '/10' + '\nВаш рівень знань: ';
if (points >= 0 && points <= 4) {
    result += 'низький.';
} else if (points > 4 && points <= 8) {
    result += 'середній.';
} else {
    result += 'високий.';
}

alert(result);
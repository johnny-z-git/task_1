
// написать программу "конвертер чисел". Пользователь вводит число от 1 до 9, 
// программа должна сконвертировать это число в римское. Например: 2 -> II, 5 -> V и т.д.

const romanNumbers = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

while (true) {
    let input = prompt('Введите число от 1 до 9:');


    if (input === null) {
        alert('Ввод отменен.');
        break;
    }

    let number = Number(input);


    if (Number.isInteger(number) && number >= 1 && number <= 9) {
        let roman = romanNumbers[number];
        document.writeln(`Число ${number} в римской системе: ${roman}`);
        break; // Завершаем цикл 
    } else {
        alert('Ошибка! Пожалуйста, введите корректное число от 1 до 9.');
    }
}

// Написать программу которая спрашивает у пользователя 2 числа(через prompt) и выводит в консоль какое больше. 
// Если числа равны, то вывести что они равны.

let number_1 = Number(prompt('Введите первое число:'));

let number_2 = Number(prompt('Введите второ число:'));



    if (number_1 > number_2){
        document.writeln(`Число ${number_1} больше!`);
    }else if (number_2 > number_1){
        document.writeln(`Число ${number_2} больше!`);  
    }else if (number_2 == number_1){
        document.writeln(`Числа равны!`);
    };





//скрипт размещает корабль
var randomLoc=Math.floor(Math.random()*5);
var location1=randomLoc;
var location2=location1+1;
var location3=location2+1;
var guess;
var hits=0;
var guesses=0;
var isSunk=false;
var guess_mas=[];
//повторяем действия:запрос у пользователя координат, сравнение с положением коробля
while(isSunk==false){
    guess=prompt("Привет! Это мини-игра морской бой. Представь, что в 7-ми ячейках по горизонтали (от 0 до 6) расположен 3-ёх палубный корабль врага. Твоя задача потопить его за наименьшее количество попыток. Твой ход! (введи целое число от 0 до 6):");
    if (guess<0 || guess>6 || guess.replace (/\d/g,'').length){
        alert("Пожалуйста, введи целое число от 0 до 6");
    } else if (guess==location1 || guess==location2 || guess==location3){
        if (guess_mas.includes(guess)) {
            alert("В эту клетку ты уже стрелял!");
            guesses=guesses+1;
        }else {
            guess_mas.push(guess);
            alert("Попал!");
            hits=hits+1;
            guesses=guesses+1;           
            }
            if (hits==3){
                isSunk=true;
                alert("Корабль потоплен!");
            }
    } else {
            alert("Мимо!");
            guesses=guesses+1;
        }
} 
//игра окончена, выводим оценку
var stats="Ты справился за "+ guesses +" попыток. Твоя точность равна " + (3/guesses);
alert(stats);

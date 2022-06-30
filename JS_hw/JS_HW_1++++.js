/*HW_1* 
Задания с разным количеством звездочек:

1*:
Преобразовать написанный код в 27-33 пунктах в функцию, принимающую на вход возраст.
          (Создать переменные age_1,“age_2”, age_3
          Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less than necessary”
          Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
          Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
          Иначе выводите “Technical work".)
Вывести в консоль результат работы функции с возрастами 17, 18, 61
*/

/*

let age_1 = 17
let age_2 = 18
let age_3 = 61

const checkAge = function(age_1){

if (age_1 < age_2) {
    console.log('You don’t have access cause your age is', age_1, 'It’s less than necessary' );
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log('Welcome !');
} else if (age_1 > age_3) {
    console.log ('Keep calm and look Culture channel');
} else {
    console.log('Technical work');
}
}
checkAge(17)
checkAge(18)
checkAge(62)
checkAge(61)

*/

//2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

/*

let age_1 = 17
let age_2 = 18
let age_3 = 61

const checkAge = function(age_1){
if (typeof age_1 == 'number'){
    if (age_1 < age_2) {
        console.log('You don’t have access cause your age is', age_1, 'It’s less than necessary' );
     } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome !');
     } else if (age_1 > age_3) {
        console.log ('Keep calm and look Culture channel');
     } else {
        console.log('Technical work');
     }
} else console.log('ERROR!!!')
}


checkAge(17)
checkAge(18)
checkAge(62)
checkAge('61')
checkAge('aaaaa')

*/

// 3**: Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number


/*

let age_1 = 17
let age_2 = 18
let age_3 = 61

const checkAge = function(age_1){
    console.log(age_1)
if (age_1 && !isNaN(age_1)) {
    if (age_1 < age_2) {
        console.log('You don’t have access cause your age is', age_1, 'It’s less than necessary' );
     } else if (age_1 >= age_2 && age_1 < age_3) {
        console.log('Welcome !');
     } else if (age_1 > age_3) {
        console.log ('Keep calm and look Culture channel');
     } else {
        console.log('Technical work');
     }
} else console.log('ERROR!!!')
}

checkAge(17)
checkAge(18)
checkAge(62)
checkAge('61') 
checkAge('aaaaa')
checkAge('0')
checkAge('')

*/

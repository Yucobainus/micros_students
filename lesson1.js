<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson 2</title>
</head>

<body>



    <script>

        //let a,b,c,d,e //Множественное декларирование переменных
        // a = 2;
        // b = 3
        // console.log(a,b,e)


        //Всплывающие (модальные) окна

        // alert("Hello!")
        // let action = confirm("Данные не будут сохранены, хотите ли вы подтвердить переход со страницы?")
        // console.log(action)
        // let info = prompt("Введите ваш возраст",23)
        // console.log(info)


        // for(i=0; i<10; i++)
        //     console.log(i)
        // if аналогичен

        // function square(x){
        //     return x*test
        // }

        // function makeEngine(obj){
        //     obj.engine = "V6"
        // }

        // let car = {
        //     model: "Toyota",
        //     engine: null
        // }

        // let tea = {
        //     type: "Black",
        //     weight: 400
        // }

        // makeEngine(tea)
        // console.log(tea)


        // console.log(square(4))

        // function square(x) {
        //     return x * x
        // }

        // let square = function (x) { return x * x }
        // console.log(square(4))

        // let sayHello;
        // let isAdmin = true;
        // if (isAdmin) {
        //     sayHello = function () { console.log("Hello I'm Admin!") }
        // } else {
        //     sayHello = function () { console.log("Hello I'm User") }
        // }
        // sayHello();

        // function countInfinite(x) {
        //     x = x + 1
        //     console.log(x)
        //     if (x != 10) {
        //         countInfinite(x)
        //     } else {
        //         return
        //     }
        // }

        // countInfinite(0)

        // function foo(i) {
        //     if (i < 0) {
        //         return;
        //     }
        //     console.log('begin: ' + i);
        //     foo(i - 1);
        //     console.log('end: ' + i);
        // }
        // foo(3);



        // function foo(name) {

        //     function expandName() {
        //         let x = 2
        //         name = name + " : EXPANDED"
        //     }
        //     expandName()
        //     return name
        // }

        // let myName = foo("Ivan")
        // console.log(myName)


        // function sayMyName(name) {
        //     let getMyName = function () {
        //         return name
        //     }
        //     return getMyName
        // }

        // myName = sayMyName("Yuriy");
        // console.log(myName())


        // let doublesquare = x => {
        //     y = x + 2;
        //     return x * x
        // };

        // let doublesquare = (x, y) => {
        //     z = x + 2;
        //     return x * y * z
        // };

        // let doublesquare = () => {
        //     y = 4 * 2;
        //     return y
        // };

        // function doublesquare(x = 2){
        //     return x*x*x*x
        // }

        // console.log(doublesquare())

        // function connectWord(separator, ...words) {
        //     let allWords = ''
        //     for (i = 0; i < words.length; i++) {
        //         allWords = allWords + separator + " " + words[i]
        //     }
        //     return allWords
        // }

        // console.log(connectWord(",", 23, "sdkaldsakd", "dsadsadsa", "dsadsadsa", "dasdsadas"))


        // function countNumbers() {

        //     console.log(arguments.length)

        // }

        // countNumbers(2, 3, 4, 5)
        // countNumbers(2)
        // countNumbers(5, 6, 7, 8, 98, 9, 8, 7, 67, "dsads")
        // countNumbers()

        function sumAll() {
            let sum = 0
        }
        //Суммировать все аргументы переданные в функцию и проверить являются ли они числом. Использовать arguments

        sumAll(2, 3, 4, 5, "dsadsa", 6, 7, 8, 7)

        // let a = 2;
        let b = "dsadsad"

        console.log(typeof(b))
    
    </script>

</body>

</html>
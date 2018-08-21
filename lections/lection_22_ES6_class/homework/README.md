# Изучить материал

+ http://es6-features.org/
+ https://derickbailey.com/2017/06/06/3-features-of-es7-and-beyond-that-you-should-be-using-now/
+ https://codeburst.io/what-are-javascript-generators-and-how-to-use-them-c6f2713fd12e

# Практика
 

1) Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции. Класс должен работать следующим образом:

        var elem = new Elem('селектор');

        elem.html('!'); //запишет в текст элемента '!'
        elem.append('!'); //запишет в начало элемента '!'
        elem.prepend('!'); //запишет в конец элемента '!'
        elem.attr('class', 'www'); //запишет в атрибут class значение www

        //Должны работать цепочки методов:
        elem.html('hello').append('!').prepend('!');
        elem.attr('class', 'www').attr('title', 'hello');


2)  Реализуйте на ООП игру "морской бой" против компьютера.


# Лекция

1) Создать цепочку классов C1 -> C2 -> C3.
Создание экземпляра - new C3(1, 2, 3, 4)

Первый аргумент должен определится в this как p1.

Второй аргумент - p2
Третий - p3
Четвертый - p4

Конструктор C1 записывает в this свойство p2
С2 -> p1, p3
C3 -> p4
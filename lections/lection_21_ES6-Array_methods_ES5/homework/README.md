# Изучить материал

+ https://learn.javascript.ru/array-iteration
+ http://es6-features.org

# Практика
 

 1) Напиши функцию fmap(do, list), которая принимает на вход функцию и массив, `do, list`, где `list` - массив элементов, на которые применится функция `do`. fmap возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из `list` и пропускает его через функцию `do`. Пример:

  
        function square(x) { return x * x; }
        var list = [1, 2, 3]
        var squareGen = fmap(square, list);

        console.log(squareGen.next()); // 1
        console.log(squareGen.next()); // 4
        console.log(squareGen.next()); // 9
        console.log(squareGen.next()); // undefined



# Лекция 

1. Получить из данного массива пользователей массив их полных имен


        {
            var users = [
                { id: 1, name: 'Vasya', surname: 'Vasiliev' },
                { id: 2, name: 'Ivan', surname: 'Ivanov' },
                { id: 3, name: 'Irina', surname: 'Plushkina' }
            ];
        }

2. Получить из данного массива пользователей только тех, кто старше определенного возраста

        {
            var users = [
                { id: 1, age: 21, name: 'Vasya', surname: 'Vasiliev' },
                { id: 2, age: 28, name: 'Ivan', surname: 'Ivanov' },
                { id: 3, age: 18, name: 'Irina', surname: 'Plushkina' }
            ];
        }



3. Получить из данного массива заказов среднюю сумму заказа

        {
            var orders = [{
                id: 5,
                date: '21-01-2015',
                amount: 783
            }, {
                id: 8,
                date: '24-01-2015',
                amount: 67
            }, {
                id: 21,
                date: '29-01-2015',
                amount: 1234
            }, {
                id: 78,
                date: '04-02-2015',
                amount: 123
            }, {
                id: 23,
                date: '15-02-2015',
                amount: 245
            }];
        }
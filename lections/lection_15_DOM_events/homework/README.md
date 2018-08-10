# Изучить материал
+ https://learn.javascript.ru/attributes-and-custom-properties
+ https://learn.javascript.ru/traversing-dom
+ https://learn.javascript.ru/events-and-timing-depth
+ https://learn.javascript.ru/obtaining-event-object
+ https://learn.javascript.ru/mouse-clicks
+ https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave

# Практика

1) Создать персонажа игры-платформера.
	При нажатии на пробел - прыжок вверх на `h` пикселей.
	При нажатии на стрелку -> передвижение персонажа на `step` пикселей в сторону (и остальные стрелки)
	
	Персонаж - это квадрат, имеющий размеры 100 на 100 пикселей.
	Прыжок - это анимация движения объекта вверх на `h` пикселей и возврат в изначальное положение (до прыжка)
	
	
2) При нажатии на CTRL персонаж должен "присесть" (уменьшиться в размерах по высоте на 40%, по ширине - увеличится на 15%)
3) Дополнительно: при зажатом CTRL персонаж может продолжать двигатся в ЛЕВО и ПРАВО! (т.е. ВВЕРХ и ВНИЗ не работают, ПРОБЕЛ не работает)
 

# Лекция

1) 
		data = { 
			name: 'menu', 
			type: 'row|column', 
			items: [
				{
					title: 'title 1',
					handler: 'ActionAdd'
				},
				{
					title: 'title 2',,
					handler: 'ActionSaveAs'
					items: [
						{ title: 'inner 1' }, { title: 'inner 2' }
					]
				},
				{
					title: 'title 3',
					handler: 'ActionExit'
				}
			]
		}

Создать вертикальное или горизонтальное (в зависимости от свойства type) меню, в котором будут элементы из свойства items.
Inner items - выпадающее меню при наведении.
hander - хранит название функции, которая выполнится при нажатии на пункт меню.
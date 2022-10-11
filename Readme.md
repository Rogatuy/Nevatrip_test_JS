Тестовое задание в компанию NevaTrip

Условия:
Время из A в B

Известно расписание отправления теплохода по московскому времени (GMT+3):

    из A в B:
        2021-08-21 18:00:00
        2021-08-21 18:30:00
        2021-08-21 18:45:00
        2021-08-21 19:00:00
        2021-08-21 19:15:00
        2021-08-21 21:00:00

    из B в A:
        2021-08-21 18:30:00
        2021-08-21 18:45:00
        2021-08-21 19:00:00
        2021-08-21 19:15:00
        2021-08-21 19:35:00
        2021-08-21 21:50:00
        2021-08-21 21:55:00

"из A в B" и "из B в A" стоимость одного билета 700р.

"из A в B и обратно в А" стоимость составного билета 1200р

Время пути в одну сторону 50 минут.

Задача. Сделать страницу (дизайн не имеет значения) на которой пользователь выбрав направление, время и количество билетов сможет посчитать итоговые значения: общую стоимость, время в пути.

Как это должно выглядеть?

На странице пользователь сначала должен выбрать направление:

<code><select name="route" id="route"></code>
  <code><option value="из A в B">из A в B</option></code>
  <code><option value="из B в A">из B в A</option></code>
  <code><option value="из A в B и обратно в А">из A в B и обратно в А</option></code>
<code></select></code>


После чего предлагается пользователю выбрать время. Важно, время показываем в часовом поясе пользователя. Предположим, что на всех его устройствах стоит запрет перевода времени в локальный часовой пояс.


<code><label for="time">Выберите время</label></code>
<code><select name="time" id="time"></code>
  <code><option value="18:00(из A в B)">18:00(из A в B)</option></code>
  <code><option value="18:30(из A в B)">18:30(из A в B)</option></code>
  <code><option value="18:45(из A в B)">18:45(из A в B)</option></code>
  <code><option value="19:00(из A в B)">19:00(из A в B)</option></code>
  <code><option value="19:15(из A в B)">19:15(из A в B)</option></code>
  <code><option value="21:00(из A в B)">21:00(из A в B)</option></code>
  <code><option value="18:30(из B в A)">18:30(из B в A)</option></code>
  <code><option value="18:45(из B в A)">18:45(из B в A)</option></code>
  <code><option value="19:00(из B в A)">19:00(из B в A)</option></code>
  <code><option value="19:15(из B в A)">19:15(из B в A)</option></code>
  <code><option value="19:35(из B в A)">19:35(из B в A)</option></code>
  <code><option value="21:50(из B в A)">21:50(из B в A)</option></code>
  <code><option value="21:55(из B в A)">21:55(из B в A)</option></code>
<code></select></code>


Если выбрано время "из A в B и обратно в А", то должен показаться дополнительный селект, в котором можно будет выбрать обратное время. Обратите внимание, что время не должно пересекаться. Это значит, что следует учитывать, что если путь из А в В был выбран в 14:00, то обратный путь возможен только по прибытию на место в пункт В.

Далее пользователю прелагается выбрать количество билетов и нажать на кнопку "посчитать".


<code><label for="num">Количество билетов</label></code>
<code><input id="num"></code>
<code><button>Посчитать</button></code>


При клике на кнопку "Посчитать" показать результат с направлением, временем в пути, временем отправления и временем прибытия в часовом поясе пользователя.

Например:

Вы выбрали 4 билета по маршруту из A в B стоимостью 4000р.
Это путешествие займет у вас 40 минут. 
Теплоход отправляется в 12-00, а прибудет в 18-00.

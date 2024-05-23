Мини  проект или скорее практика в процессе обучения JS.
Курс от актион студенты.
СТЕК:
JS/Node.js
OUTSIDE API/"работа россии" API
TELEGRAF.JS
DOTENV
UNDICI
INSOMNIA - 3g$Ui_4(PARFRASE)



ход работы.
1) создаем папку и инициализируем её как проетк командой npm init
   Cоздаеться файл package.json - входная точка.

2)Добавления зависимостей npm install telegraf dotenv undici

3)Добовляем возможность использовать современный стандарт модуля 
  EcmoScript(esm) - "type": "module", в файл package.json

4)Добовляем скрипт запуска приложения в раздел scripts в файле package.json - "start": "node src/bot.js",

5)Создаем файл переменных окружения .env и деректорию для кода src

6) config.js

7) bot.js

8) commands/start.js

9) help.js

10)stages/setup/|index.js|/scenes/pickFilter.js|setText.js|setRegionCode.js

11)commands/setup.js

12)src/api/

13) commands/search.js

http://opendata.trudvsem.ru/api/v1/vacancies/region/22?text=&limit=
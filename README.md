# SPA-проект с темизацией на React и styled-components https://www.youtube.com/watch?v=qVKGzyl0APQ

# Дополнительный обучающий видос про CSS переменные: https://www.youtube.com/watch?v=BBRVmHgB2BY

# Делаем это задание https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub

### `npm start`

1. Создадим приложение с помощью CRA с TypeScript.
   `npx create-react-app my-app --template typescript`

2. Установим Styled Components и типы для него.
   `npm i styled-components @types/styled-components`
3. Установим расширение vscode-styled-components для подсветки и подсказок в VSCode.
   `https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components`

4. Установим React Router DOM `npm i react-router-dom`

5. Типы для React Router DOM `npm i @types/react-router-dom`

6. Устанавливаем "axios" `npm i axios`

7. `https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub` . Здесь скачиваем стартовые файлы, нажимая на кнопку "СКАЧАТЬ СТАРТЕР" (`"DOWNLOAD STARTER"`) . Копируем в проект папку `design`, файл `style-guide`.

8. Скачиваем здесь файл reset.css `https://meyerweb.com/eric/tools/css/reset/`. В `src` создаём файл `normalize.css`, в него копируем данные файла `reset.css`. В файле `index.css` подключаем `@import-normalize`.

9. Создаём корневой файл `.vscode/settings.json`

В нем пишем
{
"css.lint.unknownAtRules": "ignore"
}

Без этого файла @import-normalize будет ругаться
\*/

10. `npm install react-icons --save` . Устанавливаем библиотеку реакт-иконки `https://react-icons.github.io/react-icons/` . Переходим сюда `https://react-icons.github.io/react-icons/icons?name=md`

11. `npm i --save react-select` Устанавливаем библиотеку реакт-селектов. `https://react-select.com/home`

12. API выбираем здесь `https://restcountries.com/` ,` https://restcountries.com/#api-endpoints-v2` , выбираем эндпоинтс-v2: выбор страны по имени, по некоему коду, валюте, и тд. В списке 240 стран,

13. Создадим конфиг `config.ts`
    #   s t y l e d c o m p o n e n t s - c o l o r - t h e m e 
     
     

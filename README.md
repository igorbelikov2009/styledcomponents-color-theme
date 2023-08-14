# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

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

8. Скачиваем здесь файл reset.css `https://meyerweb.com/eric/tools/css/reset/`. В `src` создаём файл `normalize.css`, в него копируем данные файла `reset.css`

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
#   s t y l e d c o m p o n e n t s - c o l o r - t h e m e  
 
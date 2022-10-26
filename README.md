<br>
<h1 align="center">React FE Challenge</h1>
<div align="center">
<img src="https://w0.peakpx.com/wallpaper/940/144/HD-wallpaper-rick-and-morty-logo-ultra-cartoons-others-logo-rickandmorty.jpg" alt="logo of Rick & Morty" />
</div>
<br>

---

<br>

## ▶️ Production Deployment Link

-   [Link](https://emanuele-panesi-react-challenge.netlify.app)

<br>

---

<br>

## ⚙️ Features

<br>

✔️ Display a paginated list of 826 characters from The Rick & Morty API<br>
✔️ Name and status related filter and sorting by Alphabetical order<br>
✔️ Name search bar<br>
✔️ Responsive UI layout<br>
✔️ Use of React Hooks, Redux, React Router and Session Storage

<br>

---

<br>

## 👨🏻‍💻 About

<br>

The App redirects you to the homepage, in which you can choose to see all characters, filter them by properties or read more about their details in a dedicated page. The app is responsive and it supports web and mobile versions.

<br>

-   State: the state of the application is managed with Redux, to facilitate communication and sharing of data across components and keep changes more traceables. There is a central store with four slices (character, detailCharacter, pagination, ui) with its corresponding reducers and action creators that holds the entire state of the application.
    The asyncronous actions are dispatched through the Redux thunks functions, depending on certain conditions.

    -   Routing: client side routing enabled by React Router, a redirects file is created to allow to serve all the pages from the same location (index.html).

-   Session Storage: it's used to persist the state in case of refreshing page. The currentPage, filterName and filterStatus initial states are saved in Session Storage.

-   Axios: library used to make requests and return data from the API

-   Styled-Components: library used to manage the app' styles.

<br>

<h3 align="center">Components</h3>

-   Pagination: it renders two buttons, unless the currentPage value is 1. The currentPage initial state is store through Session Storage to persist the state in case of refreshing page.

-   Filter: it renders two select menus and two buttons. Every menu has three options, there's a local state to store the selected options that will update the filter name and status states, once clicked on the filter button. The clear filters button restores the initial state. The filter name and status initial states are stored through Session Storage to persist the state in case of refreshing page.

-   Search bar: it renders an input field and an image. There's a local state to store the text typed that will update the filter name state state once clicked on the image.

-   Sort Characters: it renders a dropdown button and two more buttons as content. Clicking on the content, the sort action is dispatched and the characters list is sorted depending on the name's initial letter. It communicate with is parent component (Homepage) through character list props.

-   Character: it renders the character card, it communicate with is parent component (CharactersList) through character props.

-   CharactersList: it renders the characters list data, it creates a new array with the quantity of characters depending on the results from the API. It communicate with is parent component (Homepage) through character info, filter name and filter status props.

-   Detail Character: it renders the detail character card, it communicate with is parent component (Detail Page) through character props.

<br>

<h3 align="center">Pages</h3>

-   Homepage: it renders Header, Sort Characters button dropdown, Filter, Search bar, Characters list, Pagination and Footer.
    The useEffect hook get the Characters list data fetching and and get the saved the currentPage, filter name and filter status values every time they change (saved in Session Storage).

-   Detail Page: it renders Header, Detail Character, Navigate Home Button and Footer.
    The useEffect hook that get the Detail Character data fetching every time its ID's value change.
    The useParams hook returns the Detail Character's ID from the URL that was matched by the Route path in the App.

-   Page not Found: it renders a Header, text, Button and a Footer. It's visible if the path doesn't exist.

<br>

---

<br>

## 🚀 Technologies

<br>

-   [React](https://reactjs.org/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [React Router](https://reactrouter.com/en/main)
-   [Typescript](https://www.typescriptlang.org/)
-   [Webpack](https://webpack.js.org/)
-   [Styled-Components](https://styled-components.com/)
-   [Axios](https://axios-http.com/)
-   [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)

<br>

---

<br>

## 🖥 Run Locally

<br>

-   Clone the project

```
git clone https://github.com/lele87/react-challenge.git
```

<br>

-   Install dependencies

```
npm install
```

<br>

-   Create a .env file

-   Paste the following key to the .env file

```
REACT_APP_API_URL=https://rickandmortyapi.com/api/character/
```

---

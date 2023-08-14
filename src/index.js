import React from 'react';
import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";

const rootElement =
    document.getElementById('root');

const root = createRoot(rootElement);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

let rerenderTree = () =>{
    root.render(<Provider store = {store}>  <App/> </Provider>)
}

rerenderTree();

store.subscribe(()=> {rerenderTree()});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

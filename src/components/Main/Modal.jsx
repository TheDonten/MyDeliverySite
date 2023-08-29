import Modals from "./Modals.module.css";
import React from "react";
//Отправлять суда надо предудыщее состояние юрл строки, для того, чтобы можно вернутся туда, где была нажата кнопка Логин
const Modal = (props) =>{
    return (
        <div className={Modals.modal}>
            <span className={Modals.close} onClick={props.history}>&times;</span>
            <div className={Modals.modalcontent}>
                <h1>Food Market</h1>
                <form className={Modals.loginForm}>
                    <label>
                        <input type="email" placeholder={"Email"} required="Заполните поле"/>
                    </label>
                    <label>
                        <input  type="password" placeholder={"Password"} required="Заполните поле"/>
                    </label>
                    <input type="submit" value="Login" readOnly />
                </form>
                <h5><a>Forgot password</a></h5>
            </div>

        </div>
    );
}
export default Modal;
//------------------------- Importing required libararies -------------------------------//
import MessagesArea from '../MessagesArea/MessagesArea';
import { useRef, useState } from 'react';
import style from './InputArea.module.css';


//------------------------- InputArea function ------------------------------------------//
function InputArea() {
  const user_list = ["Vishal","Ishika", "Sagar", "Kajal", "Raj", "Anchal", "Ram", "Seeta", "Yesh", "Seema"];
  //----------------------- Using message ref for the typing in the input sectino -------//
  const messageRef = useRef();
  //----------------------- Using state variable for messages ---------------------------//
  const [message, setMessage] = useState([]);
  //----------------------- function for removing from the messages ---------------------//
  function handleRemove() {
    messageRef.current.value = "";
  }
  //----------------------- function for handleSubmit -----------------------------------//
  function handleSubmit(e) {
    e.preventDefault();
    const messageText = messageRef.current.value;
    const sender = user_list[Math.floor(Math.random() * user_list.length)];
    if(messageText.trim() !== "") {
      const newChat = {
        username : sender,
        message : messageText
      };
      setMessage(prevMessage => [...prevMessage, newChat]);
    }
    handleRemove();
  }

  //------------------------ Returning the UI --------------------------------------------//
  return (
    <>
      <MessagesArea messages={message} />
      <form onSubmit={handleSubmit} className={style.inputArea}>
        <input type="text" className={style.input} ref={messageRef} placeholder="Enter your message here..."/>
        <button>Send</button>
      </form>
    </>
  )
}

//-------------------------- default exporting function -----------------------------------//
export default InputArea;
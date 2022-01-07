import React from "react";
import SearchBar from "components/SearchBar";
import Table, { ContactItem } from "components/Table";
import Topbar from "components/Topbar";
import MessageHeader from "./components/MessageHeader";
import MessageText from "./components/MessageText";
import MessageFooter from "./components/MessageFooter";
import { useState, useEffect } from "react";
import { getMessages } from "api/messages";
import { LS } from 'utils';
import { appConfig } from 'config';

function Messages() {
  const [messages, setMessages] = useState([]);
  const userData = JSON.parse(LS.getItemLocalStorage(appConfig.userData))

  useEffect(() => {
    window.socket = new WebSocket(`ws://10.50.93.33:3003/?id=${userData.id}`)

    window.socket.addEventListener("message", function (message) {
      const recived = JSON.parse(message.data)

      setMessages(old => {
        let copyArray = [...old];
        copyArray.push({
          data: recived.message,
          date: "",
          type: 1,
        })
        return copyArray
      });
    })
  }, [])
  // useEffect(() => {
  //   getMessages()
  //     .then((res) => setMessages(res))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="messages-page">
      <div className="esearchBar">
        <SearchBar />
      </div>

      <div className="egroups">
        <Topbar heading="Groups" />
        <Table></Table>
      </div>

      <div className="erecents">
        <Topbar heading="Recents" />
        <Table>
          
        </Table>
      </div>

      <div className="messages">
        <MessageHeader />
        <div className="message-content">
          {messages.map((message, index) => (
            <MessageText key={index} content={message.data} time={message.date} type={message.type} />
          ))}
        </div>
        <MessageFooter setMessages = {setMessages} />
      </div>
    </div>
  );
}

// test for push
export default Messages;

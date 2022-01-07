import React from "react";
import SearchBar from "components/SearchBar";
import Table, { ContactItem } from "components/Table";
import Topbar from "components/Topbar";
import MessageHeader from "./components/MessageHeader";
import MessageText from "./components/MessageText";
import MessageFooter from "./components/MessageFooter";
import { useState, useEffect } from "react";
import { getMessages } from "api/messages";

function Messages() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMessages()
      .then((res) => setMessages(res))
      .catch((err) => console.log(err));
  }, []);

  console.log(messages);

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
        <Table></Table>
      </div>

      <div className="messages">
        <MessageHeader />
        <div className="message-content">
          {messages.map((message) => (
            <MessageText content={message.data} time={message.date} type={message.type} />
          ))}
        </div>
        <MessageFooter />
      </div>
    </div>
  );
}

// test for push
export default Messages;

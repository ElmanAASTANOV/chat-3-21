import React from "react";
import SearchBar from "components/SearchBar";
import Table, { ContactItem } from "components/Table";
import Topbar from "components/Topbar";
import MessageHeader from "./components/MessageHeader";
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
          <div className="message-line left">
            <p className="message">Hey There !</p>
            <small className="time">Today, 2:01pm</small>
          </div>
          <div className="message-line right">
            <p className="message">Hello...</p>
            <small className="time">Today, 2:12pm</small>
          </div>
        </div>
        <MessageFooter />
      </div>
    </div>
  );
}

// test for push
export default Messages;

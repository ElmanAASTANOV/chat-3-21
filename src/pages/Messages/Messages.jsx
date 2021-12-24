import React from "react";
import { getGroups } from "api/groups";
import { getRecents } from "api/recents";
// import { getMessages } from "api/messages";
import { useSelector, useDispatch } from "react-redux";
import Table, { ContactItem } from "./components/Table";
import Topbar from "./components/Topbar";
import MessageHeader from "./components/MessageHeader";
import MessageFooter from "./components/MessageFooter";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

function Messages() {
  const dispatch = useDispatch();
  const groups = useSelector((store) => store.groups);
  const recents = useSelector((store) => store.recents);

  useEffect(() => {
    getGroups()
      .then((res) => dispatch({ type: "setGroups", payload: res }))
      .catch((err) => console.log(err));
    getRecents()
      .then((res) => dispatch({ type: "setRecents", payload: res }))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className="messages-page">
      <div className="esearchBar">
        <SearchIcon fontSize="" className="esearchIcon" />
        <input className="searchBar" type="text" placeholder="Search" />
        <div className="ethree-dots">
          <span className="edot"></span>
          <span className="edot"></span>
          <span className="edot"></span>
        </div>
      </div>

      <div className="egroups">
        <Topbar heading="Groups" />
        <Table>
          {groups.map((data, index) => (
            <ContactItem
              key={index}
              name={data.name}
              message={data.lastMessage}
            />
          ))}
        </Table>
      </div>

      <div className="erecents">
        <Topbar heading="Recents" />
        <Table>
          {recents.map((data, index) => (
            <ContactItem
              key={index}
              name={data.user.name}
              surname={data.user.surname}
              message={data.message.content} // Kiran message property should not be array or all of them must be array
              time={data.message.date}
              status={data.message.status}
              type={data.message.type}
            />
          ))}
        </Table>
      </div>

      <div className="messages">
        <MessageHeader />
        <div class="message-content">
                    <div class="message-line left">
                        <p class="message">Hey There !</p>
                        <small class="time">Today, 2:01pm</small>
                    </div>
                    <div class="message-line left">
                        <property class="message">How are you doing?</property>
                        <small class="time">Today, 2:02pm</small>
                    </div>
                    <div class="message-line right">
                        <p class="message">Hello...</p>
                        <small class="time">Today, 2:12pm</small>
                    </div>
                    <div class="message-line right">
                        <p class="message">I am good  and hoew about you?</p>
                        <small class="time">Today, 2:12pm</small>
                    </div>
                    <div class="message-line left">
                        <p class="message">I am doing well. Can we meet up tomorrow?</p>
                        <small class="time">Today, 2:13pm</small>
                    </div>
                    <div class="message-line right">
                        <p class="message">Sure!</p>
                        <small class="time">Today, 2:14pm</small>
                    </div>
                </div>
        <MessageFooter />
      </div>
    </div>
  );
}

export default Messages;

import React from "react";
import { getGroups } from "api/groups";
import { getRecents } from "api/recents";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from 'components/SearchBar';
import Table, { ContactItem } from 'components/Table';
import Topbar from "components/Topbar";
import MessageHeader from "./components/MessageHeader";
import MessageFooter from "./components/MessageFooter";
import { useEffect } from "react";
import * as selectors from 'store/selectors/selectors';
import * as actions from 'store/actions/actions';

function Messages() {
  const dispatch = useDispatch();
  const groups = useSelector(selectors.getGroups);
  const recents = useSelector(selectors.getRecents);
  const searchResult = useSelector(selectors.getSearchResult);

  useEffect(() => {
    getGroups()
      .then(res => dispatch(actions.setGroups(res)))
      .catch(err => console.log(err));
    getRecents()
      .then(res => dispatch(actions.setRecents(res)))
      .catch(err => console.log(err));
  }, [dispatch]);

  return (
    <div className="messages-page">
      <div className="esearchBar">
        <SearchBar/>
      </div>

      <div className="egroups">
        <Topbar heading='Groups' />
        <Table>
          { searchResult?.map((data, index) => <ContactItem
              key={index}
              name={data.name}
              message={data.lastMessage} />) ||
            groups.map((data, index) => <ContactItem
              key={index}
              name={data.name}
              message={data.lastMessage} />)
          }
        </Table>
      </div>

      <div className="erecents">
        <Topbar heading='Recents' />
        <Table>
          {
            recents.map((data, index) => <ContactItem
              key={index}
              name={data.user.name}
              surname={data.user.surname}
              message={
                data.message.content || data.message[data.message.length-1].content
              }
              unreadMessageCount = {
                !data.message.content &&
                data.message.filter(obj => obj.type === 2).length
              }
              time={data.message.date || data.message[data.message.length-1].date}
              status={data.message.status || data.message[data.message.length-1].status}
              type={data.message.type || data.message[data.message.length-1].type}
            />)
          }
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

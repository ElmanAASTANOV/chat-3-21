import Table, { ContactItem } from './components/Table';
import Topbar from './components/Topbar';
import { getGroups } from 'api/groups';
import { getRecents } from 'api/recents';
import { getFriends } from 'api/friends';
import { getRecentCalls } from 'api/recentCalls';
import { useState, useEffect } from 'react';

const HomePage = () => {

  const [groups, setGroups] = useState([]);
  const [recents, setRecents] = useState([]);
  const [friends, setFriends] = useState([]);
  const [recentCalls, setRecentCalls] = useState([]);

  useEffect(() => {
    getGroups()
      .then(res => setGroups(res))
      .catch(err => console.log(err))
    getRecents()
      .then(res => setRecents(res))
      .catch(err => console.log(err))
    getFriends()
      .then(res => setFriends(res))
      .catch(err => console.log(err))
    getRecentCalls()
      .then(res => setRecentCalls(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="homePage">

      <div className="searchBar">
        <Topbar heading='Search' searchIcon='true' />
      </div>

      <div className="groups">
        <Topbar heading='Groups' />
        <Table>
          {
            groups.map((data, index) => <ContactItem
              key={index}
              name={data.name}
              message={data.lastMessage} />)
          }
        </Table>
      </div>

      <div className="recents">
        <Topbar heading='Recents' />
        <Table>
          {
            recents.map((data, index) => <ContactItem
              key={index}
              name={data.user.name}
              surname={data.user.surname}
              message={data.message.content} // Kiran message property should not be array or all of them must be array
              time={data.message.date}
              status={data.message.status}
              type={data.message.type}
              />)
          }
        </Table>
      </div>

      <div className="friends">
        <Topbar heading='Friends' />
        <Table>
          {
            friends.map((data, index) => <ContactItem
              key={index}
              name={data.user.name}
              message={data.message.content}
              time={data.message.date} />)
          }
        </Table>
      </div>

      <div className="recentCalls">
        <Topbar heading='Recent Calls' />
        <Table>
          {
            recentCalls.map((data, index) => <ContactItem
              key={index}
              name={data.user.name}
              message={data.date}
              callType={data.callType}
              messageType={data.messageType}
            />)
          }
        </Table>
      </div>
    </div>);
}

export default HomePage;
import SearchBar from '../../components/SearchBar';
import Table, { ContactItem } from '../../components/Table';
import Topbar from './components/Topbar';
import { getGroups } from 'api/groups';
import { getRecents } from 'api/recents';
import { getFriends } from 'api/friends';
import { getRecentCalls } from 'api/recentCalls';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from 'store/selectors/selectors';
import * as actions from 'store/actions/actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const groups = useSelector(selectors.getGroups);
  const recents = useSelector(selectors.getRecents);
  const friends = useSelector(selectors.getFriends);
  const recentCalls = useSelector(selectors.getRecentCalls);
  const searchResult = useSelector(selectors.getSearchResult);

  useEffect(() => {
    getGroups()
      .then(res => dispatch(actions.setGroups(res)))
      .catch(err => console.log(err))
    getRecents()
      .then(res => dispatch(actions.setRecents(res)))
      .catch(err => console.log(err))
    getFriends()
      .then(res => dispatch(actions.setFriends(res)))
      .catch(err => console.log(err))
    getRecentCalls()
      .then(res => dispatch(actions.setRecentCalls(res)))
      .catch(err => console.log(err))
  }, [dispatch])

  return (
    <div className="ehomePage">
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

      <div className="efriends">
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

      <div className="erecentCalls">
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
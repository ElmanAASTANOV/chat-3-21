import Table, { ContactItem } from './components/Table';
import Topbar from './components/Topbar';
import { getGroups } from 'api/groups';
import { getRecents } from 'api/recents';
import { getFriends } from 'api/friends';
import { getRecentCalls } from 'api/recentCalls';
import { useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from 'store/selectors/selectors';
import * as actions from 'store/actions/actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const groups = useSelector(selectors.getGroups);
  const recents = useSelector(selectors.getRecents);
  const friends = useSelector(selectors.getFriends);
  const recentCalls = useSelector(selectors.getRecentCalls);

  console.log(groups.data)

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

  useSelector(store => console.log(store))

  return (
    <div className="ehomePage">
      <div className="esearchBar">
        <SearchIcon fontSize='' className='esearchIcon' />
        <input className='searchBar' type="text" placeholder='Search' />
        <div className="ethree-dots">
          <span className="edot"></span>
          <span className="edot"></span>
          <span className="edot"></span>
        </div>
      </div>

      <div className="egroups">
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

      <div className="erecents">
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
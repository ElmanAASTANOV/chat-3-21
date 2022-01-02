import Topbar from 'components/Topbar';
import Table, { ContactItem } from 'components/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFriends } from 'api/friends';
import * as selectors from 'store/selectors/selectors';
import * as actions from 'store/actions/actions';


function Friends() {
  const dispatch = useDispatch();
  const friends = useSelector(selectors.getFriends);

  useEffect(() => {
    getFriends()
      .then(res => dispatch(actions.setFriends(res)))
      .catch(err => console.log(err))
  }, [dispatch])

  return (
    <div className="efriends">
      <Topbar heading='Friends' />
      <Table>
        {
          friends.map((data, index) => <ContactItem
            key={index}
            name={data.user.name}
            message={data.message.content || data.message[0].content}
            onlineStatus = {data.isOnline}
            time={data.message.date} />)
        }
      </Table>
    </div>
  )
}

export default Friends

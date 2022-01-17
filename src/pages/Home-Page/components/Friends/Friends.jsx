import Topbar from 'components/Topbar';
import Table, { ContactItem } from 'components/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from 'store/friends/friends.selectors';
import * as actions from 'store/friends/friends.actions';


function Friends() {
  const dispatch = useDispatch();
  const friends = useSelector(selectors.getFriends);

  useEffect(() => {
    dispatch(actions.fetchFriends())
  }, [dispatch])

  return (
    <div className="efriends">
      <Topbar heading='Friends' />
      <Table>
        {
          friends.map((data, index) => <ContactItem
            key={index}
            user={data.user}
            message={data.message.content || data.message[0].content}
            onlineStatus = {data.isOnline}
            time={data.message.date} />)
        }
      </Table>
    </div>
  )
}

export default Friends

import Topbar from 'components/Topbar';
import Table, { ContactItem } from 'components/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FRIENDS_SELECTORS, FRIENDS_ACTIONS } from 'store/friends';


function Friends() {
  const dispatch = useDispatch();
  const friends = useSelector(FRIENDS_SELECTORS.getFriends);
  const friendsLoading = useSelector(FRIENDS_SELECTORS.getFriendsLoading);
  const friendsError = useSelector(FRIENDS_SELECTORS.getFriendsError);


  useEffect(() => {
    dispatch(FRIENDS_ACTIONS.fetchFriends())
  }, [dispatch])

  return (
    <div className="efriends">
      <Topbar heading='Friends' />
      <Table>
        { friendsLoading && "Friends Loading..." }
        { friendsError && `Error! ${friendsError}`}
        {
          friends?.length > 0 && friends.map((data, index) => <ContactItem
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

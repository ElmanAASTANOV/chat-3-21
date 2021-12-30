import Topbar from 'components/Topbar';
import Table, { ContactItem } from 'components/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecents } from 'api/recents';
import * as selectors from 'store/selectors/selectors';
import * as actions from 'store/actions/actions';


function Groups() {
  const dispatch = useDispatch();
  const recents = useSelector(selectors.getRecents);

  useEffect(() => {
    getRecents()
      .then(res => dispatch(actions.setRecents(res)))
      .catch(err => console.log(err))
  }, [dispatch])

  return (
    <div className="erecents">
        <Topbar heading='Recents' />
        <Table>
          {
            recents.map((data, index) => <ContactItem
              key={index}
              name={data.user.name}
              surname={data.user.surname}
              message={
                data.message.content || data.message[data.message.length - 1].content
              }
              unreadMessageCount={
                !data.message.content &&
                data.message.filter(obj => obj.type === 2).length
              }
              time={data.message.date || data.message[data.message.length - 1].date}
              status={data.message.status || data.message[data.message.length - 1].status}
              type={data.message.type || data.message[data.message.length - 1].type}
            />)
          }
        </Table>
      </div>
  )
}

export default Groups

import Topbar from 'components/Topbar';
import Table, { ContactItem } from 'components/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from 'store/recents/recents.selectors';
import * as actions from 'store/recents/recents.actions';


function Recents({ onRender }) {
  const dispatch = useDispatch();
  const recents = useSelector(selectors.getRecents);
  
  useEffect(() => {
      dispatch(actions.fetchRecents())
  }, [dispatch])

  return (
    <div className="erecents">
      <Topbar heading='Recents' />
      <Table>
        {
          recents.map((data, index) => onRender ? onRender(data, index) : <ContactItem
            key={index}
            user={data.user}
            message={
              data.message[data.message?.length - 1]?.content
            }
            unreadMessageCount={
              data.message.filter(obj => obj.type === 2)?.length
            }
            time={data.message[data.message.length - 1]?.date}
            status={data.message[data.message.length - 1]?.status}
            type={ data.message[data.message.length - 1]?.type}
          />)
        }
      </Table>
    </div>
  )
}

export default Recents

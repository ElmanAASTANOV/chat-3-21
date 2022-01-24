import Topbar from 'components/Topbar';
import Table, { ContactItem } from 'components/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecentCalls } from 'api/recentCalls';
import { RECENTCALLS_ACTIONS, RECENTCALLS_SELECTORS } from 'store/recentCalls';


function RecentCalls() {
  const dispatch = useDispatch();
  const recentCalls = useSelector(RECENTCALLS_SELECTORS.getRecentCalls);

  useEffect(() => {
    dispatch(RECENTCALLS_ACTIONS.setRecentCalls())
  }, [dispatch])

  return (
    <div className="erecentCalls">
        <Topbar heading='Recent Calls' />
        <Table>
          {
            recentCalls?.map((data, index) => <ContactItem
              key={index}
              user={data.user}
              message={data.date}
              callType={data.callType}
              messageType={data.messageType}
            />)
          }
        </Table>
      </div>
  )
}

export default RecentCalls

import Topbar from 'components/Topbar';
import Table, { ContactItem } from 'components/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecentCalls } from 'api/recentCalls';
import * as selectors from 'store/recentCalls/recentCalls.selectors';
import * as actions from 'store/recentCalls/recentCalls.actions';


function RecentCalls() {
  const dispatch = useDispatch();
  const recentCalls = useSelector(selectors.getRecentCalls);

  useEffect(() => {
    getRecentCalls()
      .then(res => dispatch(actions.setRecentCalls(res)))
      .catch(err => console.log(err))
  }, [dispatch])

  return (
    <div className="erecentCalls">
        <Topbar heading='Recent Calls' />
        <Table>
          {
            recentCalls.map((data, index) => <ContactItem
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

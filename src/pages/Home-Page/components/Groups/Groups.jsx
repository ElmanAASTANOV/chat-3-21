import Topbar from 'components/Topbar';
import Table, { ContactItem } from 'components/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as groupsSelectors from 'store/groups/groups.selectors';
import * as groupsActions from 'store/groups/groups.actions';
import * as selectors from 'store/searchResult/searchResult.selectors'


function Groups() {
  const dispatch = useDispatch();
  const groups = useSelector(groupsSelectors.getGroups);
  const searchResult = useSelector(selectors.getSearchResult);

  useEffect(() => {
    dispatch(groupsActions.fetchGroups())
  }, [dispatch])

  return (
    <div className="egroups">
      <Topbar heading='Groups' />
      <Table>
        {searchResult?.map((data, index) => <ContactItem
          key={index}
          user={data}
          message={data.lastMessage} />) ||
          groups.map((data, index) => <ContactItem
            key={index}
            user={data}
            message={data.lastMessage} />)
        }
      </Table>
    </div>
  )
}

export default Groups

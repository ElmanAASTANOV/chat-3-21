import Topbar from 'components/Topbar';
import Table, { ContactItem } from 'components/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSearchResult } from 'store/searchResult/searchResult.selectors'
import { GROUPS_SELECTORS, GROUPS_ACTIONS } from 'store/groups';


function Groups() {
  const dispatch = useDispatch();
  const groups = useSelector(GROUPS_SELECTORS.getGroups);
  const searchResult = useSelector(getSearchResult);

  useEffect(() => {
    dispatch(GROUPS_ACTIONS.fetchGroups())
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

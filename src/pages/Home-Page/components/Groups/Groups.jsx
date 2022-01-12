import Topbar from 'components/Topbar';
import Table, { ContactItem } from 'components/Table';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from 'store/selectors/selectors';
import * as actions from 'store/actions/actions';


function Groups() {
  const dispatch = useDispatch();
  const groups = useSelector(selectors.getGroups);
  const searchResult = useSelector(selectors.getSearchResult);


  useEffect(() => {
    dispatch(actions.fetchGroups())
  }, [dispatch])

  return (
    <div className="egroups">
      <Topbar heading='Groups' />
      <Table>
        {searchResult?.map((data, index) => <ContactItem
          key={index}
          name={data.name}
          message={data.lastMessage} />) ||
          groups.map((data, index) => <ContactItem
            key={index}
            name={data.name}
            message={data.lastMessage} />)
        }
      </Table>
    </div>
  )
}

export default Groups

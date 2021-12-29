import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from 'store/selectors/selectors';
// import store from 'store/store';
import * as actions from 'store/actions/actions'


function SearchBar() {

  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const groups = useSelector(selectors.getGroups);

  const searchFunction = (array, string) => {
    const text = string.toLowerCase();
    return array.filter(obj => {
      return obj.name.toLowerCase().includes(text) || obj.lastMessage.toLowerCase().includes(text)
    })
  }

  useEffect(() => {
    const res = searchFunction(groups, input)
    dispatch(actions.setSearchResult(res))
    
  }, [input, groups, dispatch])

  return (
    <>
      <SearchIcon fontSize='' className='esearchIcon' />
      <input className='searchBar' type="text" placeholder='Search' defaultValue={input}
        onChange={e => setInput(e.target.value)} />
      <div className="ethree-dots">
        <span className="edot"></span>
        <span className="edot"></span>
        <span className="edot"></span>
      </div>
    </>
  )
}

export default SearchBar;

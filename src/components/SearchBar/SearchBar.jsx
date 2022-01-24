import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GROUPS_SELECTORS } from 'store/groups';
import { setSearchResult } from 'store/searchResult/searchResult.actions'


function SearchBar() {

  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const groups = useSelector(GROUPS_SELECTORS.getGroups);
  console.log(groups);

  // const searchFunction = (array, string) => {
  //   const text = string.toLowerCase();
  //   return array.filter(obj => {
  //     return obj.name.toLowerCase().includes(text) || obj.lastMessage.toLowerCase().includes(text)
  //   })
  // }

  // useEffect(() => {
  //   const res = searchFunction(groups, input)
  //   dispatch(setSearchResult(res))

  // }, [input, groups, dispatch])

  return (
    <div className="esearchBar">

      <SearchIcon fontSize='' className='esearchIcon' />
      <input className='searchBar' type="text" placeholder='Search' defaultValue={input}
        onChange={e => setInput(e.target.value)} />
      <div className="ethree-dots">
        <span className="edot"></span>
        <span className="edot"></span>
        <span className="edot"></span>
      </div>

    </div>
  )
}

export default SearchBar;

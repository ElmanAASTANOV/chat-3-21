import SearchIcon from '@mui/icons-material/Search';

const TopBar = ({heading, searchIcon}) => {
  
  return (
    <div className="top-bar">
      {searchIcon && <SearchIcon fontSize='' className='searchIcon'/>}
      <p className='heading'>{heading}</p>
      <div className="three-dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default TopBar;
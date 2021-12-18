import SearchIcon from '@mui/icons-material/Search';

const TopBar = ({heading, searchIcon}) => {
  
  return (
    <div className="etop-bar">
      {searchIcon && <SearchIcon fontSize='' className='esearchIcon'/>}
      <p className='eheading'>{heading}</p>
      <div className="ethree-dots">
        <span className="edot"></span>
        <span className="edot"></span>
        <span className="edot"></span>
      </div>
    </div>
  );
}

export default TopBar;
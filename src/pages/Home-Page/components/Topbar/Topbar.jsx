const TopBar = ({heading}) => {
  
  return (
    <div className="top-bar">
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
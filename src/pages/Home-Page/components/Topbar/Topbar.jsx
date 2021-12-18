const TopBar = ({heading}) => {
  return (
    <div className="top-bar">
      <p className='heading'>{heading}</p>
      <div className="three-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default TopBar;
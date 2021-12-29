const TopBar = ({heading}) => {
  
  return (
    <div className="etop-bar">
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
const ContactItem = ({ name, message }) => {
    return (
        <div className="contact"> 
          <div className="left">
            <img src='' className='profile-picture' alt="" />
            <div className="name-message">
              <div className="name">{name}</div>
              <p className='message'>{message}</p>
            </div>
          </div>
          <div className="right">

          </div>
        </div>
    )
}

export default ContactItem;
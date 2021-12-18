import CallIcon from '@mui/icons-material/Call';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import VideocamIcon from '@mui/icons-material/Videocam';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import img from 'pages/Home-Page/profile-picture/profileImage';

const ContactItem = ({name, surname, message, time, callType, messageType, type, status }) => {

  return (
    <div className="contact">
      <div className="left">
        <img src={img} className='profile-picture' alt=''/>
        <div className="name-message">
          <div className="name">{name} {surname}</div>
          <p className='message'>{message}</p>
        </div>
      </div>
      <div className="right">
        {time && <div className='time'>{time}</div>}

        {messageType === 1 && < CallMadeIcon fontSize='' className="callMade" />}
        {messageType === 2 && < CallReceivedIcon fontSize='' className="callReceived" />}
        
        {callType === 1 && < CallIcon fontSize='' className="call-icon" />}
        {callType === 2 && < VideocamIcon fontSize='' className="videoCam" />}

        {(type === 1 && status === 1) && < DoneIcon fontSize='' className="message-sent" />}
        {(type === 1 && status === 2) && < DoneAllIcon fontSize='' className="message-delivered" />}
        {(type === 1 && status === 3) && < DoneAllIcon fontSize='' className="message-seen" />}
        {type === null && <div className='unread'><span>{}</span></div>}
      </div>
    </div>
  )
}

export default ContactItem;
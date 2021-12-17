import CallIcon from '@mui/icons-material/Call';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import VideocamIcon from '@mui/icons-material/Videocam';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import img from 'pages/Home-Page/profile-picture/profileImage';

const ContactItem = ({ name, message, time, callIcon, callMade, callReceived, videoCam, done, doneAll }) => {
  return (
    <div className="contact">
      <div className="left">
        <img src={img} className='profile-picture'/>
        <div className="name-message">
          <div className="name">{name}</div>
          <p className='message'>{message}</p>
        </div>
      </div>
      <div className="right">
        {time && <div className='time'>{time}</div>}
        {callMade && <div className="callMade">< CallMadeIcon fontSize='' /></div>}
        {callReceived && <div className="callReceived">< CallReceivedIcon fontSize='' /></div>}
        {callIcon && <div className="call-icon">< CallIcon fontSize='' /></div>}
        {videoCam && <div className="videoCam">< VideocamIcon fontSize='' /></div>}
        {done && <div className="message-sent">< DoneIcon fontSize='' /></div>}
        {doneAll && <div className="message-delivered">< DoneAllIcon fontSize='' /></div>}
      </div>
    </div>
  )
}

export default ContactItem;
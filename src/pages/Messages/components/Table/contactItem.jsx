import CallIcon from '@mui/icons-material/Call';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import VideocamIcon from '@mui/icons-material/Videocam';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import img from 'pages/Home-Page/profile-picture/profileImage';

const ContactItem = ({name, surname, message, time, callType, messageType, type, status }) => {

  return (
    <div className="econtact" onClick={(e) => {console.log(name)}}>
      <div className="eleft">
        <img src={img} className='eprofile-picture' alt=''/>
        <div className="ename-message">
          <div className="ename">{name} {surname}</div>
          <p className='emessage'>{message}</p>
        </div>
      </div>
      <div className="eright">
        {time && <div className='etime'>{time}</div>}

        {messageType === 1 && < CallMadeIcon fontSize='' className="ecallMade" />}
        {messageType === 2 && < CallReceivedIcon fontSize='' className="ecallReceived" />}
        
        {callType === 1 && < CallIcon fontSize='' className="ecall-icon" />}
        {callType === 2 && < VideocamIcon fontSize='' className="evideoCam" />}

        {(type === 1 && status === 1) && < DoneIcon fontSize='' className="emessage-sent" />}
        {(type === 1 && status === 2) && < DoneAllIcon fontSize='' className="emessage-delivered" />}
        {(type === 1 && status === 3) && < DoneAllIcon fontSize='' className="emessage-seen" />}
        {type === null && <div className='eunread'><span>{}</span></div>}
      </div>
    </div>
  )
}

export default ContactItem;
import CallIcon from '@mui/icons-material/Call';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import VideocamIcon from '@mui/icons-material/Videocam';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import img from 'pages/Home-Page/profile-picture/profileImage';
import { useDispatch } from 'react-redux';
import { setChatUser } from 'store/actions/actions';
import { useState } from 'react';

const ContactItem = ({ onClick, user, message, time, callType, messageType, type, status, onlineStatus, unreadMessageCount }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false)
  const [unselected, setUnSelected] = useState(true)


  const handleSelected = () => {
    setSelected(!selected);
    setUnSelected(!unselected);
  }

  return (
    <div className={`econtact`} onClick={(e) => {
      dispatch(setChatUser(user));
      if(window.location.pathname === '/messages') {
        e.currentTarget.classList.add("selected")
        console.log(e.)
        // handleSelected()
        // console.log(selected)
      }
    }}>
      <div className="eleft">
        {onlineStatus && <div className="online-status"></div>}
        <img src={img} className='eprofile-picture' alt='' />
        <div className="ename-message">
          <div className="ename">{user?.name} {user?.surname}</div>
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
        {type === 2 && <div className='eunreadMessageCount'><span>{unreadMessageCount}</span></div>}

      </div>
    </div>
  )
}

export default ContactItem;
import CallIcon from '@mui/icons-material/Call';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import VideocamIcon from '@mui/icons-material/Videocam';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Table = ( {className} ) => {
  // const {time, callIcon, callMade, callReceived, videoCam} = className
  const [time, callIcon, videoCam, callMade, callReceived, messageSent, messageDelivered] = [className]
  console.log(time)
  
  return (
    <>
      <div className="contact-list">
        <div className="contact">
          <div className="left">
            <img src='' className='profile-picture' alt="" />
            <div className="name-message">
              <div className="name">Testov</div>
              <p className='message'>Test?</p>
            </div>
          </div>
          <div className="right">

            { time && <div className='time'>Test, 8:56pm</div> }
            { callIcon && <div className="call-icon">< CallIcon /></div> }
            { callMade && <div className="callMade">< CallMadeIcon /></div> }
            { callReceived && <div className="callReceived">< CallReceivedIcon /></div>}
            { videoCam && <div className="videoCam">< VideocamIcon /></div>}
            { messageSent && <div className="message-sent">< DoneIcon /></div>}
            { messageDelivered && <div className="message-delivered">< DoneAllIcon /></div>}

          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
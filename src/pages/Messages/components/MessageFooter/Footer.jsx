import MessageIcon from '@mui/icons-material/Message';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MicIcon from '@mui/icons-material/Mic';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const MessageFooter = () => {
    return (
        <div class="message-input">
        <div class="input-container">
          <span><MessageIcon className="fa fa-message" /></span>
          <input className="message-text-input" type="text" />
          <span><SentimentSatisfiedAltIcon class="fa fa-smile" /></span>
          <span><CameraAltIcon className="fa fa-cam" /></span>
        </div>
        <div className="mic-icon"><MicIcon className="fa fa-mic"/></div>
      </div>
    )
}

export default MessageFooter;
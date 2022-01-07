import MessageIcon from "@mui/icons-material/Message";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const MessageFooter = () => {
  return (
    <div className="message-footer">
        <div class="input-container">
          <span>
            <MessageIcon className="icon icon-message" />
          </span>
          <input className="message-text-input" type="text" />
          <span>
            <SentimentSatisfiedAltIcon class="icon icon-smile" />
          </span>
          <span>
            <CameraAltIcon className="icon icon-cam" />
          </span>
        </div>
        <div className="mic-icon">
          <MicIcon className="icon icon-mic" />
        </div>
    </div>
  );
};

export default MessageFooter;

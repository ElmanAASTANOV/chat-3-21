import img from "../../profile-picture/profileImage";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from '@mui/icons-material/Videocam';

const MessageHeader = ({ profile_photo }) => {
  return (
    <div class="messages-header">
      <div class="profile-details">
        <div class="image-container">
          <img src={img} alt="profile" />
          <div class="online-indicator"></div>
        </div>
        <div class="profile-title">
          <p>Swathi</p>
          <small>Online</small>
        </div>
      </div>
      <div class="actions">
        <span><CallIcon className="fa"/></span>
        <span><VideocamIcon className="fa" /></span>
        <div className="ethree-dots">
          <span className="edot"></span>
          <span className="edot"></span>
          <span className="edot"></span>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;

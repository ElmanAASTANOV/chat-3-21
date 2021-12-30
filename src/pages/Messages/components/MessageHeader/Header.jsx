import img from "../../profile-picture/profileImage";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from '@mui/icons-material/Videocam';

const MessageHeader = ({ profile_photo }) => {
  return (
    <div className="messages-header">
      <div className="profile-details">
        <div className="image-container">
          <img src={img} alt="pic" />
          <div className="online-indicator"></div>
        </div>
        <div className="profile-title">
          <p>Swathi</p>
          <small>Online</small>
        </div>
      </div>
      <div className="actions">
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

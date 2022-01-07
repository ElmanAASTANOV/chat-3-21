import MessageIcon from "@mui/icons-material/Message";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useRef } from 'react';

const MessageFooter = ({ setMessages }) => {
  const inputRef = useRef();
  return (
    <div className="message-footer">
      <div className="input-container">
        <span>
          <MessageIcon className="icon icon-message" />
        </span>
        <input ref={inputRef} className="message-text-input" type="text" />
        <span>
          <SentimentSatisfiedAltIcon className="icon icon-smile" />
        </span>
        <span>
          <CameraAltIcon className="icon icon-cam" />
        </span>
      </div>
      <div className="mic-icon" onClick={() => {
        const socket = window.socket;
        let text = inputRef.current.value;
        if (socket && !!text) {
          socket.send(JSON.stringify({
            id: 4,
            message: text
          }))
          setMessages(old => {
            let copyArray = [...old];
            copyArray.push({
              data: text,
              date: "",
              type: 2,
            })
            return copyArray
          });
          inputRef.current.value = "";
        }
      }}>
        <MicIcon className="icon icon-mic" />
      </div>
    </div>
  );
};

export default MessageFooter;

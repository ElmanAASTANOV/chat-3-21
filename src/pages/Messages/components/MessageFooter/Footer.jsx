import MessageIcon from "@mui/icons-material/Message";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useRef } from 'react';
import {useSelector} from 'react-redux';
import {getChatUser} from 'store/selectors/selectors';

const MessageFooter = ({ setMessages }) => {
  const inputRef = useRef();
  const user = useSelector(getChatUser)
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
            id: user.id,
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

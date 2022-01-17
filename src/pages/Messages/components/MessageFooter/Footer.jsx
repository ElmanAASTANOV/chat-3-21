import MessageIcon from "@mui/icons-material/Message";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getChatUser } from 'store/chatUser/chatUser.selectors';
import { addNewMessage } from 'store/addNewMessage/addNewMessage.actions';

const MessageFooter = () => {
  const inputRef = useRef();
  const user = useSelector(getChatUser)
  const dispatch = useDispatch();
  return (
    <div className="message-footer">
      <div className="input-container">
        <span>
          <MessageIcon className="icon icon-message" />
        </span>
        <input ref={inputRef} onKeyDown={function(event){
          if (event.code === "Enter") {

            let text = event.currentTarget.value;
            const socket = window.socket;
            if (socket && !!text) {
              socket.send(JSON.stringify({
                id: user.id,
                message: text
              }))
              dispatch(addNewMessage({
                content: text,
                date: "",
                type: 2,
                oppositeSideId: user.id,
              }))
              inputRef.current.value = "";
            }
          }

        }} className="message-text-input" type="text" />
        <span>
          <SentimentSatisfiedAltIcon className="icon icon-smile" />
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

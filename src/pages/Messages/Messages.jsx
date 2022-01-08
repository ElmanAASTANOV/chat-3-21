import { useState, useEffect } from "react";
import SearchBar from 'components/SearchBar';
import Groups from "pages/Home-Page/components/Groups";
import Recents from "pages/Home-Page/components/Recents";
import { ContactItem } from 'components/Table';
import MessageHeader from "./components/MessageHeader";
import MessageText from "./components/MessageText";
import MessageFooter from "./components/MessageFooter";
// import { getMessages } from "api/messages";
import { LS } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from 'store/selectors/selectors';
import { appConfig } from 'config';
import { addNewMessage } from "store/actions/actions";

function Messages() {
  const [messages, setMessages] = useState([]);
  const userData = JSON.parse(LS.getItemLocalStorage(appConfig.userData))
  const chatUser = useSelector(selectors.getChatUser)
  const recents = useSelector(selectors.getRecents)
  const dispatch = useDispatch();

  useEffect(() => {
    if (chatUser)
      setMessages(chatUser.messages)
  }, [chatUser, recents])

  useEffect(() => {
    window.socket = new WebSocket(`ws://10.50.93.33:3003/?id=${userData.id}`)

    window.socket.addEventListener("message", function (message) {
      const recived = JSON.parse(message.data)
      dispatch(addNewMessage({ oppositeSideId: recived.from, content: recived.message, type: 1, date: "" }))
    })

    return () => {
      window.socket.close();
      window.socket = undefined;
    }
  }, [userData.id, dispatch])
  // useEffect(() => {
  //   getMessages()
  //     .then((res) => setMessages(res))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="messages-page">
      <SearchBar />
      <Groups />
      <Recents onRender={(data, index) => {
        return (<ContactItem
          selected={data.user.id === chatUser?.id}
          key={index}
          user={{ ...data.user, messages: data.message }}
          message={
            data.message[data.message?.length - 1]?.content
          }
          unreadMessageCount={
            data.message.filter(obj => obj.type === 1).length
          }
          time={data?.message[data.message.length - 1]?.date}
          status={data.message[data.message.length - 1]?.status}
          type={data.message[data.message.length - 1]?.type}
        />)
      }} />

      {
        chatUser &&
        <div className="messages">
          <MessageHeader />
          <div className="message-content">
            {messages.map((message, index) => (
              <MessageText key={index} content={message.content} time={message.date} type={message.type} />
            ))}
          </div>
          <MessageFooter setMessages={setMessages} />
        </div>
      }
    </div>
  );
}

// test for push
export default Messages;

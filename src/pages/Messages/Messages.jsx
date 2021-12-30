import SearchBar from 'components/SearchBar';
import Groups from "pages/Home-Page/components/Groups";
import Recents from "pages/Home-Page/components/Recents";
import MessageHeader from "./components/MessageHeader";
import MessageFooter from "./components/MessageFooter";


function Messages() {

  return (
    <div className="messages-page">
      <SearchBar />
      <Groups />
      <Recents />

      <div className="messages">
        <MessageHeader />
        <div className="message-content">
                    <div className="message-line left">
                        <p className="message">Hey There !</p>
                        <small className="time">Today, 2:01pm</small>
                    </div>
                    <div className="message-line left">
                        <p className="message">How are you doing?</p>
                        <small className="time">Today, 2:02pm</small>
                    </div>
                    <div className="message-line right">
                        <p className="message">Hello...</p>
                        <small className="time">Today, 2:12pm</small>
                    </div>
                    <div className="message-line right">
                        <p className="message">I am good  and hoew about you?</p>
                        <small className="time">Today, 2:12pm</small>
                    </div>
                    <div className="message-line left">
                        <p className="message">I am doing well. Can we meet up tomorrow?</p>
                        <small className="time">Today, 2:13pm</small>
                    </div>
                    <div className="message-line right">
                        <p className="message">Sure!</p>
                        <small className="time">Today, 2:14pm</small>
                    </div>
                </div>
        <MessageFooter />
      </div>
    </div>
  );
}

export default Messages;

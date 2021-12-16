import Table from './components/Table';
import Topbar from './components/Topbar';
import { dummyData } from './DummyData';

const HomePage = () => {

const {groups, recents, friends, recentCalls} = dummyData

// const classNames = {
//   time: 'time',
//   callIcon: 'call-icon',
//   videoCam: 'videoCam',
//   callMade: 'callMade',
//   callReceived: 'callReceived',
//   messageSent: 'message-sent'
// }

const [time, callIcon, videoCam, callMade, callReceived, messageSent, messageDelivered] = [true, true, true, true, true, true, true]


return (
  <div className="homePage">

    <div className="searchBar">
      <Topbar />
    </div>

    <div className="groups">
      <Topbar heading='Groups' />
      <Table />
    </div>

    <div className="recents">
      <Topbar heading='Recents' />
      <Table className = {time, messageSent}/>
    </div>

    <div className="friends">
      <Topbar heading='Friends' />
      <Table className = {time}/>
    </div>

    <div className="recentCalls">
      <Topbar heading='Recent Calls' />
      <Table className = {[time, callIcon, callMade, callReceived, videoCam]}/>
    </div>
  </div>);
}

export default HomePage;
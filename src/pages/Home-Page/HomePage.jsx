import Table, { ContactItem }  from './components/Table';
import Topbar from './components/Topbar';
import { dummyData } from './DummyData';

const HomePage = () => {

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
      <Table>{ 
      dummyData.recents.map(data => <ContactItem name = {data.name} message = {data.message} />)
      }</Table>
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
import Data from './components/Data';
import Topbar from './components/Topbar';
import { dummyData } from './DummyData';

const HomePage = () => {

const {groups, recents, friends, recentCalls} = dummyData

return (
  <div className="homePage">
    <div className="searchBar">
      <Topbar />
    </div>
    <div className="groups">
      <Topbar heading='Groups' />
      <Data />
    </div>
    <div className="recents">
      <Topbar heading='Recents' />
      <Data />
    </div>
    <div className="friends">
      <Topbar heading='Friends' />
      <Data />
    </div>
    <div className="groupCalls">
      <Topbar heading='Recent Calls' />
      <Data />
    </div>
  </div>);
}

export default HomePage;
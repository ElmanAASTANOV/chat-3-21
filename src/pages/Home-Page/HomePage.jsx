import Table, { ContactItem } from './components/Table';
import Topbar from './components/Topbar';
import { dummyData } from './DummyData';

const HomePage = () => {

  return (
    <div className="homePage">

      <div className="searchBar">
        <Topbar heading = 'Search' searchIcon = 'true'/>
      </div>

      <div className="groups">
        <Topbar heading='Groups' />
        <Table>
          {
            dummyData.groups.map(data => <ContactItem
              name={data.name}
              message={data.message} />)
          }
        </Table>
      </div>

      <div className="recents">
        <Topbar heading='Recents' />
        <Table>
          {
            dummyData.recents.map(data => <ContactItem
              name={data.name}
              message={data.message}
              time={data.time}
              done={data.done}
              doneAll={data.doneAll} />)
          }
        </Table>
      </div>

      <div className="friends">
        <Topbar heading='Friends' />
        <Table>
          {
            dummyData.friends.map(data => <ContactItem
              name={data.name}
              message={data.message}
              time={data.time} />)
          }
        </Table>
      </div>

      <div className="recentCalls">
        <Topbar heading='Recent Calls' />
        <Table>
          {
            dummyData.recentCalls.map(data => <ContactItem
              name = {data.name}
              message = {data.time}
              callIcon = {data.callIcon}
              videoCam = {data.videoCam}
              callReceived = {data.callReceived}
              callMade = {data.callMade} />)
          }
        </Table>
      </div>
    </div>);
}

export default HomePage;
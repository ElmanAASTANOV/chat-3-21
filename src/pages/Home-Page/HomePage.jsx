import SearchBar from 'components/SearchBar';
import Groups from './components/Groups';
import Recents from './components/Recents';
import Friends from './components/Friends';
import RecentCalls from './components/RecentCalls';

const HomePage = () => {

  return (
    <div className="ehomePage">
      <SearchBar />
      <Groups />
      <Recents />
      <Friends />
      <RecentCalls />
    </div>);
}

export default HomePage;
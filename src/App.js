import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import StatisticsList from './components/Statistics/StatisticsList';
import statisticalData from './components/Statistics/statisticalData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatisticsList title="Upload stats" stat={statisticalData} />
      <StatisticsList stat={statisticalData} />

      <FriendList friendsArr={friends} />
    </div>
  );
}

export default App;

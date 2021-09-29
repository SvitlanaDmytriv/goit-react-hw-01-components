import './App.css';
import Profile from './components/Profile/Profile';
import user from './user.json';
import StatisticsList from './components/Statistics/StatisticsList';
import statisticalData from './statisticalData.json';

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
    </div>
  );
}

export default App;

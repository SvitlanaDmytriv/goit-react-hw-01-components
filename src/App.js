import './App.css';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import StatisticsList from './components/Statistics/StatisticsList';
import statisticalData from './components/Statistics/statisticalData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <div>
      Task 1
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      Task 2
      <StatisticsList title="Upload stats" stat={statisticalData} />
      <StatisticsList stat={statisticalData} />
      Task 3
      <FriendList friendsArr={friends} />
      Task4
      <TransactionHistory transactions={transactions} />;
    </div>
  );
}

export default App;

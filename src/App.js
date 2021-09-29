import './App.css';
import user from './user.json';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div>
      <ul>
        <li>
          1.
          <Profile
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </li>
      </ul>
    </div>
  );
}

export default App;

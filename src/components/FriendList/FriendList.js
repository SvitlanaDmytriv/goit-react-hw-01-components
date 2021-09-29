import PropTypes from 'prop-types';

export default function FriendList({ friendsArr }) {
  return (
    <ul className="friend-list">
      {friendsArr.map(({ avatar, name, isOnline, id }) => (
        <li className="item" key={id}>
          {/* <span  className={isOnline ? styles.statusOnline : styles.statusOffline} ></span> */}
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friendsArr: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

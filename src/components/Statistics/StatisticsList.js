// import Statistics from "./Statistics";
import PropTypes from 'prop-types';

export default function StatisticsList({ title, stat }) {
  return (
    <section className="statistics">
      <h2 className="title">
        {' '}
        {title ? <h2 className="title">{title}</h2> : null}
      </h2>
      <ul className="stat-list">
        {stat.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

StatisticsList.defaultProps = {
  title: '',
};

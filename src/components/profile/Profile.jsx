import PropTypes from 'prop-types';
import 'components/profile/Profile.css';

// function card rendering
export default function Profile({ avatar, username, tag, location, followers, views, likes }) {
  return (
    <div className="prof__profile">
      <div className="prof__description">
        <img
          src={avatar}
          alt={username}
          className="prof__avatar"
        />
        <p className="prof__name">{username}</p>
        <p className="prof__tag">@{tag}</p>
        <p className="prof__location">{location}</p>
      </div>

      <ul className="prof__stats">
        <li>
          <span className="prof__label">Followers</span>
          <span className="prof__quantity">{addComma(followers)}</span>
        </li>
        <li>
          <span className="prof__label">Views</span>
          <span className="prof__quantity">{addComma(views)}</span>
        </li>
        <li>
          <span className="prof__label">Likes</span>
          <span className="prof__quantity">{addComma(likes)}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}

function addComma(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
} 
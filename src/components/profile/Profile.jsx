import PropTypes from 'prop-types';
import 'components/profile/Profile.css';

// function card rendering
export default function Profile({ avatar, username, tag, location, followers, views, likes }) {
  return (
    <div class="prof__profile">
      <div class="prof__description">
        <img
          src={avatar}
          alt={username}
          class="prof__avatar"
        />
        <p class="prof__name">{username}</p>
        <p class="prof__tag">@{tag}</p>
        <p class="prof__location">{location}</p>
      </div>

      <ul class="prof__stats">
        <li>
          <span class="prof__label">Followers</span>
          <span class="prof__quantity">{addComma(followers)}</span>
        </li>
        <li>
          <span class="prof__label">Views</span>
          <span class="prof__quantity">{addComma(views)}</span>
        </li>
        <li>
          <span class="prof__label">Likes</span>
          <span class="prof__quantity">{addComma(likes)}</span>
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
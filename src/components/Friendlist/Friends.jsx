import PropTypes from 'prop-types';
import 'components/Friendlist/FriendList.css';

export default function Friends ({ avatar, name, isOnline }) {

    return (
        <li className="friends__item" >
            <span className="friends__status" style={onlineCheck(isOnline)}></span>
            <img className="friends__avatar" src={avatar} alt="User avatar" width="48" />
            <p className="friends__name">{name}</p>
        </li>
            )
}

Friends.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

function onlineCheck(param) {
    return {background: (param? "green":"red")}
}
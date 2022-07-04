import css from "components/friendslist/Item/Item.module.css";
import PropTypes from 'prop-types'; 

export const FriendList = ({ friend: { avatar, name, isOnline } }) => {
    return (
    <li className={css.item}>
        <span className={(isOnline ? css.isOnline : css.notOnline)}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendList.propTypes = {
    friend: PropTypes.object.isRequired,
}
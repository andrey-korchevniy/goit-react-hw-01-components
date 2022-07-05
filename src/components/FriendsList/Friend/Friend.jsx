import css from "./Friend.module.css";
import PropTypes from 'prop-types'; 

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
    return (
    <li className={css.item}>
        <span className={(isOnline ? css.isOnline : css.notOnline)}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

Friend.propTypes = {
    friend: PropTypes.object.isRequired,
}
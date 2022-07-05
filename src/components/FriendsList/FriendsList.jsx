import { Friend } from './Friend/Friend';
import css from "./FriendsList.module.css";
import PropTypes from 'prop-types'; 

export const FriendsList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(friend => {
                return (
                    <Friend key={friend.id} friend={friend} />
                )
            })
            }
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
}
import { FriendList } from 'components/friendslist/Item/Item';
import css from "components/friendslist/List/List.module.css";
import PropTypes from 'prop-types'; 

export const FriendsList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(friend => {
                return (
                    <FriendList key={friend.id} friend={friend} />
                )
            })
            }
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
}
import Friends from "components/Friendlist/Friends";
import "components/Friendlist/FriendList.css";

function FriendList({ friends }) {
    return (
        <section className="friends__section">
            <h2 className="friends__title">3 - Список друзей</h2>
            <ul className="friends__list">
                {friends.map(friend => (
                    <Friends key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                ))}
            </ul>
        </section>
    )
}

export default FriendList;
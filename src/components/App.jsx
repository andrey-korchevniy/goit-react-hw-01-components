import { ProfileCard } from 'components/profile/List/List';
import { StatSection } from 'components/statsection/Section/Section';
import { FriendsList } from 'components/friendslist/List/List';
import { Transactions } from 'components/transactions/Table/Table';
import users from 'path/user.json';
import data from 'path/data.json';
import friends from 'path/friends.json';
import transactions from 'path/transactions.json';

export const App = () => {
    return (
        <>
            {/* реализован через styled-components и box + theme - как говорил Репета на лекции*/}
            <ProfileCard users={users} />

            {/* реализован через module css */}
            <StatSection data={data} title={"Upload stats"} />

            {/* реализован через module css */}
            <FriendsList friends={friends} />

            {/* реализован через styled-components и box + theme - как говорил Репета на лекции*/}            
            <Transactions transactions={transactions} />
        </>
    )
}
import { ProfileCard } from 'components/ProfileCard/ProfileCard';
import { StatSection } from 'components/StatSection/StatSection';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { Transactions } from 'components/Transactions/Transactions';
import users from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

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
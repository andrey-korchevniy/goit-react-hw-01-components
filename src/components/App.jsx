import Profile from "components/profile/Profile";
import StatisticList from "components/statistics/StatisticList";
import user from "path/to/user";
import data from "path/to/data";
import friends from "path/to/friends";
import transactions from "path/to/transactions.json";
import Section from "components/section";
import FriendList from "components/Friendlist/FriendList";
import TransactionHistoryList from "components/TransactionHistory/TransactionHistoryList";
export default function App() {
  return (
    <div>
      <Section title="1- Профиль социальной сети">
        {user.map(data => (
          <Profile
            key={data.id}
            avatar={data.avatar}
            username={data.username}
            tag={data.tag}
            location={data.location}
            followers={data.stats.followers}
            views={data.stats.views}
            likes={data.stats.likes}
          />
        ))}
      </Section>
          
      <StatisticList items={data} title="2- Секция статистики" />

      <FriendList friends={friends} />
      
      <TransactionHistoryList transactions={transactions} />;
    </div>
  );
};

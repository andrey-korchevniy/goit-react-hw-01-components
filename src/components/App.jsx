import Profile from "components/profile/Profile";
import user from "path/to/user";
import Section from "components/section";

// let data = user;

export default function App() {
  return (
    <div>
      <Section title="Профиль социальной сети">
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
          
      <Section title="Профиль социальной сети">
          ljhlhlhjl
      </Section>
    </div>
  );
};

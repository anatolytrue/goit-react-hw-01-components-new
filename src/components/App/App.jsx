import { Container, SectionHomework } from "./App.styled.jsx";
import { Profile } from "components/Profile";
import { Statistics } from "components/Statistics/Statistics.jsx";
import { FriendList } from "components/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory.jsx";
import user from "../../data/user.json";
import data from "../../data/data.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";

export const App = () => {
  return (
    <Container>
      <SectionHomework>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </SectionHomework>
      <SectionHomework>
        <Statistics
          title="Upload stats" stats={data} 
        />
      </SectionHomework>
      <SectionHomework>
        <FriendList
          friends={friends} 
        />
      </SectionHomework>
      <SectionHomework>
        <TransactionHistory
          items= {transactions}
        />
      </SectionHomework>
      
    </Container>
  );
};

import { Container } from "./AppStyled";
import user from "data/user.json";
import PropTypes from 'prop-types';
import {Profile} from './Profile';
import { GlobalStyle } from "./constants/Global.Styles";
import { Statistics } from "./Statistics";
import { data } from "data/data";
import { FriendList } from "./FriendList";
import friends from "data/friends.json"
import { TransactionsHistory } from "./TransactionHistory";
import transactions from "data/transactions.json"

export const App = () => {
  return (
    <Container>
      <GlobalStyle/>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<FriendList friends = {friends}/>
<TransactionsHistory transactions={transactions}/>
    </Container>
  );
};


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}
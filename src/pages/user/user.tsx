import { userCards } from '../../data/userCard';
import UserCardContainer from './userCardContainer';
import UserTable from './userTable';


const UserPage = () => {
  return (
    <section className="user-page">
      <h5>User</h5>

      <UserCardContainer cards={userCards} />

      <UserTable />
    </section>
  );
};

export default UserPage;

import { userCards } from '../../data/userCard';
import UserCardContainer from './userCardContainer';
import UserTable from './userTable';

interface UsersDashboardPageProps {
  isInteractive: boolean;
  pageTitle: string;
}


const UsersDashboardPage = ({
  isInteractive,
  pageTitle,
}: UsersDashboardPageProps) => {
  return (
    <section className="user-page">
      <h5>{pageTitle}</h5>

      <UserCardContainer cards={userCards} />

      <UserTable isInteractive={isInteractive} />
    </section>
  );
};

export default UsersDashboardPage;

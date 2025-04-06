
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Welcome from './Welcome';

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Your at Home!</h1> {}
      <Welcome userName={user?.email} />
    </div>
  );
}
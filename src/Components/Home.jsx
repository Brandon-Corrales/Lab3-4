import Welcome from './Welcome';

export default function Home({ email }) {
  return (
    <div>
      <h1>Your at Home!</h1>
      <Welcome userName={email} />
    </div>
  );
}


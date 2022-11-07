import User from './components/user';

const UserList = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};

export default UserList;

export async function getStaticProps() {
  const reponse = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await reponse.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}

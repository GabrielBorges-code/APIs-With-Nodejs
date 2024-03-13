import { gql, useQuery } from "@apollo/client";
import NewUserForm from "./components/NewUserForm";

type User = {
  id: string;
  name: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const GET_USER = gql`
  query {
    getUser {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{ getUser: User[] }>(GET_USER);

  if (loading) return <p>carregando...</p>;

  return (
    <>
      <p>Lista de usuários</p>

      <ul style={{ listStyle: "none" }}>
        {data &&
          data?.getUser?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>

      <br />

      <NewUserForm />
    </>
  );
}

export default App;

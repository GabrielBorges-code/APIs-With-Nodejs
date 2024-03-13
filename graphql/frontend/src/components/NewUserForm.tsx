import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { GET_USER } from "../App";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      name
      id
    }
  }
`;

const NewUserForm = () => {
  const [name, setName] = useState("");
  const [createUser] = useMutation(CREATE_USER); // { data, loading, error }

  async function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if (!name) return;

    const { data } = await createUser({
      variables: {
        name,
      },
      refetchQueries: [GET_USER]
    });

    console.log("usuário criado: ", data);
  }

  return (
    <form onSubmit={handleCreateUser}>
      <label htmlFor="name">Digite um nome:</label>

      <br />

      <input
        id="name"
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <br />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default NewUserForm;

type Props = {
  name: string | undefined;
  foto: string | undefined;
  bio: string | undefined;
};

export const User: React.FC<Props> = ({ name, foto, bio }) => {
  return (
    <div>
      <p>Nome do Usuário: {name}</p>
      <img src={foto} alt={name} />
      <p>Bio: {bio}</p>
      <p>Bem vindo ao sistema</p>
    </div>
  );
};

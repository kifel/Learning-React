type Props = {
  name: string;
  foto: string | undefined;
};

export const User: React.FC<Props> = ({ name, foto }) => {
  return (
    <div>
      <p>Nome do Usuário: {name}</p>
      <img src={foto} alt={name} />
      <p>Bem vindo ao sistema</p>
    </div>
  );
};

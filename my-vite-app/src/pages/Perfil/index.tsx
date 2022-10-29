import styles from './perfil.module.css';

type Props = {
  name: string | undefined;
  login: string | undefined;
  foto: string | undefined;
  bio: string | undefined;
};

export const User: React.FC<Props> = ({ name, login,foto, bio }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.user}>Nome do Usuário: {login}</p>
      <img src={foto} alt={name} />
      <p>Bio: {bio}</p>
      <p>Bem vindo ao sistema {name}</p>
    </div>
  );
};

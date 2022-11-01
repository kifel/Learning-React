import styles from './perfil.module.css';

export const Pages = ({ name, login,foto, bio }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.user}>Nome do Usuário: {login}</p>
      <img src={foto} alt={name} />
      <p>Bio: {bio}</p>
      <p>Bem vindo ao sistema {name}</p>
    </div>
  );
}

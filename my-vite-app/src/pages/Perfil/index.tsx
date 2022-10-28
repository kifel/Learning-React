interface Props {
    name: string;
    foto: string | undefined;
}

const User: React.FC<Props> = ({ name, foto }) =>{
    return (
        <div>
            <p>Nome do Usuário: {name}</p>
            <img src={foto} alt="Foto do usuário" />
            <p>Bem vindo ao sistema</p>
        </div>
    );
}

export default User;
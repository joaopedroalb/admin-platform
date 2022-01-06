import Layout from "../components/template/Layout";
import useAuthData from "../data/hook/useAuthData";


export default function Profile(){
    const {user} = useAuthData()
    
    function getName(){
        return (user?.name != '' && user) ? user?.name: "Usuário"
    }

    return(
        <Layout title={`Perfil do ${getName()}`}
                subtitle="Administre as suas informações ..."        
        >
            <h1>user content</h1>
        </Layout>
    )
}
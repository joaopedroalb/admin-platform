import Layout from "../components/template/Layout";
import useAuthData from "../data/hook/useAuthData";


export default function Profile(){
    const {user} = useAuthData()
    
    return(
        <Layout title={`Perfil do ${user?.name??"Usuário"}`}
                subtitle="Administre as suas informações ..."        
        >
            <h1>user content</h1>
        </Layout>
    )
}
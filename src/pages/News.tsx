import Layout from "../components/template/Layout";
import { AppConsume } from "../data/context/AppContext";
import useAppData from "../data/hook/useAppData";

export default function News(){
    const data = useAppData()

    return(
        <Layout title="News" subtitle="Creating template news">
            <h3>News content</h3>
        </Layout>
    )
}
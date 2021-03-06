import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconWarn } from "../components/icons";
import useAuthData from "../data/hook/useAuthData";

export default function Authentication(){
    const [error,setError] = useState<string>('')
    const [status,setStatus] = useState<'login'|'cadastro'>('login')
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {loginGoogle,login,register} = useAuthData()

    async function submitForms(){
        try{

            if(status === 'login'){
                if(login)
                await login(email,password)
            }else{
                if(register)
                await register(email,password)
            }

        }catch(e:any){
            showError(e?.message ?? "Erro desconhecido !",7)
        }
            
    }

    function changeStatus(state:'login'|'cadastro'){
        setEmail('')
        setPassword('')
        setStatus(state)
    }

    function showError(msg:string, timeSeconds=5){
        setError(msg)
        setTimeout(()=>setError(''),timeSeconds*1000)
    }

    return(
        <div className="flex h-screen items-center justify-center">
            <div className="hidden md:block w-1/2 lg:w-2/3">
                <img 
                    src="https://source.unsplash.com/random" 
                    alt="Login Image"
                    className="h-screen w-full object-cover"
                />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
                <h1 className={`
                    text-2xl font-semibold mb-5
                `}>
                    {status==='login'? 'Entre com Sua Conta ': 'Cadastre-se na Plataforma'}
                </h1>

                {error!=''&&<div className={`
                    flex items-center
                    bg-red-400 text-white py-3 px-5 my-2
                    border border-red-700 rounded-lg
                `}>
                    {IconWarn}
                    <span className="ml-3">{error}</span>
                </div>}

                <AuthInput 
                    label="Email"
                    type="email"
                    value={email}
                    changeValue={setEmail}
                    required
                />
                <AuthInput 
                    label="Password"
                    type="password"
                    value={password}
                    changeValue={setPassword}
                    required
                />

                <button onClick={submitForms} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-full px-4 py-3 mt-6
                `}>
                    {status === 'login' ? 'Entrar':'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full"/>

                <button onClick={loginGoogle} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-full px-4 py-3
                `}>
                    Entrar com Google
                </button>

            {
               status === "login" ? (
                <p className="mt-8">
                    Novo por aqui? 
                    <a onClick={()=>changeStatus("cadastro")}
                        className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer ml-1
                        `}>Crie uma conta gratuitamente</a>
                </p>
               ) :
               (
                <p className="mt-8">
                    J?? faz parte da nossa plataforma?
                    <a onClick={()=>changeStatus("login")}
                        className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer ml-1
                    `}>Entre com sua conta</a>
                </p>
               )
            }

            </div>
        </div>
    )
}
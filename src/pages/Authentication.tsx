import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Authentication(){
    const [status,setStatus] = useState<'login'|'cadastro'>('login')
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    function submitForms(){
        if(status === 'login'){
            console.log(`login com o email ${email} e a senha ${password}`)
        }else{
            console.log('cadastro')
        }
    }

    function changeStatus(state:'login'|'cadastro'){
        setEmail('')
        setPassword('')
        setStatus(state)
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
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {status === 'login' ? 'Entrar':'Cadastrar'}
                </button>

                <hr className="my-6 border-gray-300 w-full"/>

                <button onClick={submitForms} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
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
                    Já faz parte da nossa plataforma?
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
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

    return(
        <div className="flex flex-col h-screen items-center justify-center">
            <div className="w-1/2">
                <h1 className={`
                    text-xl font-semibold mb-5
                `}>
                    {status==='login'? 'Entre com Sua Conta ': 'Cadastre-se na Plataforma lider'}
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

            </div>
        </div>
    )
}
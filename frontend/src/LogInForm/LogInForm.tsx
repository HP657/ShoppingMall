import styles from "./LogInForm.module.css";
import { useState } from "react";

function LogInForm() {
    const [loginEmail, setLoginEmail] = useState<string>("");
    const [loginPw, setLoginPw] = useState<string>("");

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({ loginEmail, loginPw });
    };

    return (
        <>
            <h1>로그인</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    name="LoginEmail" 
                    placeholder="이메일"
                    value={loginEmail} 
                    onChange={(e) => setLoginEmail(e.target.value)} 
                /><br />
                <input 
                    type="password" 
                    name="LoginPw" 
                    placeholder="비밀번호"
                    value={loginPw} 
                    onChange={(e) => setLoginPw(e.target.value)} 
                /><br />
                <input type="submit" value="로그인하기" />
            </form>
        </>
    );
}

export default LogInForm;

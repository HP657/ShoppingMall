import styles from "./SignUpForm.module.css";
import { useState } from "react";

function SignUpForm() {
    const [userName, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({ userName, email, password, passwordConfirm });
    };

    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={handleSignUp}>
                <input 
                    type="text" 
                    name="UserName" 
                    placeholder="이름" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                /><br />
                <input 
                    type="email" 
                    name="Email" 
                    placeholder="이메일" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                /><br />
                <input 
                    type="password" 
                    name="Password" 
                    placeholder="비밀번호" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                /><br />
                <input 
                    type="password" 
                    name="PasswordConfirm" 
                    placeholder="비밀번호 확인" 
                    value={passwordConfirm} 
                    onChange={(e) => setPasswordConfirm(e.target.value)} 
                /><br />
                <input type="submit" value="회원가입" />
            </form>
        </>
    );
}

export default SignUpForm;

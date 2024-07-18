import styles from "./LogInForm.module.css";
import { useState } from "react";

function LogInForm() {
    const [loginEmail, setLoginEmail] = useState<string>("");
    const [loginPw, setLoginPw] = useState<string>("");

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({ loginEmail, loginPw });
        //axios.post()
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>로그인</h1>
            <form onSubmit={handleLogin}>
                <div className={styles["form-group"]}>
                    <input 
                        type="text" 
                        name="LoginEmail" 
                        placeholder="이메일"
                        className={styles["input-field"]}
                        value={loginEmail} 
                        onChange={(e) => setLoginEmail(e.target.value)} 
                    />
                </div>
                <div className={styles["form-group"]}>
                    <input 
                        type="password" 
                        name="LoginPw" 
                        placeholder="비밀번호"
                        className={styles["input-field"]}
                        value={loginPw} 
                        onChange={(e) => setLoginPw(e.target.value)} 
                    />
                </div>
                <input 
                    type="submit" 
                    value="로그인하기" 
                    className={styles["submit-button"]}
                />
            </form>
        </div>
    );
}

export default LogInForm;

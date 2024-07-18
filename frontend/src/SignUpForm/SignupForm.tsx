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
        <div className={styles.container}>
            <h1>회원가입</h1>
            <form onSubmit={handleSignUp}>
                <div className={styles["form-group"]}>
                    <input 
                        type="text" 
                        name="UserName" 
                        placeholder="이름" 
                        className={styles["input-field"]}
                        value={userName} 
                        onChange={(e) => setUserName(e.target.value)} 
                    />
                </div>
                <div className={styles["form-group"]}>
                    <input 
                        type="email" 
                        name="Email" 
                        placeholder="이메일" 
                        className={styles["input-field"]}
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className={styles["form-group"]}>
                    <input 
                        type="password" 
                        name="Password" 
                        placeholder="비밀번호" 
                        className={styles["input-field"]}
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div className={styles["form-group"]}>
                    <input 
                        type="password" 
                        name="PasswordConfirm" 
                        placeholder="비밀번호 확인" 
                        className={styles["input-field"]}
                        value={passwordConfirm} 
                        onChange={(e) => setPasswordConfirm(e.target.value)} 
                    />
                </div>
                <input 
                    type="submit" 
                    value="회원가입" 
                    className={styles["submit-button"]}
                />
            </form>
        </div>
    );
}

export default SignUpForm;

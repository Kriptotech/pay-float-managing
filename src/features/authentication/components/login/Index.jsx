import style from "./styles.module.css";
import Image from "./image.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function LoginContainer() {
    const navigate = useNavigate();
    const [ready, setReady] = useState(false);
    const [logAs, setLogAs] = useState("");

    function handleSubmit(params) {
        navigate("/dashboard");
    }

    return ready ? (
        <>
            <div className={style.login_container}>
                <div
                    className={style.login_container_left}
                    data-aos="fade-left"
                >
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h1>Entre como {logAs}</h1>
                        <p>Faça login na plataforma interna</p>
                        <input
                            required
                            type="number"
                            placeholder="Seu telefone"
                        />
                        <input
                            required
                            type="password"
                            placeholder="Sua senha"
                        />
                        <button>ENTRAR</button>
                    </form>
                </div>

                <div className={style.login_container_right}>
                    <img src={Image} alt="" />
                    <h1>Faça Login na plataforma</h1>
                    <p>
                        Siga as etapas para fazer login e então logue-se na
                        nossa plataforma
                    </p>
                </div>
            </div>
        </>
    ) : (
        <div className={style.select_login}>
            <h1>LOGAR COMO?</h1>
            <button
                onClick={() => {
                    setLogAs("Supervisor de operações");
                    setReady(true);
                }}
            >
                Supervisor de operações
            </button>

            <button
                onClick={() => {
                    setLogAs("Gerente financeiro");
                    setReady(true);
                }}
            >
                Gerente financeiro
            </button>

            <button
                onClick={() => {
                    setLogAs("Administrador");
                    setReady(true);
                }}
            >
                Administrador
            </button>

            <button
                onClick={() => {
                    setLogAs("Caixa/Funcionario");
                    setReady(true);
                }}
            >
                Funcionario
            </button>
        </div>
    );
}

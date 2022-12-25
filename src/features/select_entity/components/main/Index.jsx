import { useNavigate } from "react-router-dom";

import style from "./styles.module.css";

export function Main() {
    const navigate = useNavigate();

    return (
        <div className={style.select_entity}>
            <h1>DESEJA ADICIONAR?</h1>
            <button
                onClick={() => {
                    navigate("/register_entity", {
                        state: { entity: "Supervisor de operações" },
                    });
                }}
            >
                Supervisor de operações
            </button>

            <button
                onClick={() => {
                    navigate("/register_entity", {
                        state: { entity: "Gerente financeiro" },
                    });
                }}
            >
                Gerente financeiro
            </button>

            <button
                onClick={() => {
                    navigate("/register_entity", {
                        state: { entity: "Administrador" },
                    });
                }}
            >
                Administrador
            </button>

            <button
                onClick={() => {
                    navigate("/register_entity", {
                        state: { entity: "Caixa/Funcionario" },
                    });
                }}
            >
                Funcionario
            </button>
        </div>
    );
}

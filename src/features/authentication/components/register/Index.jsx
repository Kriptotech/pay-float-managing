import style from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { AccountHeader } from "../../../../components/account_header/Index";

export function Register() {
    const navigate = useNavigate();
    const location = useLocation();

    function handleSubmit(params) {
        params.preventDefault();
        // navigate("/dashboard");
    }

    return (
        <>
            <AccountHeader />
            <div className={style.register_container}>
                <div
                    className={style.register_container_left}
                    data-aos="fade-left"
                >
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h1>Registrar {location?.state?.entity}</h1>
                        <input required type="email" placeholder="e-mail" />
                        <input required type="text" placeholder="nome" />
                        <input required type="text" placeholder="BI" />
                        <input required type="number" placeholder="telefone" />
                        <input required type="password" placeholder="senha" />
                        <button>CADASTRAR</button>
                    </form>
                </div>
            </div>
        </>
    );
}

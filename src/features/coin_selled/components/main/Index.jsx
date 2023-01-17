import { useState } from "react";
import { useLocation } from "react-router-dom";

import style from "./styles.module.css";

export function Main() {
    // states
    const itemData = useLocation()?.state;
    const [costumersList, setCostumersList] = useState();

    return (
        <div className={style.relatory}>
            <div className={style.relatory_header}>
                <h1>Venda do Alberto</h1>
            </div>

            <div className={style.relatory_list_container}>
                <div className={style.relatory_list_box}>
                    <div>
                        <p>
                            Venda feita por: <span>Alberto</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Está vendendo dinheiro da carteira{" "}
                            <span>Paypal</span> para a carteira{" "}
                            <span>Mpesa</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Está vendendo: <span>230 USD</span> por{" "}
                            <span>1230mt</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Data em que a venda foi feita :{" "}
                            <span>12 de janeiro de 2023</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Vendeu para: <span>José</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Dados do josé: <br />
                            Mpesa: <span>847274278</span> <br />
                            Emola: <span>867274278</span> <br />
                            E-mail: <span>eejdsj@gmail.com</span> <br />
                        </p>
                    </div>
                    <div>
                        <p>
                            Dados do Alberto: <br />
                            Mpesa: <span>847274278</span> <br />
                            Emola: <span>867274278</span> <br />
                            E-mail: <span>eejdsj@gmail.com</span> <br />
                        </p>
                    </div>
                    <div>
                        <p style={{ color: "tomato" }}>
                            DICA: clica no botão CONFIRMAR PAGAMENTO para
                            confirmar que enviaste o dinheiro para essas pessoas
                        </p>
                    </div>
                    <div>
                        <button>CONFIRMAR PAGAMENTO</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

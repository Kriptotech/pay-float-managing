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
                <h1>Pedido de aprovação</h1>
            </div>

            <div className={style.relatory_list_container}>
                <div className={style.relatory_list_box}>
                    <div>
                        <p>
                            pedido feito por: <span>Alberto</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            Data em que o pedido foi feito :{" "}
                            <span>12 de janeiro de 2023</span>
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
                            DICA: clica no botão APROVAR para confirmar que
                            aprovas essa pessoa como um vendedor dentro da
                            plataforma
                        </p>
                    </div>
                    <div>
                        <button>APROVAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

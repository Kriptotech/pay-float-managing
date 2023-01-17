import { useNavigate } from "react-router-dom";

import style from "./styles.module.css";

export function Table() {
    const navigate = useNavigate();

    return (
        <div className={style.table}>
            <div className={style.table_container}>
                <h3>Aprovar pedido de se tornar vendedor:</h3>

                <div className={style.dark_item_invisible}>
                    <dl className={style.dark_item}>
                        <dt>Nome</dt>
                    </dl>
                    <dl className={style.dark_item}>
                        <dt>Telefone</dt>
                    </dl>
                    <dl className={style.dark_item}>
                        <dt>Email</dt>
                    </dl>
                    <dl className={style.dark_item}>
                        <dt>Idade</dt>
                    </dl>
                </div>

                {[1, 2, 3, 4, 5].map((item) => {
                    return (
                        <div>
                            <dl
                                className={style.litgh_item}
                                onClick={() => navigate("/aprove_seller")}
                                style={{ cursor: "pointer" }}
                            >
                                <dd>Alberto</dd>
                            </dl>
                            <dl
                                style={{
                                    color: "green",
                                    cursor: "pointer",
                                }}
                                className={style.litgh_item}
                                onClick={() => navigate("/aprove_seller")}
                            >
                                <dd>388438843</dd>
                            </dl>
                            <dl
                                className={style.litgh_item}
                                onClick={() => navigate("/aprove_seller")}
                                style={{ cursor: "pointer" }}
                            >
                                <dd>endndn@gmail.com</dd>
                            </dl>
                            <dl
                                className={style.litgh_item}
                                onClick={() => navigate("/aprove_seller")}
                                style={{ cursor: "pointer" }}
                            >
                                <dd>112</dd>
                            </dl>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

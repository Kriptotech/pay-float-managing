import {
    UserCirclePlus,
    List,
    XCircle,
    PlusCircle,
    HouseLine,
    CurrencyCircleDollar,
    CurrencyDollar,
    User,
} from "phosphor-react";
import { useState } from "react";

import style from "./styles.module.css";

export function AccountHeader() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <header className={style.main_header}>
            <nav>
                <div className={style.logo_container}>
                    <a href="/dashboard">PayFloat</a>
                </div>

                {!sidebarVisible ? (
                    <button onClick={() => setSidebarVisible(true)}>
                        <List />
                    </button>
                ) : (
                    <button onClick={() => setSidebarVisible(false)}>
                        <XCircle />
                    </button>
                )}

                {sidebarVisible && (
                    <div className={style.sidebar}>
                        <a href="/dashboard" className={style.sidebar_logo}>
                            PayFloat
                        </a>

                        <div className={style.sidebar_auth_links}>
                            <a href="/dashboard">
                                <HouseLine />
                                Dashboard
                            </a>
                            <a href="/market">
                                <CurrencyDollar />
                                Mercado
                            </a>
                            <a href="/aprove_sellers">
                                <User />
                                Aprovar vendedor
                            </a>
                            <a href="/aproved_sells">
                                <CurrencyCircleDollar />
                                Vendas aprovadas
                            </a>
                            <a href="/unaproved_sells">
                                <CurrencyCircleDollar />
                                Vendas não aprovadas
                            </a>
                            <a href="/select_entity">
                                <PlusCircle />
                                Registrar entidade
                            </a>
                            <a href="/profile">
                                <UserCirclePlus />
                                Perfil
                            </a>

                            <button>
                                <XCircle />
                                Sair
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

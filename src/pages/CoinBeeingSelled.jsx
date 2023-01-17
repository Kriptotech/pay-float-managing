import React from "react";
import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/coin_beeing_selled/components/main/Index";

export function CoinBeeingSelled() {
    return (
        <div>
            <AccountHeader />
            <Main />
        </div>
    );
}

import React from "react";
import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/coin_selled/components/main/Index";

export function CoinSelled() {
    return (
        <div>
            <AccountHeader />
            <Main />
        </div>
    );
}

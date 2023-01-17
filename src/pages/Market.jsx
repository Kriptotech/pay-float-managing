import React from "react";
import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/market/components/main/Index";

export function Market() {
    return (
        <div>
            <AccountHeader />
            <Main />
        </div>
    );
}

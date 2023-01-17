import React from "react";
import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/unaproved_sell/components/main/Index";

export function UnaprovedSell() {
    return (
        <div>
            <AccountHeader />
            <Main />
        </div>
    );
}

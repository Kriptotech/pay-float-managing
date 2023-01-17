import React from "react";
import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/unaproved_sells/components/main/Index";

export function UnaprovedSells() {
    return (
        <div>
            <AccountHeader />
            <Main />
        </div>
    );
}

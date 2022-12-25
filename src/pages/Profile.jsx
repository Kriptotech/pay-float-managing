import React from "react";

import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/profilepage/components/main/Index";

export function Profile() {
    return (
        <div>
            <AccountHeader />
            <Main />
        </div>
    );
}

import React from "react";
import { AccountHeader } from "../components/account_header/Index";
import { DashboardContainer } from "../features/dashboard/components/main/Index";

export function Dashboard() {
    return (
        <div>
            <AccountHeader />
            <DashboardContainer />
        </div>
    );
}

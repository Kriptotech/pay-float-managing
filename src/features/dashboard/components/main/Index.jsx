// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { Table } from "../table/Index";
import style from "./styles.module.css";

export function DashboardContainer() {
    // states
    // const [isSelling, setIsSelling] = useState(true);

    // const navigate = useNavigate();

    return (
        <div className={style.dashboard}>
            <Table />
        </div>
    );
}

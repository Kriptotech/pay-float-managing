import { Table } from "../table/Index";
import style from "./styles.module.css";

export function Main() {
    return (
        <div className={style.dashboard}>
            <Table />
        </div>
    );
}

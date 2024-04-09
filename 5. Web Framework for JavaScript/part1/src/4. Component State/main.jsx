import { ReactDOM } from "react";
import App from "./State";

let counter = 1;

const refresh = () => {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <App counter={counter} />
    )
}

setInterval(() => {
    refresh();
    counter += 1;
}, 1000)

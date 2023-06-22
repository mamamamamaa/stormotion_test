import ReactDOM from "react-dom/client";
import { App } from "./components/App.tsx";
import "./index.css";
import { Layout } from "./components/Layout/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Layout>
    <App />
  </Layout>
);

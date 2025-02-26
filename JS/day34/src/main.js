import Navigo from "navigo";
import "./style.css";
import HomePage from "./page/homePage";
import LoginPage from "./page/loginPage";
import RegisterPage from "./page/registerPage";
import NotFoundPage from "./page/notFound";
import AfterRegister from "../features/auths/afterRegister";
import AfterLogin from "../features/auths/afterLogin";
import TodoPage from "./page/todoPage";
import AfterTodo from "../features/auths/afterTodo";
const app = document.querySelector("#app");

export const router = new Navigo("/", { linksSelector: "a" });

export function render(content, beforeHandle = null, afterHandle = null) {
    beforeHandle && beforeHandle();
    app.innerHTML = content();
    afterHandle && afterHandle();
}

router.notFound(() => render(NotFoundPage));
router.on({
    "/": () => render(HomePage),
    "/login": () => render(LoginPage, null, AfterLogin),
    "/register": () => render(RegisterPage, null, AfterRegister),
    "/todo": () => render(TodoPage, null, AfterTodo),
});

router.resolve();

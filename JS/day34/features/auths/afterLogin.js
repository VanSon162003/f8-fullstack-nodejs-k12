import { router } from "../../src/main";

function AfterLogin() {
    const loginForm = document.querySelector("#loginForm");
    const messageDiv = document.querySelector("#message");

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const userInfo = Object.fromEntries(formData);

        if (!validateEmail(userInfo.email)) {
            messageDiv.textContent = "Email không hợp lệ";

            messageDiv.classList.add("text-danger");
            messageDiv.classList.remove("text-success");
            return;
        }

        if (userInfo.password.length < 6) {
            messageDiv.textContent = "Mật khẩu phải ít nhất 6 ký tự";

            messageDiv.classList.add("text-danger");
            messageDiv.classList.remove("text-success");
            return;
        }

        fetch("http://localhost:3000/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(userInfo),
        })
            .then((res) => {
                console.log(res);

                if (!res.ok) {
                    return alert("không thành công");
                }
                return res.json();
            })
            .then((data) => {
                if (data.accessToken) {
                    localStorage.setItem("authToken", data.accessToken);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    messageDiv.textContent = "Đăng nhập thành công!";
                    messageDiv.classList.remove("text-danger");
                    messageDiv.classList.add("text-success");

                    router.navigate("/todo");
                } else {
                    throw new Error("Dữ liệu phản hồi không hợp lệ.");
                }
            })
            .catch((err) => {
                messageDiv.textContent = err.message;

                messageDiv.classList.add("text-danger");
                messageDiv.classList.remove("text-success");
            });
    });
}

export default AfterLogin;

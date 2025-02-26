import { render, router } from "../../src/main";
import LoginPage from "../../src/page/loginPage";

function AfterRegister() {
    const registerForm = document.querySelector("#registerForm");
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    registerForm.addEventListener("submit", function (event) {
        // Bước 1: Lấy thông tin từ form
        event.preventDefault();
        const formData = new FormData(registerForm);
        const userInfor = Object.fromEntries(formData);
        if (!validateEmail(userInfor.email)) {
            alert("email không hợp lệ");
            return;
        }

        if (userInfor.password.length < 6)
            return alert("mật khẩu phải ít nhất 6 ký tự");

        // Bước 2: Validation
        // Bước 3: Gửi dữ liệu lên server
        fetch("http://localhost:3000/register", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(userInfor),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.accessToken) {
                    // Thong bao thanh cong
                    // Chuyen sang trang dang nhap
                    if (confirm("Dang ky thanh cong, dang nhap ngay?")) {
                        router.navigate("/login");
                    }
                } else {
                    alert(data);
                    registerForm.reset();
                    return;
                }
            })
            .catch((err) => console.log(err));
    });
}

export default AfterRegister;

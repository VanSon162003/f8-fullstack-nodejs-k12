function LoginPage() {
    return `
        
        <form action="" id="loginForm">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    type="email"
                    name="email"
                    class="form-control"
                    required
                />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    class="form-control"
                    required
                />
            </div>

            <div class="mb-3">
                <button class="btn btn-primary w-100">Login now</button>
            </div>

            <div id="message" class="text-center"></div>
        </form>
    `;
}

export default LoginPage;

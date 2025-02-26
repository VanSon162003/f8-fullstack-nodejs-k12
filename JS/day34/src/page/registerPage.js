function RegisterPage() {
    return `    
        <form action="" id="registerForm">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">password</label>
                <input type="password" name="password" class="form-control" />
            </div>

            <div class="mb-3">
                <button class="btn btn-primary w-100">Register now</button>
            </div>
        </form>
    `;
}

export default RegisterPage;

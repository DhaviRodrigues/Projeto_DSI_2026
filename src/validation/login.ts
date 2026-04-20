export function validateLogin(email: string, password: string): { valid: boolean; error: string } {
    if (!email || email.trim() === "" || !password || password.trim() === "") {
        return {
            valid: false,
            error: "Todos os campos precisam ser preenchidos"
        };
    }

    return {
        valid: true,
        error: ""
    };
}
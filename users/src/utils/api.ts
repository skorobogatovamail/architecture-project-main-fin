class Api {
    private _address: string
    constructor({ address }: { address: string }) {
        this._address = address
    }

    login(username: string, password: string) {
        // В реальном приложении здесь будет обращение к API login service
        return 'fake-token';
    }

    getProfile(token: string) {
        // В реальном приложении здесь будет обращение к API login service
        return {
            userName: 'Студент',
        };
    }
}

const api = new Api({ address: 'https://nomoreparties.co' })

export default api;
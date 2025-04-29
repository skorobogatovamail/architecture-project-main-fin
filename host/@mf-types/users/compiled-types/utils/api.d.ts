declare class Api {
    private _address;
    constructor({ address }: {
        address: string;
    });
    login(username: string, password: string): string;
    getProfile(token: string): {
        userName: string;
    };
}
declare const api: Api;
export default api;

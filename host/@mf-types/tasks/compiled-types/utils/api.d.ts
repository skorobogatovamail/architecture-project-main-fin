export interface ITask {
    id: number;
    title: string;
    checked: boolean;
}
declare class Api {
    private _address;
    constructor({ address }: {
        address: string;
    });
    initialize(): void;
    reset(): void;
    getTasks(token: string): any;
    checkedChanged(token: string, id: number, checked: boolean): void;
}
declare const api: Api;
export default api;

// Этот ключ используется для эмуляции API tasks service
const storageKey = 'ya-arch-tasks-1';
// Эта коллекция используется для эмулации API tasks service
const sampleData = [
    {
        id: 1,
        title: 'Знакомство с проектом',
        checked: false,
    },
    {
        id: 2,
        title: 'Планирование разделения на микросервисы',
        checked: false,
    },
    {
        id: 3,
        title: 'Создание проектов с использованием Module Federation',
        checked: false,
    },
    {
        id: 4,
        title: 'Перенос контролов из начального проекта',
        checked: false,
    },
    {
        id: 5,
        title: 'Пробный зануск',
        checked: false,
    },
    {
        id: 6,
        title: 'Настройка взаимодействия между компонентами',
        checked: false,
    },
    {
        id: 7,
        title: 'Запуск финального приложения',
        checked: false,
    },
    {
        id: 8,
        title: 'Завершение урока',
        checked: false,
    },
];

export interface ITask {
    id: number,
    title: string,
    checked: boolean,
}

class Api {
    private _address: string;

    constructor({ address }: { address: string }) {
        this._address = address
        this.initialize()
    }

    initialize() {
        // В реальном приложении этого метода не будет
        const items = localStorage.getItem(storageKey);
        if (!items) {
            this.reset();
        }
    }

    reset() {
        // В реальном приложении этого метода не будет
        localStorage.setItem(storageKey, JSON.stringify(sampleData));
    }

    getTasks(token: string) {
        // В реальном приложении здесь будет обращение к API tasks service
        const data = localStorage.getItem(storageKey) || '[]'
        return JSON.parse(data);
    }

    checkedChanged(token: string, id: number, checked: boolean) {
        // В реальном приложении здесь будет обращение к API tasks service
        const data = localStorage.getItem(storageKey) || '[]'
        const tasks: ITask[] = JSON.parse(data);
        localStorage.setItem(
            storageKey,
            JSON.stringify(
                tasks.map((x) =>
                    x.id === id
                        ? {
                            id: x.id,
                            title: x.title,
                            checked: checked,
                        }
                        : x,
                ),
            ),
        );
    }
}


const api = new Api({ address: 'https://nomoreparties.co' })

export default api;
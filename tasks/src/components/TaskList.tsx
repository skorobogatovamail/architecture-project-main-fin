import { useEffect, useState } from 'react';
import api, { ITask } from '../utils/api';
import './TaskList.css';

export default function TaskList({ jwt }: { jwt: string }) {
    const [tasks, setTasks] = useState<ITask[]>([]);

    useEffect(() => {
        if (jwt) {
            setTasks(api.getTasks(jwt));
        }
    }, [jwt]);

    function checkChanged(id: number, prevChecked: boolean) {
        const updatedTasks = tasks.map((x) => {
            api.checkedChanged(jwt, id, !prevChecked);
            return x.id === id
                ? {
                    id: x.id,
                    title: x.title,
                    checked: !prevChecked,
                }
                : x;
        });
        setTasks(updatedTasks);
    }

    return (
        <div className='task-list'>
            <h3>Задачи на сегодня</h3>
            {tasks.map((x) => {
                return (
                    <div key={x.id}>
                        <div>
                            <input type='checkbox' onChange={() => checkChanged(x.id, x.checked)} checked={x.checked} />
                            <span className={x.checked ? 'completed' : ''}>{x.title}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

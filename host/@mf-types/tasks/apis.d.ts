
    export type RemoteKeys = 'tasks/TasksTestControl' | 'tasks/TaskList';
    type PackageType<T> = T extends 'tasks/TaskList' ? typeof import('tasks/TaskList') :T extends 'tasks/TasksTestControl' ? typeof import('tasks/TasksTestControl') :any;
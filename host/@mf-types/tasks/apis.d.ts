
    export type RemoteKeys = 'tasks/TaskList';
    type PackageType<T> = T extends 'tasks/TaskList' ? typeof import('tasks/TaskList') :any;
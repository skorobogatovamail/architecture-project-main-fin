
    export type RemoteKeys = 'tasks/TasksTestControl';
    type PackageType<T> = T extends 'tasks/TasksTestControl' ? typeof import('tasks/TasksTestControl') :any;
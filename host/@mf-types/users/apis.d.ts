
    export type RemoteKeys = 'users/UsersTestControl';
    type PackageType<T> = T extends 'users/UsersTestControl' ? typeof import('users/UsersTestControl') :any;
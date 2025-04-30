
    export type RemoteKeys = 'users/Welcome' | 'users/UserLogin';
    type PackageType<T> = T extends 'users/UserLogin' ? typeof import('users/UserLogin') :T extends 'users/Welcome' ? typeof import('users/Welcome') :any;
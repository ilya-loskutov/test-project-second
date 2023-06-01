export enum UserKeys {
    email = 'email',
    password = 'password',
    address = 'address',
    posts = 'posts'
}

export interface User {
    [UserKeys.email]: string,
    [UserKeys.password]: string,
    [UserKeys.address]: { city: string, house_number: number },
    [UserKeys.posts]: Array<{ title: string, text: string }>
}
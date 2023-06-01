export enum UserKeys {
    email = 'email',
    password = 'password',
    address = 'address',
    addressCity = 'city',
    addressHouseNumber = 'house_number',
    posts = 'posts',
    postTitle = 'title',
    postText = 'text'
}

export interface User {
    [UserKeys.email]: string,
    [UserKeys.password]: string,
    [UserKeys.address]: Address[],
    [UserKeys.posts]: Post[]
}

export interface Address {
    [UserKeys.addressCity]: string,
    [UserKeys.addressHouseNumber]: number
}

export interface Post {
    [UserKeys.postTitle]: string,
    [UserKeys.postText]: string
}
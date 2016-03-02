export interface Book {
    id: number;
    title: string;
    author: string;
}

export interface UserBook extends Book {

    added: Date;
    tags: string[];
    lists: string[];
}
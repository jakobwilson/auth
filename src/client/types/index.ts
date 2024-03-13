export interface Blog {
    id: number;
    title: string;
    content: string;
    author_id: Author["id"];
    _created: string;
}

export interface Author {
    id?: number;
    email: string;
    _created?: string
}

export interface BlogJoined extends Blog {
    tag: string;
    name: string;
}
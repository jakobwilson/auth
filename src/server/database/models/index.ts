export interface AuthorsTable {
    id: number;
    email: string;
    password: string;
    _created: Date;
}

export interface MysqlResponse {
    affectedRows: number;
    insertId: number;
}

export interface Blog {
    id: number;
    title: string;
    content: string;
    auhtorid: Author["id"];
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

export interface BlogEntry {
    id: number;
    title: string;
    content: string;
    author: string;
}
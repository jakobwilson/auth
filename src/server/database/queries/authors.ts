import { Query } from '../';
import { AuthorsTable, MysqlResponse } from '../models';

const find = (column: string, value: string) => Query<AuthorsTable[]>('SELECT * FROM authors WHERE ?? = ?', [column, value]);

const insert = (newUser: { email: string, password: string } ) => 
//@ts-ignore
Query<MysqlResponse>('INSERT INTO authors SET ?', newUser);


export default {
    find,
    insert
}
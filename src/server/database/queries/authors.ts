import { Query } from '../';
import { AuthorsTable } from '../models';

const find = (column: string, value: string) => Query<AuthorsTable[]>('SELECT * FROM Authors WHERE ?? = ?', [column, value]);

const insert = (newUser: { email: string, password: string } ) => 

Query('INSERT INTO Authors SET ?', [newUser]);


export default {
    find,
    insert
}
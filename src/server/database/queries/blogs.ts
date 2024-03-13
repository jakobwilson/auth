import { Query } from '..';
import { Blog } from '../models';

const getAll = () => Query<Blog[]>('SELECT * FROM Blogs');
const getOne = (id: number) => Query<Blog[]>("SELECT * FROM Blogs WHERE id=?", [id]);
const create = (title: string, content: string, author_id: number) => Query('INSERT INTO Blogs (title, content, author_id) VALUES (?, ?, ?)', [title, content, author_id]);
const update = (id: number, title: string, content: string, author_id: number) => Query('UPDATE Blogs SET title=?, content=? WHERE id=? AND author_id=?', [title, content, id, author_id]);
const destroy = (id: number, author_id: number) => Query('DELETE FROM Blogs WHERE id=? AND author_id=?', [id, author_id]);


export default {
    getAll,
    getOne,
    create,
    update,
    destroy
};
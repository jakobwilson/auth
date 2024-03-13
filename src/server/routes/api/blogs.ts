import * as express from 'express';
import database from '../../database';
import { tokenCheck } from '../../middlewares/auth.mw';

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const blogs = await database.blogs.getAll();
        res.json(blogs);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Unable to get blogs.'});
    }
});

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const [blog] = await database.blogs.getOne(id);
        res.json(blog);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Unable to get blog.'});
    }
});

router.post('/', tokenCheck, async (req, res) => {
    const { title, content } = req.body;
    const author_id = req.user!.id;
    console.log({title, content, author_id:req.user!.id});
    try {
        const results = await database.blogs.create(title, content, author_id);
        res.status(201).json({message: 'Created blog post!', id: results.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Unable to post.'});
    }
});

router.put('/:id', tokenCheck, async (req, res) => {
    const id = Number(req.params.id);
    const author_id = req.user!.id;
    try {
        const { title, content } = req.body;
        await database.blogs.update(id, title, content, author_id);
        res.status(201).json({ message: "Blog updated." });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Unable to update blog." });
    }
});

router.delete('/:id', tokenCheck, async (req, res) => {
    const id = Number(req.params.id);
    const author_id = req.user!.id;
    try {
        await database.blogs.destroy(id, author_id);
        res.status(200).json({ message: "Blog deleted." });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Unable to delete blog." });
    }
});

export default router;
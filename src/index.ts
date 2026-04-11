import { Hono } from 'hono';
import { createPost, getPosts } from './models/post';
import { loadFromStorage, saveToStorage } from './services/storage';

type Bindings = {
    DB: D1Database,
    BUCKET: R2Bucket,
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', async (c) => {
    const allPosts = await getPosts(c.env.DB);
    return c.json({
        success: true,
        data: allPosts,
        unco: 'unco',
    });
});

app.get('/add-test', async (c) => {
    await createPost(
        c.env.DB,
        `Drizzle Post ${Date.now()}`,
        `Using Drizzle ORM with D1!`,
    );
    return c.text('Post added with Drizzle!');
});

app.get('/r2-test', async (c) => {
    const key = 'test-file.txt';
    await saveToStorage(c.env.BUCKET, key, 'ログインなしのR2テストです');
    const object = await loadFromStorage(c.env.BUCKET, key);
    const text = await object?.text();
    return c.text(`取得データ: ${text}`);
});

export default app;

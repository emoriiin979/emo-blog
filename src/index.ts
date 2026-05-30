import { Hono } from 'hono';
import { createPost, getPosts } from './models/post';
import { loadFromStorage, saveToStorage } from './services/storage';

type Bindings = {
    DB: D1Database,
    BUCKET: R2Bucket,
};

const app = new Hono<{ Bindings: Bindings }>();



export default app;

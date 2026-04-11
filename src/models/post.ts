import { drizzle } from 'drizzle-orm/d1';
import { posts } from './schema';
import { desc } from 'drizzle-orm';

const getDb = (d1: D1Database) => drizzle(d1);

export async function getPosts(d1: D1Database) {
    const db = getDb(d1);
    return await db.select().from(posts).orderBy(desc(posts.id)).all();
};

export async function createPost(d1: D1Database, title: string, content: string) {
    const db = getDb(d1);
    return await db.insert(posts).values({ title, content }).run();
}

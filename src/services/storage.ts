export async function saveToStorage(bucket: R2Bucket, key: string, data: string) {
    return await bucket.put(key, data);
}

export async function loadFromStorage(bucket: R2Bucket, key: string) {
    return await bucket.get(key);
}

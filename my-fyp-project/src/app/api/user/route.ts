// src/app/api/user/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('fyp_db'); // 替换成你创建的数据库名字
    const collection = db.collection('users');

    const user = await collection.findOne({}); // 假设你只要拿第一个用户
    const name = user?.name || 'No user found';

    return NextResponse.json({ name: user?.name|| 'No user found', email: user?.email || 'No user found'});
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

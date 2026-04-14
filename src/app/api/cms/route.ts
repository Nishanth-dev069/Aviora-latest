import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_BASE = path.join(process.cwd(), 'content');

function getCollection(collection: string) {
  const dir = path.join(CONTENT_BASE, collection);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir);
  return files.map((file) => {
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const ext = path.extname(file);
    const slug = path.basename(file, ext);
    if (ext === '.json') {
      return { slug, ...JSON.parse(raw) };
    }
    const { data, content } = matter(raw);
    return { slug, ...data, body: content };
  });
}

function writeEntry(collection: string, slug: string, data: Record<string, unknown>, body?: string) {
  const dir = path.join(CONTENT_BASE, collection);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (collection === 'gallery') {
    const filePath = path.join(dir, `${slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } else {
    const filePath = path.join(dir, `${slug}.md`);
    const fileContent = matter.stringify(body || '', data);
    fs.writeFileSync(filePath, fileContent);
  }
}

function deleteEntry(collection: string, slug: string) {
  const dir = path.join(CONTENT_BASE, collection);
  const mdPath = path.join(dir, `${slug}.md`);
  const jsonPath = path.join(dir, `${slug}.json`);
  if (fs.existsSync(mdPath)) fs.unlinkSync(mdPath);
  if (fs.existsSync(jsonPath)) fs.unlinkSync(jsonPath);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const collection = searchParams.get('collection');
  if (!collection) return NextResponse.json({ error: 'collection required' }, { status: 400 });
  const items = getCollection(collection);
  return NextResponse.json(items);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { collection, slug, data, body: content } = body;
  if (!collection || !slug) return NextResponse.json({ error: 'collection and slug required' }, { status: 400 });
  writeEntry(collection, slug, data, content);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { collection, slug } = body;
  if (!collection || !slug) return NextResponse.json({ error: 'collection and slug required' }, { status: 400 });
  deleteEntry(collection, slug);
  return NextResponse.json({ ok: true });
}

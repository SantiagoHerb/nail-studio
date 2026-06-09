import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'GET') {
    const data = await redis.get('servicios') || [];
    return res.json(data);
  }
  if (req.method === 'POST') {
    const servicios = await redis.get('servicios') || [];
    servicios.push(req.body);
    await redis.set('servicios', servicios);
    return res.json({ ok: true });
  }
  if (req.method === 'DELETE') {
    const id = Number(req.query.id);
    let servicios = await redis.get('servicios') || [];
    servicios = servicios.filter(s => s.id !== id);
    await redis.set('servicios', servicios);
    return res.json({ ok: true });
  }
  return res.status(405).json({ error: 'Método no permitido' });
}

import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PATCH,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET /api/servicios
  if (req.method === 'GET') {
    const data = await kv.get('servicios') || [];
    return res.json(data);
  }

  // POST /api/servicios
  if (req.method === 'POST') {
    const servicios = await kv.get('servicios') || [];
    servicios.push(req.body);
    await kv.set('servicios', servicios);
    return res.json({ ok: true });
  }

  // DELETE /api/servicios/[id]
  if (req.method === 'DELETE') {
    const id = Number(req.query.id);
    let servicios = await kv.get('servicios') || [];
    servicios = servicios.filter(s => s.id !== id);
    await kv.set('servicios', servicios);
    return res.json({ ok: true });
  }

  return res.status(405).json({ error: 'Método no permitido' });
}

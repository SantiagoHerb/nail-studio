import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PATCH,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method === 'GET') {
    const data = await redis.get('citas') || [];
    return res.json(data);
  }
  if (req.method === 'POST') {
    const citas = await redis.get('citas') || [];
    citas.push(req.body);
    await redis.set('citas', citas);
    return res.json({ ok: true });
  }
  if (req.method === 'PATCH') {
    const id = Number(req.query.id);
    const citas = await redis.get('citas') || [];
    const idx = citas.findIndex(c => c.id === id);
    if (idx !== -1) {
      if (req.body.estado) citas[idx].estado = req.body.estado;
      if (req.body.precioFinal != null) citas[idx].precioFinal = req.body.precioFinal;
      await redis.set('citas', citas);
    }
    return res.json({ ok: true });
  }
  if (req.method === 'DELETE') {
    const id = Number(req.query.id);
    let citas = await redis.get('citas') || [];
    citas = citas.filter(c => c.id !== id);
    await redis.set('citas', citas);
    return res.json({ ok: true });
  }
  return res.status(405).json({ error: 'Método no permitido' });
}

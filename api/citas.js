import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PATCH,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET /api/citas
  if (req.method === 'GET') {
    const data = await kv.get('citas') || [];
    return res.json(data);
  }

  // POST /api/citas
  if (req.method === 'POST') {
    const citas = await kv.get('citas') || [];
    citas.push(req.body);
    await kv.set('citas', citas);
    return res.json({ ok: true });
  }

  // PATCH /api/citas/[id]  — actualizar estado y precio
  if (req.method === 'PATCH') {
    const id = Number(req.query.id);
    const citas = await kv.get('citas') || [];
    const idx = citas.findIndex(c => c.id === id);
    if (idx !== -1) {
      if (req.body.estado) citas[idx].estado = req.body.estado;
      if (req.body.precioFinal !== null && req.body.precioFinal !== undefined) {
        citas[idx].precioFinal = req.body.precioFinal;
      }
      await kv.set('citas', citas);
    }
    return res.json({ ok: true });
  }

  // DELETE /api/citas/[id]
  if (req.method === 'DELETE') {
    const id = Number(req.query.id);
    let citas = await kv.get('citas') || [];
    citas = citas.filter(c => c.id !== id);
    await kv.set('citas', citas);
    return res.json({ ok: true });
  }

  return res.status(405).json({ error: 'Método no permitido' });
}

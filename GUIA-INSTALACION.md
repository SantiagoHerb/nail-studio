# 💅 Nail Studio — Guía de instalación gratuita

Esta es tu app de agenda y contabilidad lista para publicar.
**Costo total: $0** (Vercel gratis + Vercel KV gratis)

---

## 📋 Lo que necesitas antes de empezar

- Una cuenta de Gmail (para registrarse en GitHub y Vercel)
- Un computador o portátil (solo para la configuración inicial, unos 15 minutos)
- Conexión a internet

---

## PASO 1 — Crear cuenta en GitHub (gratis)

GitHub es donde vamos a guardar el código de la app.

1. Ve a **https://github.com** en tu navegador
2. Haz clic en **"Sign up"**
3. Pon tu correo, crea una contraseña y un nombre de usuario
4. Verifica tu correo (te llega un código)
5. Elige el plan **Free** (es el primero que aparece)
6. ✅ Listo, ya tienes GitHub

---

## PASO 2 — Subir el código a GitHub

1. Inicia sesión en GitHub
2. Haz clic en el botón verde **"New"** (o el símbolo **+** arriba a la derecha → "New repository")
3. En **Repository name** escribe: `nail-studio`
4. Deja todo lo demás como está
5. Haz clic en **"Create repository"**
6. En la página que aparece, busca la sección **"uploading an existing file"** y haz clic
7. Arrastra y suelta **todos los archivos** de esta carpeta:
   - `index.html`
   - `manifest.json`
   - `vercel.json`
   - `package.json`
   - `icon.svg`
   - La carpeta `api/` con sus dos archivos (`servicios.js` y `citas.js`)
8. Haz clic en **"Commit changes"** (botón verde abajo)
9. ✅ El código ya está en GitHub

---

## PASO 3 — Crear cuenta en Vercel (gratis)

Vercel es quien va a publicar tu app en internet.

1. Ve a **https://vercel.com**
2. Haz clic en **"Sign Up"**
3. Selecciona **"Continue with GitHub"** (lo más fácil)
4. Autoriza el acceso cuando lo pida
5. Elige el plan **Hobby** (es gratis)
6. ✅ Ya tienes Vercel

---

## PASO 4 — Publicar la app en Vercel

1. En Vercel, haz clic en **"Add New Project"**
2. Busca el repositorio `nail-studio` en la lista y haz clic en **"Import"**
3. **No cambies nada** en la configuración que aparece
4. Haz clic en **"Deploy"**
5. Espera ~1 minuto mientras se publica (verás una animación)
6. Cuando termine verás un mensaje de **"Congratulations"** y una URL tipo:
   `nail-studio-abc123.vercel.app`
7. ✅ La app ya está en internet, ¡pero aún falta la base de datos!

---

## PASO 5 — Agregar la base de datos (Vercel KV)

Este paso conecta la memoria permanente para que los datos no se pierdan.

1. En Vercel, ve a tu proyecto `nail-studio`
2. Haz clic en la pestaña **"Storage"**
3. Haz clic en **"Create Database"**
4. Selecciona **"KV"** (es la base de datos tipo llave-valor)
5. Dale el nombre: `nail-studio-db`
6. Selecciona la región **"Washington, D.C., USA (iad1)"** (la más cercana a Colombia)
7. Haz clic en **"Create"**
8. Cuando se cree, haz clic en **"Connect Project"** y selecciona `nail-studio`
9. Haz clic en **"Connect"**
10. Ahora ve a la pestaña **"Deployments"** de tu proyecto
11. Haz clic en los tres puntos (**...**) del último deploy y selecciona **"Redeploy"**
12. Espera ~1 minuto
13. ✅ ¡Base de datos conectada! Los datos ya son permanentes

---

## PASO 6 — Abrir la app en el iPhone

1. En el iPhone, abre **Safari** (tiene que ser Safari, no Chrome)
2. Escribe la URL de tu app: `nail-studio-abc123.vercel.app`
   *(reemplaza con tu URL real de Vercel)*
3. La app se abre en el navegador
4. Para instalarla como app nativa en la pantalla de inicio:
   - Toca el ícono de **Compartir** (el cuadrado con la flecha hacia arriba, abajo en Safari)
   - Desplázate y toca **"Añadir a pantalla de inicio"**
   - Ponle el nombre **"Nail Studio"**
   - Toca **"Añadir"**
5. ✅ Aparece el ícono en la pantalla de inicio como cualquier app

---

## 💰 Costos reales

| Servicio | Plan | Precio |
|----------|------|--------|
| GitHub | Free | $0 |
| Vercel Hosting | Hobby | $0 |
| Vercel KV | Free (30MB) | $0 |
| **Total** | | **$0/mes** |

> El plan gratuito de Vercel KV aguanta miles de citas sin problema.
> Solo necesitarías pagar si llegaras a manejar millones de registros.

---

## 🆘 Problemas comunes

**"La app carga pero los datos no se guardan"**
→ El PASO 5 (base de datos) no se completó. Vuelve a hacerlo.

**"Error al abrir la URL"**
→ Copia la URL exacta desde Vercel (sin espacios).

**"No aparece 'Añadir a pantalla de inicio'"**
→ Asegúrate de usar Safari, no Chrome ni otro navegador.

**"Quiero un dominio propio tipo nailstudio.com"**
→ En Namecheap.com puedes comprar uno por ~$10/año y conectarlo en Vercel en Settings → Domains.

---

## 📞 Si necesitas ayuda

Si algo no te queda claro, toma una captura de pantalla del error y muéstrasela a quien te ayudó a configurar esto. Con la URL de tu Vercel y la captura se puede resolver cualquier problema.

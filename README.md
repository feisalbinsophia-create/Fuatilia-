# Fuatilia — Phase 1 (Frontend Setup)

Hii ni hatua ya kwanza tu: ukurasa wa nyumbani (landing page) na ukurasa wa
umma wa kufuatilia mzigo (bado unatumia data ya mfano, si database halisi).

## Kujaribu kwenye kompyuta yako

1. Sakinisha [Node.js](https://nodejs.org) (chukua "LTS" version) ukiwa
   huna.
2. Fungua terminal ndani ya folder hii, kisha:

   ```bash
   npm install
   npm run dev
   ```

3. Fungua http://localhost:3000 kwenye browser.

## Kuweka GitHub

```bash
git init
git add .
git commit -m "Fuatilia Phase 1: landing + tracking page"
```

Kisha tengeneza repository mpya (tupu) kwenye github.com, na fuata
maelekezo yao ya "push an existing repository" — kwa kawaida ni amri
tatu wanazokupa moja kwa moja kwenye ukurasa huo.

## Kuweka Vercel (kuifanya live)

1. Nenda vercel.com, ingia kwa akaunti yako ya GitHub.
2. "Add New Project" → chagua hii repository.
3. Vercel itagundua ni Next.js app moja kwa moja — bofya "Deploy".
4. Baada ya dakika chache, utapata link ya live (mfano
   `fuatilia.vercel.app`).

## Kinachofuata (Phase 2 na 3)

- **Phase 2:** kuunganisha Supabase (database + login) ili tracking page
  ionyeshe data halisi, si ya mfano.
- **Phase 3:** dashboards za Office, Driver, Supervisor na Owner, zenye
  login na role-based access.

Usijali kuhusu ".env.local.example" kwa sasa — itahitajika Phase 2.

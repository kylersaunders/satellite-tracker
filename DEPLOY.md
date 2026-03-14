# Quick Deploy to Vercel (Free)

## One-Time Setup

```bash
npm i -g vercel
vercel login
```

## Deploy (from workspace root)

```bash
cd satellite-tracker
vercel deploy --prod
```

That's it! Vercel will give you a live URL like: `https://satellite-tracker-xyz.vercel.app`

## What Happens

1. Vercel uploads the static files (index.html)
2. No build step needed - pure HTML/JS
3. Free tier includes unlimited bandwidth for static sites
4. Auto HTTPS + global CDN

## Alternative: Link to GitHub

If you push this to GitHub, you can auto-deploy from there:

1. Create a new repo on GitHub
2. Push satellite-tracker folder
3. Import the repo in Vercel dashboard
4. Auto-deploys on every push

---

**Ready to deploy?** Just run:
```bash
cd /home/kclaw/.openclaw/workspace/satellite-tracker
vercel deploy --prod
```

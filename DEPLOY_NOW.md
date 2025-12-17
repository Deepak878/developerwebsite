# 🎯 LIVE DEPLOYMENT INSTRUCTIONS

## ✅ Step 1: Create GitHub Repository (DONE ✓)

Your code is now in a Git repository! Now we need to push it to GitHub.

---

## 📤 Step 2: Push to GitHub

### Option A: Create New Repository on GitHub (Recommended)

1. **Go to GitHub**: https://github.com/new

2. **Create repository:**
   - Repository name: `deepak-portfolio` (or any name you like)
   - Description: `Professional portfolio website with AdMob integration`
   - Make it **Public** (so Vercel can access it for free)
   - **DO NOT** initialize with README (we already have files)
   - Click **"Create repository"**

3. **Copy and run these commands in your terminal:**

```bash
cd /Users/deepakbhattarai/Documents/deepakdeveloperwebsite

# Replace YOUR-USERNAME with your GitHub username
git remote add origin https://github.com/YOUR-USERNAME/deepak-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:** If your GitHub username is "Deepak878":
```bash
git remote add origin https://github.com/Deepak878/deepak-portfolio.git
git branch -M main
git push -u origin main
```

---

## 🚀 Step 3: Deploy to Vercel

### 3.1 Create Vercel Account

1. Go to: **https://vercel.com/signup**
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Complete signup

### 3.2 Deploy Your Website

1. After login, you'll see Vercel dashboard
2. Click **"Add New..."** button (top right)
3. Select **"Project"**
4. You'll see "Import Git Repository"
5. Find your repository: `deepak-portfolio` (or whatever you named it)
6. Click **"Import"**

### 3.3 Configure Project (Vercel Auto-Detects Everything!)

Vercel will show:
- **Framework Preset:** Next.js ✓ (auto-detected)
- **Root Directory:** ./ ✓
- **Build Command:** `npm run build` ✓
- **Output Directory:** out ✓

**DO NOT CHANGE ANYTHING!** Just click **"Deploy"**

### 3.4 Wait for Deployment

- Vercel will install dependencies
- Build your project
- Deploy to their CDN
- Takes **2-3 minutes** ⏱️

You'll see: ✓ Build Completed → ✓ Deployment Ready

---

## 🌐 Step 4: Add Your Custom Domain

### 4.1 Add Domain in Vercel

1. After deployment, you'll see your site at: `https://your-project.vercel.app`
2. Click **"Continue to Dashboard"**
3. In your project, click **"Settings"** (top menu)
4. Click **"Domains"** (left sidebar)
5. Under "Add Domain", type: `bhattaraideepak.com.np`
6. Click **"Add"**

### 4.2 Vercel Will Show DNS Instructions

Vercel will display something like:

```
To use bhattaraideepak.com.np, add these DNS records:

A Record:
Name: @
Value: 76.76.21.21

CNAME Record:
Name: www
Value: cname.vercel-dns.com
```

---

## 🔧 Step 5: Configure DNS (At Your Domain Registrar)

You need to update DNS records where you registered bhattaraideepak.com.np

### Your Current DNS Info:
```
Domain: bhattaraideepak.com.np
Primary nameserver: 185.199.108.153
Secondary nameserver: 185.199.109.153
Administrator: Deepak Bhattarai
Email: deepakbhattarai878@gmail.com
```

### DNS Records to Add:

**Login to your domain control panel** (where you manage bhattaraideepak.com.np) and add:

#### **A Record:**
```
Type: A
Name: @ (or leave blank for root domain)
Value: 76.76.21.21
TTL: 3600 (or Auto)
```

#### **A Record for www:**
```
Type: A
Name: www
Value: 76.76.21.21
TTL: 3600
```

#### **CNAME Record (Alternative):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### ⏰ DNS Propagation Time
- **Wait 24-48 hours** for DNS to propagate worldwide
- Usually works in **2-6 hours**
- Check status: https://dnschecker.org

---

## ✅ Step 6: Verify ads.txt File

### After DNS Propagates:

1. **Visit:** https://bhattaraideepak.com.np/ads.txt

2. **You should see:**
```
google.com, pub-3545057394790435, DIRECT, f08c47fec0942fa0
```

3. **Verify with Google's Tool:**
   - Go to: https://adstxt.guru/
   - Enter: `bhattaraideepak.com.np`
   - Check if your publisher ID appears

### Alternative URLs (All Should Work):
- https://bhattaraideepak.com.np/ads.txt ✓
- http://bhattaraideepak.com.np/ads.txt ✓
- https://www.bhattaraideepak.com.np/ads.txt ✓

---

## 📱 Step 7: Submit to AdMob

Once ads.txt is accessible:

1. **Go to AdMob Console:** https://admob.google.com
2. **Navigate to:** Settings → Account Information
3. **Add Developer Site:**
   - Enter: `bhattaraideepak.com.np`
   - Google will automatically verify ads.txt
4. **Complete Application:**
   - Fill in organization details
   - Submit for review
5. **Wait for Approval** (usually 24-48 hours)

---

## 🔍 TROUBLESHOOTING

### Issue: "Cannot push to GitHub"
**Solution:**
```bash
# Generate SSH key or use Personal Access Token
# Visit: https://github.com/settings/tokens
# Create token with 'repo' scope
# Use token as password when pushing
```

### Issue: "ads.txt returns 404"
**Solutions:**
1. Check file exists: `/Users/deepakbhattarai/Documents/deepakdeveloperwebsite/public/ads.txt`
2. Rebuild: `npm run build`
3. Redeploy on Vercel (push to GitHub)
4. Wait 10 minutes for CDN cache
5. Clear browser cache (Cmd+Shift+R)

### Issue: "Domain not connecting"
**Solutions:**
1. Verify DNS records are correct
2. Wait full 24-48 hours
3. Use `nslookup bhattaraideepak.com.np` to check
4. Contact domain registrar support
5. Try Vercel nameservers instead

### Issue: "Vercel deployment failed"
**Solutions:**
1. Check build logs in Vercel dashboard
2. Verify `npm run build` works locally
3. Check all dependencies installed
4. Ensure no TypeScript errors

---

## 🎯 QUICK COMMAND REFERENCE

### Push Updates to Site:
```bash
cd /Users/deepakbhattarai/Documents/deepakdeveloperwebsite
git add .
git commit -m "Update portfolio"
git push
```
Vercel auto-deploys! 🚀

### Test Locally:
```bash
npm run dev
# Open: http://localhost:3000
```

### Build Test:
```bash
npm run build
# Check: /out/ads.txt file exists
```

### Check ads.txt:
```bash
curl https://bhattaraideepak.com.np/ads.txt
```

---

## 📋 DEPLOYMENT CHECKLIST

Before submitting to AdMob, verify:

- [ ] ✅ Code pushed to GitHub
- [ ] ✅ Deployed to Vercel successfully
- [ ] ✅ Custom domain added in Vercel
- [ ] ✅ DNS records configured at registrar
- [ ] ✅ DNS propagated (wait 24-48 hours)
- [ ] ✅ Website loads at bhattaraideepak.com.np
- [ ] ✅ ads.txt accessible at bhattaraideepak.com.np/ads.txt
- [ ] ✅ ads.txt shows correct publisher ID
- [ ] ✅ All contact links work (WhatsApp, GitHub, Email)
- [ ] ✅ Site works on mobile devices
- [ ] ✅ HTTPS enabled (Vercel does this automatically)

---

## 🆘 NEED HELP?

### Vercel Support:
- Docs: https://vercel.com/docs
- Support: https://vercel.com/support

### Check Deployment Status:
- Vercel Dashboard: https://vercel.com/dashboard
- Deployment Logs: Click on deployment → "View Function Logs"

### DNS Checker:
- https://dnschecker.org
- Enter: bhattaraideepak.com.np
- Should show: 76.76.21.21

---

## 🎉 SUCCESS INDICATORS

You'll know everything works when:

✅ **Website loads:** https://bhattaraideepak.com.np
✅ **ads.txt loads:** https://bhattaraideepak.com.np/ads.txt
✅ **Shows content:** google.com, pub-3545057394790435, DIRECT, f08c47fec0942fa0
✅ **HTTPS works:** Padlock in browser
✅ **Mobile responsive:** Works on phone
✅ **All links work:** WhatsApp, GitHub, Email
✅ **Fast loading:** Vercel CDN active

---

## 📞 YOUR SITE INFO

**Domain:** bhattaraideepak.com.np
**Administrator:** Deepak Bhattarai
**Email:** deepakbhattarai878@gmail.com
**Phone:** +977 9846872765
**Location:** Gaindakot-2, Nawalpur
**AdMob Publisher:** pub-3545057394790435

---

## 🚀 YOU'RE READY!

Follow these steps in order:
1. Create GitHub repo → Push code
2. Deploy to Vercel → Import from GitHub
3. Add custom domain → Configure DNS
4. Wait for DNS → Verify ads.txt
5. Submit to AdMob → Get approved!

**Good luck!** 🎉✨

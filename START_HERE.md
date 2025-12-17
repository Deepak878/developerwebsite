# 🎯 COPY-PASTE DEPLOYMENT COMMANDS

## ✅ Your Build is Ready!

- ads.txt file: ✓ Created in /out/ads.txt
- Content verified: ✓ google.com, pub-3545057394790435, DIRECT, f08c47fec0942fa0
- Git repository: ✓ Initialized and committed

---

## 📤 STEP 1: Create GitHub Repository

**Go to:** https://github.com/new

**Fill in:**
- Repository name: `deepak-portfolio`
- Description: `Professional portfolio with AdMob integration`
- Visibility: **Public** ✓
- **DO NOT** check "Add a README file"

**Click:** Create repository

---

## 📤 STEP 2: Push Your Code to GitHub

**Copy and paste these commands** (replace `Deepak878` with your GitHub username if different):

```bash
cd /Users/deepakbhattarai/Documents/deepakdeveloperwebsite

git remote add origin https://github.com/Deepak878/deepak-portfolio.git

git push -u origin main
```

**If it asks for credentials:**
- Username: Your GitHub username
- Password: Use a Personal Access Token from https://github.com/settings/tokens

---

## 🚀 STEP 3: Deploy to Vercel (5 Minutes)

### 3.1 Sign Up / Login
1. Go to: **https://vercel.com/signup**
2. Click: **"Continue with GitHub"**
3. Authorize Vercel

### 3.2 Import Your Repository
1. Click: **"Add New..."** (top right)
2. Select: **"Project"**
3. Find repository: **deepak-portfolio**
4. Click: **"Import"**

### 3.3 Configure & Deploy
**DON'T CHANGE ANYTHING!** Vercel auto-detects:
- Framework: Next.js ✓
- Build Command: npm run build ✓
- Output Directory: out ✓

**Just click: "Deploy"**

Wait 2-3 minutes... ⏱️

✅ Your site will be live at: `https://deepak-portfolio-xyz.vercel.app`

---

## 🌐 STEP 4: Add Your Custom Domain

### 4.1 In Vercel Dashboard:
1. Go to your project
2. Click: **"Settings"** (top menu)
3. Click: **"Domains"** (left sidebar)
4. Type: `bhattaraideepak.com.np`
5. Click: **"Add"**

### 4.2 Vercel Shows DNS Records:

You'll see instructions like this:

```
Add these DNS records at your domain provider:

A Record:
Type: A
Name: @
Value: 76.76.21.21

CNAME Record:
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🔧 STEP 5: Configure DNS

**Login to your domain control panel** (where you manage bhattaraideepak.com.np)

### Add These Records:

**Record 1 - A Record for Root Domain:**
```
Type: A
Host: @ (or leave blank)
Value: 76.76.21.21
TTL: 3600
```

**Record 2 - A Record for WWW:**
```
Type: A
Host: www
Value: 76.76.21.21
TTL: 3600
```

**Record 3 - CNAME (Alternative for WWW):**
```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 3600
```

### Your Current DNS Info:
```
Domain: bhattaraideepak.com.np
Primary nameserver: 185.199.108.153
Secondary nameserver: 185.199.109.153
Admin: Deepak Bhattarai
Email: deepakbhattarai878@gmail.com
Address: Gaindakot-2, Nawalpur
```

**Save all DNS records!**

⏰ **Wait 24-48 hours for DNS propagation** (usually works in 2-6 hours)

---

## ✅ STEP 6: Verify Everything Works

### Check Your Website:
```bash
# After DNS propagates, visit:
https://bhattaraideepak.com.np
```

### Check ads.txt File:
```bash
# This MUST work for AdMob:
https://bhattaraideepak.com.np/ads.txt

# Should display:
google.com, pub-3545057394790435, DIRECT, f08c47fec0942fa0
```

### Verify DNS Propagation:
1. Go to: **https://dnschecker.org**
2. Enter: `bhattaraideepak.com.np`
3. Should show IP: `76.76.21.21`

### Test ads.txt with Google:
1. Go to: **https://adstxt.guru**
2. Enter: `bhattaraideepak.com.np`
3. Verify publisher ID appears

---

## 📱 STEP 7: Submit to AdMob

Once ads.txt is accessible:

1. **Go to AdMob:** https://admob.google.com
2. **Account Settings** → Add Developer Website
3. **Enter:** bhattaraideepak.com.np
4. **Google verifies** ads.txt automatically
5. **Fill in details:**
   - Organization: (Your choice)
   - Admin: Deepak Bhattarai
   - Email: deepakbhattarai878@gmail.com
   - Address: Gaindakot-2, Nawalpur
   - Phone: +977 9846872765
6. **Submit application**
7. **Wait for approval** (24-48 hours)

---

## 🔄 Update Your Site Later

Whenever you want to update your portfolio:

```bash
cd /Users/deepakbhattarai/Documents/deepakdeveloperwebsite

# Make your changes in VS Code

# Then commit and push:
git add .
git commit -m "Update portfolio"
git push
```

**Vercel automatically redeploys!** 🚀 (takes 2-3 minutes)

---

## 🐛 TROUBLESHOOTING

### "Git push failed - authentication required"
**Solution:** Create Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select scope: `repo`
4. Copy token
5. Use token as password when pushing

### "ads.txt returns 404"
**Solutions:**
1. Wait 10 minutes for Vercel CDN
2. Clear browser cache: `Cmd + Shift + R`
3. Check file in repo: `/public/ads.txt`
4. Redeploy: Push to GitHub again
5. Check: `https://your-project.vercel.app/ads.txt` first

### "Domain not connecting"
**Solutions:**
1. Wait full 24-48 hours
2. Verify DNS records exactly match
3. Check nameservers at registrar
4. Use `nslookup bhattaraideepak.com.np`
5. Try private/incognito browser

### "Build failed on Vercel"
**Solutions:**
1. Check build works locally: `npm run build`
2. Fix any TypeScript errors
3. Check deployment logs in Vercel
4. Ensure all dependencies in package.json

---

## 📋 COMPLETE CHECKLIST

Copy this checklist and mark as you go:

```
□ Step 1: Created GitHub repository
□ Step 2: Pushed code to GitHub
□ Step 3: Signed up for Vercel
□ Step 4: Imported project to Vercel
□ Step 5: Deployed successfully
□ Step 6: Added custom domain in Vercel
□ Step 7: Updated DNS at domain registrar
□ Step 8: Waited 24-48 hours for DNS
□ Step 9: Verified website loads
□ Step 10: Verified ads.txt accessible
□ Step 11: Checked ads.txt content correct
□ Step 12: Tested on mobile device
□ Step 13: All links work (WhatsApp, GitHub)
□ Step 14: HTTPS enabled (automatic)
□ Step 15: Submitted to AdMob
```

---

## 🎯 QUICK REFERENCE

**Your Info:**
- Domain: bhattaraideepak.com.np
- GitHub: https://github.com/Deepak878
- Email: deepakbhattarai878@gmail.com
- Phone: +977 9846872765
- AdMob Publisher: pub-3545057394790435

**Important URLs:**
- GitHub New Repo: https://github.com/new
- Vercel Signup: https://vercel.com/signup
- DNS Checker: https://dnschecker.org
- ads.txt Checker: https://adstxt.guru
- AdMob Console: https://admob.google.com

**Your ads.txt Content:**
```
google.com, pub-3545057394790435, DIRECT, f08c47fec0942fa0
```

**DNS Records to Add:**
```
A Record: @ → 76.76.21.21
A Record: www → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

---

## ✅ SUCCESS = ALL THREE WORK:

1. ✅ https://bhattaraideepak.com.np (your website)
2. ✅ https://bhattaraideepak.com.np/ads.txt (shows your publisher ID)
3. ✅ AdMob accepts your domain

---

## 🎉 YOU'RE READY TO DEPLOY!

Start with Step 1: Create GitHub Repository at https://github.com/new

**Good luck!** 🚀✨

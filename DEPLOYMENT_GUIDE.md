# 🚀 Step-by-Step Deployment Guide

## ✅ What's Been Created

Your professional portfolio website is ready with:
- ✓ Modern, responsive design with dark mode
- ✓ Hero section with introduction
- ✓ About section highlighting your skills
- ✓ Experience section with your work history
- ✓ Skills section with technology icons
- ✓ Projects showcase
- ✓ Contact section with all your information
- ✓ **ads.txt file** for AdMob monetization
- ✓ Optimized for Vercel deployment

## 📱 Your Contact Information Included

- Email: deepakbhattarai878@gmail.com
- WhatsApp: +1 (817) 703-3702
- Phone (Nepal): +977 9846872765
- GitHub: https://github.com/Deepak878
- Domain: bhattaraideepak.com.np

## 🔍 Important: ads.txt File

Your ads.txt file is located at `/public/ads.txt` and contains:
```
google.com, pub-3545057394790435, DIRECT, f08c47fec0942fa0
```

Once deployed, it will be accessible at:
- `https://bhattaraideepak.com.np/ads.txt`

This is required for Google AdMob to verify your publisher account.

---

## 🌐 STEP-BY-STEP: Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

#### Step 1: Push to GitHub
```bash
cd /Users/deepakbhattarai/Documents/deepakdeveloperwebsite
git init
git add .
git commit -m "Initial commit: Portfolio website with ads.txt"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to https://vercel.com
2. Sign up/Login (use GitHub account)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
6. Click **"Deploy"**
7. Wait 2-3 minutes for deployment ✨

#### Step 3: Add Custom Domain
1. After deployment, go to your project dashboard
2. Click "Settings" → "Domains"
3. Add domain: `bhattaraideepak.com.np`
4. Vercel will show you DNS records to add

---

### Option 2: Deploy via Vercel CLI (Alternative)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
cd /Users/deepakbhattarai/Documents/deepakdeveloperwebsite
vercel
```

#### Step 3: Follow Prompts
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No**
- Project name? **deepak-portfolio** (or your choice)
- In which directory is your code located? **./
- Want to modify settings? **No**

#### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## 🌍 DNS Configuration for bhattaraideepak.com.np

After Vercel deployment, configure your domain DNS:

### Method 1: Using Vercel Nameservers (Recommended)
1. In Vercel dashboard, add your domain
2. Vercel will provide nameservers like:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Update your domain registrar to use these nameservers

### Method 2: Using A Records (Your Current Setup)
Since you have:
- Primary nameserver: 185.199.108.153
- Secondary nameserver: 185.199.109.153

Add these records at your DNS provider:

**A Records:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600

Type: A
Name: www
Value: 76.76.21.21
TTL: 3600
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

⏰ **DNS propagation takes 24-48 hours**

---

## ✅ Verify ads.txt After Deployment

1. Wait for deployment to complete
2. Visit: `https://bhattaraideepak.com.np/ads.txt`
3. You should see:
   ```
   google.com, pub-3545057394790435, DIRECT, f08c47fec0942fa0
   ```
4. Use Google's ads.txt validator: https://adstxt.guru/

---

## 🔧 Local Development

### Run Development Server
```bash
cd /Users/deepakbhattarai/Documents/deepakdeveloperwebsite
npm run dev
```
Open: http://localhost:3000

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run start
```

---

## 📝 Update Content

To customize your portfolio:

1. **Edit Homepage:** Open `app/page.tsx`
2. **Update Experience:** Modify the `experience` array
3. **Add Projects:** Update the `projects` array
4. **Change Skills:** Edit the `skills` array
5. **Update Contact:** Change contact information in the Contact Section

After making changes:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

Vercel will automatically redeploy!

---

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',  // Change this
      secondary: '#10B981', // Change this
    },
  },
}
```

### Add More Sections
Create new components in `app/page.tsx` following the existing pattern.

### Update Meta Tags
Edit `app/layout.tsx` to change SEO information.

---

## 🐛 Troubleshooting

### ads.txt not accessible?
- Check the file exists in `/public/ads.txt`
- Rebuild and redeploy
- Clear browser cache
- Wait for CDN propagation (5-10 minutes)

### Domain not connecting?
- Verify DNS records are correct
- Check domain status at registrar
- Wait 24-48 hours for DNS propagation
- Use `nslookup bhattaraideepak.com.np` to check DNS

### Build fails?
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## 📞 Need Help?

Your website is fully functional and ready to deploy. All your contact information and the ads.txt file for AdMob are properly configured.

**Your AdMob Publisher ID:** pub-3545057394790435

---

## 🎉 Summary

You now have:
1. ✅ A professional portfolio website
2. ✅ ads.txt file properly configured for AdMob
3. ✅ All contact information integrated
4. ✅ Ready for Vercel deployment
5. ✅ Custom domain configuration guide

**Next Steps:**
1. Push to GitHub (if using Vercel Dashboard)
2. Deploy to Vercel
3. Configure your domain DNS
4. Verify ads.txt is accessible
5. Submit to Google AdMob Developer Program

Good luck with your AdMob developer account! 🚀

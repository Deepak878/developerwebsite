#!/bin/bash

# 🚀 DEPLOYMENT SCRIPT - Run this to deploy your website!

echo "======================================"
echo "🚀 DEPLOYING TO VERCEL"
echo "======================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in project directory!"
    echo "Run: cd /Users/deepakbhattarai/Documents/deepakdeveloperwebsite"
    exit 1
fi

echo "📦 Step 1: Verify build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Fix errors and try again."
    exit 1
fi
echo "✅ Build successful!"
echo ""

echo "📋 Step 2: Git status..."
git status
echo ""

echo "======================================"
echo "📤 NEXT STEPS:"
echo "======================================"
echo ""
echo "1️⃣  CREATE GITHUB REPOSITORY"
echo "   Go to: https://github.com/new"
echo "   Name: deepak-portfolio"
echo "   Make it Public"
echo "   DO NOT add README"
echo "   Click: Create repository"
echo ""
echo "2️⃣  PUSH TO GITHUB (replace YOUR-USERNAME):"
echo ""
echo "   git remote add origin https://github.com/YOUR-USERNAME/deepak-portfolio.git"
echo "   git push -u origin main"
echo ""
echo "   Example for Deepak878:"
echo "   git remote add origin https://github.com/Deepak878/deepak-portfolio.git"
echo "   git push -u origin main"
echo ""
echo "3️⃣  DEPLOY TO VERCEL:"
echo "   1. Go to: https://vercel.com/signup"
echo "   2. Sign in with GitHub"
echo "   3. Click: Add New... → Project"
echo "   4. Import: deepak-portfolio"
echo "   5. Click: Deploy (don't change settings!)"
echo ""
echo "4️⃣  ADD CUSTOM DOMAIN:"
echo "   1. In Vercel → Settings → Domains"
echo "   2. Add: bhattaraideepak.com.np"
echo "   3. Update DNS at your registrar:"
echo ""
echo "      A Record:"
echo "      Name: @"
echo "      Value: 76.76.21.21"
echo ""
echo "      CNAME Record:"
echo "      Name: www"
echo "      Value: cname.vercel-dns.com"
echo ""
echo "5️⃣  VERIFY ads.txt (after 24-48 hours):"
echo "   Visit: https://bhattaraideepak.com.np/ads.txt"
echo "   Should show: google.com, pub-3545057394790435, DIRECT, f08c47fec0942fa0"
echo ""
echo "======================================"
echo "📝 DETAILED GUIDE: Read DEPLOY_NOW.md"
echo "======================================"
echo ""

#!/bin/bash

# Portfolio Website - Git Setup Script
# This script initializes git and prepares for deployment

echo "🚀 Setting up Git repository for your portfolio..."
echo ""

# Initialize git if not already done
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Add all files
echo ""
echo "📝 Adding all files to Git..."
git add .

# Create initial commit
echo ""
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Professional portfolio website with AdMob ads.txt" || echo "ℹ️  No changes to commit"

echo ""
echo "✅ Git setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Create a new repository on GitHub: https://github.com/new"
echo "2. Run these commands with your repository URL:"
echo ""
echo "   git remote add origin https://github.com/Deepak878/YOUR-REPO-NAME.git"
echo "   git push -u origin main"
echo ""
echo "3. Then deploy to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Click 'New Project'"
echo "   - Import your GitHub repository"
echo "   - Click 'Deploy'"
echo ""
echo "🎉 Your website will be live in 2-3 minutes!"

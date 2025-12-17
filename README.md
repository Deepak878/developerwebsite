# Deepak Bhattarai - Developer Portfolio

Professional portfolio website showcasing my work as a Full Stack Developer.

## 🚀 Live Site
**Domain:** bhattaraideepak.com.np

## 🛠️ Technologies Used
- **Framework:** Next.js 14 (React)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** React Icons
- **Deployment:** Vercel

## 📱 Features
- Responsive design for all devices
- Dark mode support
- Interactive sections:
  - About Me
  - Experience
  - Skills & Technologies
  - Featured Projects
  - Contact Information
- AdMob integration (ads.txt in root)
- Smooth scrolling navigation
- Modern UI with gradient effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd deepakdeveloperwebsite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

```bash
npm run build
```

This will generate a static export in the `out/` directory.

## 🌐 Deploying to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and link to your Vercel account.

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Custom Domain Setup (bhattaraideepak.com.np)

After deployment, add your custom domain:

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add domain: `bhattaraideepak.com.np`
4. Update your DNS records at your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Alternative DNS (using your nameservers):
```
Primary nameserver: 185.199.108.153
Secondary nameserver: 185.199.109.153
```

Add these A records:
```
Type: A
Name: @
Value: 76.76.21.21
```

Wait for DNS propagation (can take 24-48 hours).

## 📄 AdMob Integration

The `ads.txt` file is located in the `public/` folder and will be accessible at:
- `https://bhattaraideepak.com.np/ads.txt`

This file contains your AdMob publisher ID for monetization verification:
```
google.com, pub-3545057394790435, DIRECT, f08c47fec0942fa0
```

## 📧 Contact

- **Email:** deepakbhattarai878@gmail.com
- **WhatsApp:** +1 (817) 703-3702
- **Phone (Nepal):** +977 9846872765
- **GitHub:** [@Deepak878](https://github.com/Deepak878)

## 📝 License

© 2024 Deepak Bhattarai. All rights reserved.

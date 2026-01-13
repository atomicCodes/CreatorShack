# CreatorShack

Your Creative Toolkit Hub - A modern SaaS platform for creative professionals.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
cd app
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/             # Auth pages (login, signup)
│   │   ├── about/              # About page
│   │   ├── api/                # API routes
│   │   │   └── webhooks/       # Webhook handlers (Polar.sh)
│   │   ├── contact/            # Contact page
│   │   ├── dashboard/          # User dashboard
│   │   ├── features/           # Features page
│   │   ├── pricing/            # Pricing page with 3 tiers
│   │   ├── privacy/            # Privacy policy
│   │   ├── terms/              # Terms of service
│   │   ├── globals.css         # Global styles & design system
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Landing page
│   ├── components/             # Reusable components
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── lib/                    # Utilities & integrations
│       └── polar.ts            # Polar.sh payment integration scaffold
└── public/
    └── logo.png                # CreatorShack logo
```

## 🎨 Design System

The design system is based on the CreatorShack logo colors:

| Color | CSS Variable | Hex |
|-------|-------------|-----|
| Red | `--creator-red` | #E53935 |
| Orange | `--creator-orange` | #FB8C00 |
| Yellow | `--creator-yellow` | #FDD835 |
| Green | `--creator-green` | #43A047 |
| Blue | `--creator-blue` | #1E88E5 |
| Light Blue | `--creator-light-blue` | #4FC3F7 |

### CSS Classes

- `.gradient-text` - Rainbow gradient text effect
- `.gradient-border` - Rainbow gradient border
- `.gradient-bg-animated` - Animated gradient background
- `.btn-primary` - Primary button (blue)
- `.btn-secondary` - Secondary button (outline)
- `.btn-gradient` - Gradient button (rainbow)
- `.card` - Card component with hover effects
- `.animate-fade-in-up` - Fade in animation
- `.animate-float` - Floating animation

## 💳 Payment Integration (Polar.sh)

The payment integration is scaffolded and ready for configuration. 

### Setup

1. Create a [Polar.sh](https://polar.sh) account
2. Create products for each tier (Free, Pro, Team)
3. Add your credentials to `.env.local`:

```env
POLAR_ORGANIZATION_ID=your-organization-id
POLAR_API_KEY=your-api-key
POLAR_FREE_PRODUCT_ID=free-product-id
POLAR_PRO_PRODUCT_ID=pro-product-id
POLAR_TEAM_PRODUCT_ID=team-product-id
POLAR_WEBHOOK_SECRET=your-webhook-secret
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

4. Configure the webhook URL in Polar.sh dashboard:
   `https://your-domain.com/api/webhooks/polar`

### Pricing Tiers

| Tier | Monthly | Yearly |
|------|---------|--------|
| Free | $0 | $0 |
| Pro | $19 | $15/mo ($180/yr) |
| Team | $49 | $39/mo ($468/yr) |

## 🔐 Authentication

Authentication is scaffolded with support for:

- **OAuth Providers:**
  - Google
  - GitHub
  - Apple

- **Email/Password** authentication

To implement actual authentication, integrate with your preferred auth provider:
- [NextAuth.js](https://next-auth.js.org/)
- [Clerk](https://clerk.com/)
- [Auth0](https://auth0.com/)
- [Supabase Auth](https://supabase.com/auth)

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero and features |
| Features | `/features` | All creative tools overview |
| Pricing | `/pricing` | Three-tier pricing plans |
| About | `/about` | Company story and team |
| Contact | `/contact` | Contact form and info |
| Login | `/login` | User login with OAuth |
| Signup | `/signup` | User registration |
| Dashboard | `/dashboard` | User dashboard (protected) |
| Terms | `/terms` | Terms of service |
| Privacy | `/privacy` | Privacy policy |

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Outfit (Google Fonts)
- **Payments:** Polar.sh (scaffolded)

## 📝 Next Steps

1. **Set up authentication** - Integrate NextAuth.js, Clerk, or similar
2. **Configure Polar.sh** - Add your payment credentials
3. **Build tools** - Implement the creative tools
4. **Add database** - Connect to your preferred database
5. **Deploy** - Deploy to Vercel, Netlify, or similar

## 📜 License

Copyright © 2024 CreatorShack. All rights reserved.

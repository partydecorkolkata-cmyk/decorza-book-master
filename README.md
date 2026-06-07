# 🎉 Decorza Book - Party Decoration Booking Platform

A modern web application for booking party and event decoration packages. Built with React, TypeScript, and TanStack technologies for a seamless user experience.

## 📸 Features

- **Birthday Package Catalog** - Browse various themed birthday decoration packages
- **Easy Booking System** - Streamlined checkout and booking process
- **Multiple Theme Options** - Choose from diverse decoration themes:
  - Gold & Black elegance
  - Jungle themed parties
  - Candle & palm decorations
  - Ring designs
  - And many more custom options
- **Responsive Design** - Beautiful UI that works on all devices
- **Real-time Updates** - Live data fetching with TanStack Query
- **Form Validation** - Robust form handling with Zod schema validation

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **TypeScript** - Type-safe development
- **TanStack Start** - Server-side rendering framework
- **TanStack Router** - Routing solution
- **Tailwind CSS v4** - Utility-first styling
- **Radix UI** - Accessible component library

### State & Data Management
- **TanStack React Query** - Server state management
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation

### UI Components & Libraries
- **Radix UI Components** - Dialog, dropdown, tabs, etc.
- **Lucide Icons** - Modern icon set
- **Embla Carousel** - Image carousel
- **Recharts** - Data visualization
- **Sonner** - Toast notifications
- **Vaul** - Drawer component

### Development
- **Vite** - Lightning-fast build tool
- **Cloudflare Workers** - Serverless backend
- **Bun** - Runtime & package manager
- **ESLint & Prettier** - Code quality

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+) or Bun runtime
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/partydecorkolkata-cmyk/decorza-book-master.git

# Navigate to project directory
cd decorza-book-master

# Install dependencies
npm install
# or with bun
bun install
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:5173
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Build in development mode
npm run build:dev
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## 📁 Project Structure

```
decorza-book-master/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── server.ts          # Server entry point
│   └── ...
├── public/                # Static assets
├── .lovable/              # Lovable.dev configuration
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript config
├── wrangler.jsonc         # Cloudflare Workers config
└── tailwind.config.js     # Tailwind configuration
```

## 🎨 Available Birthday Packages

The platform offers multiple themed decoration packages including:
- 🎂 **Classic Birthday** - Elegant designs for milestone birthdays
- 🌴 **Jungle Theme** - Tropical party vibes
- ✨ **Gold & White Ring** - Luxurious ring designs
- 🎈 **Candle Palm** - Intimate candle-lit ambiance
- 🌟 **Gold Collections** - 40th, 50th birthday specials
- 🎭 **Custom Themes** - Personalized decoration options

## 🔧 Configuration Files

- **vite.config.ts** - Vite build configuration with TanStack Start
- **tsconfig.json** - TypeScript compiler options
- **wrangler.jsonc** - Cloudflare Workers configuration
- **components.json** - Component library configuration
- **bunfig.toml** - Bun package manager settings
- **.prettierrc** - Code formatting rules

## 📦 Deployment

The application is configured to deploy on **Cloudflare Workers** using Wrangler.

```bash
# Deploy to Cloudflare
wrangler publish
```

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private. For licensing inquiries, contact the repository owner.

## 👤 Author

**Party Decor Kolkata**
- GitHub: [@partydecorkolkata-cmyk](https://github.com/partydecorkolkata-cmyk)

## 📞 Support

For issues, questions, or feature requests, please open an issue on the GitHub repository.

---

**Built with ❤️ for amazing parties and celebrations!**

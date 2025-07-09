# PrintForge 🖨️

A modern web application for 3D printing enthusiasts. Built with Next.js and enhanced with a full-stack database implementation.

## 🎯 About the Project

PrintForge is a comprehensive platform designed for the 3D printing community, allowing users to explore a vast library of 3D models across various categories. Originally developed as part of the [Learn Next.js course on Scrimba](https://scrimba.com/learn-nextjs-c02moisq6a), this project has been enhanced with additional features including server-side actions and database integration.

## 🚀 Features

- **Browse 3D Models**: Explore thousands of community-created STL files
- **Category Navigation**: Filter models by categories (Tools, Toys, Art, etc.)
- **Search Functionality**: Find specific models using our search feature
- **Responsive Design**: Optimized for desktop and mobile devices
- **Model Details**: View detailed information about each 3D model
- **Professional UI**: Clean, modern interface with smooth transitions

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL with Prisma ORM
- **Icons**: React Icons
- **Fonts**: Google Fonts (Albert Sans, Montserrat Alternates)
- **Package Manager**: PNPM

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (20 or higher)
- PNPM package manager
- PostgreSQL database

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/KhaledSaeed18/print-forge.git
   cd print-forge
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/printforge"
   ```

4. **Set up the database**

   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```bash
print-forge/
├── app/
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Database utilities and helpers
│   ├── 3d-models/          # 3D models pages and routing
│   ├── about/              # About page
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── seed.ts             # Database seeding script
├── public/                 # Static assets
└── README.md
```

## 🎓 Learning Journey

This project originated from the **Learn Next.js course on Scrimba**, where I learned:

- Next.js fundamentals and routing
- Server and client-side rendering
- Dynamic routing and layouts
- Data fetching patterns
- Modern React patterns

### Course Enhancements

Beyond the original course material, I've implemented additional features:

- **Database Integration**: Migrated from JSON files to PostgreSQL with Prisma
- **Server Actions**: Implemented server-side data operations
- **Enhanced TypeScript**: Added comprehensive type definitions
- **Improved Performance**: Optimized data fetching and rendering

## 🗄️ Database Schema

The application uses a PostgreSQL database with the following main entities:

- **Categories**: Organize models into different categories
- **Models**: Store 3D model information including metadata and relationships

## 🚀 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code linting
- `pnpm db:seed` - Seed the database with sample data

## 🌟 Key Features Implemented

### Frontend Features

- Responsive navigation with mobile-optimized design
- Category-based filtering system
- Search functionality across models
- Professional card-based layout for model display
- Smooth hover effects and transitions

### Backend Features

- Database integration with Prisma ORM
- Efficient data fetching with proper error handling
- Type-safe database operations

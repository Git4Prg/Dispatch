<div align="center">
  <h1>🚀 Dispatch (Postman Clone)</h1>
  <p>A modern, high-performance API client alternative to Postman, beautifully crafted with Next.js 15. Test REST APIs and WebSockets, collaborate in workspaces, and leverage AI to supercharge your development workflow.</p>
</div>

<div align="center">
  <img src="./public/post-man-clone.png" alt="Dispatch Overview" width="800"/>
</div>

---

## ✨ Key Features

Dispatch goes beyond a simple HTTP client by bringing powerful, developer-centric features normally found in desktop applications right to your browser.

### 🔌 REST API Client
- **Full HTTP Method Support**: Easily send `GET`, `POST`, `PUT`, `DELETE`, `PATCH` requests.
- **Granular Control**: Manage URL parameters, custom headers, and query strings.
- **Advanced Body Editing**: Send raw text or JSON with our embedded **Monaco Editor** (the same editor powering VS Code).
- **Intelligent Response Viewer**: Pretty-print JSON responses automatically. See status codes, time taken, and payload sizes at a glance.
- **Collections & History**: Save requests into organizeable Collections to maintain a robust library of test cases.

### 🌐 Real-Time WebSocket Client
- Connect directly to `ws://` and `wss://` servers.
- Stream ongoing communication and read messages instantly.
- Clear breakdown of **Incoming** and **Outgoing** payloads, complete with connection metadata and timestamps.

### 🛡 Workspace & Collaboration
- **Team Workspaces**: Keep projects isolated. Create distinct workspaces for different clients or environments.
- **Invite Links**: Bring developers into your workspace through secure, tokenized invitation links.
- **Role-based Access**: Assign Admin or Viewer permissions to members.
- **Environment Variables**: Store sensitive tokens (`Base URL`, `Auth Tokens`) per-workspace safely.

### 🤖 AI-Powered Developer Assistant
Powered by **Google Gemini 2.0 Flash** via the Vercel AI SDK, Dispatch uses AI so you can type less and test more:
- **Smart Request Naming**: Describe your endpoint, and the AI will suggest matching RESTful names automatically.
- **Generative JSON Bodies**: Instead of manually typing JSON payloads, just tell the AI what you need (`"Create a nested user profile struct with mock data"`), and it will magically generate a valid, production-ready JSON body for your POST/PUT requests!

---

## 🛠️ Tech Stack

We used the latest and greatest in the JavaScript/TypeScript ecosystem to build a fast, reactive, and robust application.

**Core Tech:**
* **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Actions)
* **Language**: TypeScript
* **Database**: PostgreSQL
* **ORM**: Prisma Client + `@prisma/adapter-pg`
* **Authentication**: [Better Auth](https://better-auth.com/) (Google & GitHub OAuth ready)

**State & Data Fetching:**
* **State Management**: Zustand
* **Async Cache & Data**: TanStack Query (React Query)

**AI & Utilities:**
* **AI Engine**: `@ai-sdk/google` (Gemini 2.0), `ai`
* **Code Editor**: Monaco Editor (`@monaco-editor/react`)

**UI & Styling:**
* **Styling**: Tailwind CSS (v4)
* **Components**: shadcn/ui & Radix UI Primitives
* **Icons**: Lucide React
* **Animations**: Framer Motion & Embla Carousel

---

## 🚀 Getting Started

Want to run Dispatch locally? Follow these steps to get your local development environment up and running.

### 1. Clone the repository
```bash
git clone https://github.com/Aestheticsuraj234/postman-clone.git
cd postman-clone
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file at the root of your project and populate it with the following required variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/postmanclone"

# Better Auth Configuration
BETTER_AUTH_SECRET="your-random-secret-string"
BETTER_AUTH_URL="http://localhost:3000"

# (Optional) Social Logins
GITHUB_CLIENT_ID="your-github-id"
GITHUB_CLIENT_SECRET="your-github-secret"
GOOGLE_CLIENT_ID="your-google-id"
GOOGLE_CLIENT_SECRET="your-google-secret"

# Vercel / App Config
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# AI Features
GOOGLE_GENERATIVE_AI_API_KEY="your-gemini-api-key"
```

### 4. Initialize the database
Push the Prisma schema to your PostgreSQL database.
```bash
npx prisma generate
npx prisma db push
```

### 5. Start the development server
```bash
npm run dev
```

Your app should now be running locally on [http://localhost:3000](http://localhost:3000)!

---

## 📜 License & Open Source

This project is built for the community and is **MIT Licensed**. 
Feel free to fork, contribute, open issues, and submit PRs! Let's build a better, openly accessible API client together.

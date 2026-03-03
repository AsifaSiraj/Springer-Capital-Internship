# SalesIQ — Sales Dashboard 2022–2024

A production-grade sales analytics dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Recharts**. The app visualizes retail sales data across 2022, 2023, and 2024 — inspired by Kaggle's Superstore Sales dataset.

---

## What This Project Does

SalesIQ is a single-page analytics dashboard with the following features:

- **Multi-year sales data** for 2022, 2023, and 2024 (monthly breakdown, category split, regional distribution)
- **KPI cards** showing Total Revenue, Units Sold, Net Profit, and Top Category — each with YoY growth indicators
- **Interactive charts** switchable between Bar, Line, and Pie using Recharts
- **Custom Revenue Threshold Filter** — type a minimum revenue value to filter months and categories shown in the charts
- **Year-over-Year Comparison** chart overlaying all 3 years on a single line chart
- **Category Detail Table** with revenue, units sold, and growth rate per product category
- **Regional Distribution** shown as animated progress bars

---

## Tech Stack

| Technology       | Version  | Purpose                         |
|------------------|----------|---------------------------------|
| Next.js          | 15.x     | App router, server/client split |
| TypeScript       | 5.x      | Type safety throughout          |
| Tailwind CSS     | 3.x      | Utility-first styling           |
| Recharts         | 2.x      | Interactive chart components    |
| Lucide React     | 0.468    | Icon library                    |
| clsx + tw-merge  | latest   | Conditional class merging       |

---

## Project Structure — Atomic Design Principle

The project follows the **Atomic Design** methodology:

```
src/
├── app/
│   ├── layout.tsx               # Root layout (metadata, fonts)
│   ├── page.tsx                 # Redirects to /dashboard
│   ├── globals.css              # Global styles, CSS variables
│   └── dashboard/
│       ├── page.tsx             # Server component entry
│       └── DashboardClient.tsx  # Client-side dashboard shell
│
├── components/
│   ├── ui/                      # ATOMS — base building blocks
│   │   ├── Badge.tsx            # Status badge
│   │   ├── Button.tsx           # Multi-variant button
│   │   ├── Card.tsx             # Card container + sub-components
│   │   ├── Divider.tsx          # Horizontal divider
│   │   └── KpiCard.tsx          # Metric card with trend indicator
│   │
│   ├── charts/                  # MOLECULES — composed chart components
│   │   ├── RevenueChart.tsx     # Monthly revenue (bar/line)
│   │   ├── CategoryPieChart.tsx # Category breakdown (pie/bar)
│   │   ├── RegionChart.tsx      # Regional distribution bars
│   │   └── YearCompareChart.tsx # Multi-year overlay line chart
│   │
│   └── filters/                 # MOLECULES — interactive filter controls
│       ├── YearSelector.tsx     # Toggle between 2022/2023/2024
│       ├── ChartTypeToggle.tsx  # Switch bar/line/pie
│       └── ThresholdInput.tsx   # Custom minimum revenue input
│
├── data/
│   └── salesData.ts             # Mock data store (Kaggle-inspired)
│
├── hooks/
│   └── useDashboardFilters.ts   # State management + derived data
│
├── lib/
│   └── utils.ts                 # cn(), formatCurrency(), formatNumber()
│
└── types/
    └── index.ts                 # Shared TypeScript interfaces
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone or download the project
cd sales-dashboard

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — you will be redirected to `/dashboard`.

### Build for Production

```bash
npm run build
npm run start
```

---

## Features In Detail

### Year Selector
Toggle between 2022, 2023, and 2024 in the top-right of the page header. All charts and KPIs update instantly.

### Chart Type Toggle
Switch between:
- **Bar** — grouped bar chart showing revenue and profit side by side
- **Line** — smooth line chart for trend visibility
- **Pie** — donut pie chart in the Category section

### Custom Revenue Threshold (Min Revenue Filter)
Type any dollar amount in the "Min Revenue" input field to filter out months and categories below that threshold. Useful for focusing on high-performing periods. Click "Clear" to reset.

### Year-over-Year Chart
Fixed multi-line chart showing 2022 (dashed), 2023 (blue), and 2024 (orange) monthly revenue together for direct comparison.

---

## Data Source

Mock data is inspired by the [Kaggle Sample Superstore Sales Dataset](https://www.kaggle.com/datasets/vivek468/superstore-dataset-final), a popular retail analytics dataset with orders across Technology, Furniture, and Office Supplies categories across US regions.

The values in `src/data/salesData.ts` are randomly generated but statistically plausible for a mid-size retailer doing ~$4M/year in revenue.

---

## Enhancements Roadmap

- [ ] **API Integration** — swap mock data for a real API endpoint (e.g. a Next.js route handler fetching from a database)
- [ ] **Export to CSV** — allow users to download filtered data
- [ ] **Dark Mode** — CSS variable swap for full dark theme
- [ ] **Drill-down** — click a category to see its monthly breakdown
- [ ] **Search** — filter by product name within a category

---

## License

MIT

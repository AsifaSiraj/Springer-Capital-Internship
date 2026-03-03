import type { SalesDataStore } from "@/types";

// Mock data inspired by real Kaggle retail sales datasets
// (e.g., Superstore Sales, E-commerce Product Sales)
export const salesData: SalesDataStore = {
  2024: {
    year: 2024,
    totalRevenue: 4_872_340,
    totalUnits: 61_204,
    totalProfit: 1_217_850,
    topCategory: "Technology",
    growthRate: 12.4,
    monthly: [
      { month: "Jan", revenue: 328_000, units: 4120, profit: 82_000 },
      { month: "Feb", revenue: 295_500, units: 3710, profit: 73_875 },
      { month: "Mar", revenue: 381_200, units: 4785, profit: 95_300 },
      { month: "Apr", revenue: 362_800, units: 4550, profit: 90_700 },
      { month: "May", revenue: 415_300, units: 5215, profit: 103_825 },
      { month: "Jun", revenue: 398_700, units: 5000, profit: 99_675 },
      { month: "Jul", revenue: 441_200, units: 5540, profit: 110_300 },
      { month: "Aug", revenue: 429_600, units: 5395, profit: 107_400 },
      { month: "Sep", revenue: 387_900, units: 4870, profit: 96_975 },
      { month: "Oct", revenue: 452_140, units: 5680, profit: 113_035 },
      { month: "Nov", revenue: 496_300, units: 6230, profit: 124_075 },
      { month: "Dec", revenue: 483_700, units: 6109, profit: 120_925 },
    ],
    byCategory: [
      { category: "Technology",  revenue: 1_456_200, units: 12_340, growth: 18.2 },
      { category: "Furniture",   revenue: 1_102_800, units: 9_870,  growth: 8.5  },
      { category: "Office Suppl",revenue: 987_400,   units: 21_450, growth: 6.1  },
      { category: "Apparel",     revenue: 742_900,   units: 11_220, growth: 14.7 },
      { category: "Electronics", revenue: 583_040,   units: 6_324,  growth: 22.3 },
    ],
    byRegion: [
      { region: "West",    revenue: 1_458_700, share: 29.9 },
      { region: "East",    revenue: 1_312_300, share: 26.9 },
      { region: "Central", revenue: 1_083_440, share: 22.2 },
      { region: "South",   revenue: 1_017_900, share: 20.9 },
    ],
  },

  2023: {
    year: 2023,
    totalRevenue: 4_332_610,
    totalUnits: 55_840,
    totalProfit: 1_066_300,
    topCategory: "Technology",
    growthRate: 7.8,
    monthly: [
      { month: "Jan", revenue: 284_100, units: 3560, profit: 71_025 },
      { month: "Feb", revenue: 261_500, units: 3280, profit: 65_375 },
      { month: "Mar", revenue: 347_800, units: 4360, profit: 86_950 },
      { month: "Apr", revenue: 322_400, units: 4040, profit: 80_600 },
      { month: "May", revenue: 368_700, units: 4620, profit: 92_175 },
      { month: "Jun", revenue: 352_100, units: 4415, profit: 88_025 },
      { month: "Jul", revenue: 393_500, units: 4935, profit: 98_375 },
      { month: "Aug", revenue: 381_200, units: 4780, profit: 95_300 },
      { month: "Sep", revenue: 345_600, units: 4330, profit: 86_400 },
      { month: "Oct", revenue: 403_900, units: 5065, profit: 100_975 },
      { month: "Nov", revenue: 441_310, units: 5535, profit: 110_328 },
      { month: "Dec", revenue: 430_500, units: 5920, profit: 107_625 },
    ],
    byCategory: [
      { category: "Technology",  revenue: 1_231_700, units: 10_420, growth: 11.4 },
      { category: "Furniture",   revenue: 1_015_600, units: 9_120,  growth: 5.2  },
      { category: "Office Suppl",revenue: 931_100,   units: 19_820, growth: 3.8  },
      { category: "Apparel",     revenue: 647_800,   units: 9_780,  growth: 9.1  },
      { category: "Electronics", revenue: 506_410,   units: 6_700,  growth: 15.6 },
    ],
    byRegion: [
      { region: "West",    revenue: 1_296_800, share: 29.9 },
      { region: "East",    revenue: 1_166_800, share: 26.9 },
      { region: "Central", revenue: 961_840,   share: 22.2 },
      { region: "South",   revenue: 907_170,   share: 20.9 },
    ],
  },

  2022: {
    year: 2022,
    totalRevenue: 4_018_490,
    totalUnits: 51_230,
    totalProfit: 964_438,
    topCategory: "Furniture",
    growthRate: 4.2,
    monthly: [
      { month: "Jan", revenue: 259_200, units: 3240, profit: 64_800 },
      { month: "Feb", revenue: 238_700, units: 2985, profit: 59_675 },
      { month: "Mar", revenue: 318_400, units: 3985, profit: 79_600 },
      { month: "Apr", revenue: 296_100, units: 3710, profit: 74_025 },
      { month: "May", revenue: 339_500, units: 4250, profit: 84_875 },
      { month: "Jun", revenue: 324_800, units: 4065, profit: 81_200 },
      { month: "Jul", revenue: 362_100, units: 4530, profit: 90_525 },
      { month: "Aug", revenue: 350_400, units: 4385, profit: 87_600 },
      { month: "Sep", revenue: 318_900, units: 3995, profit: 79_725 },
      { month: "Oct", revenue: 372_490, units: 4665, profit: 93_123 },
      { month: "Nov", revenue: 406_900, units: 5095, profit: 101_725 },
      { month: "Dec", revenue: 431_000, units: 6325, profit: 107_750 },
    ],
    byCategory: [
      { category: "Technology",  revenue: 1_105_700, units: 9_340,  growth: 6.8  },
      { category: "Furniture",   revenue: 965_200,   units: 8_650,  growth: 9.4  },
      { category: "Office Suppl",revenue: 896_800,   units: 18_110, growth: 1.9  },
      { category: "Apparel",     revenue: 593_600,   units: 8_990,  growth: 5.7  },
      { category: "Electronics", revenue: 457_190,   units: 6_140,  growth: 8.2  },
    ],
    byRegion: [
      { region: "West",    revenue: 1_201_600, share: 29.9 },
      { region: "East",    revenue: 1_080_900, share: 26.9 },
      { region: "Central", revenue: 891_900,   share: 22.2 },
      { region: "South",   revenue: 844_090,   share: 20.9 },
    ],
  },
};

export const YEARS = [2024, 2023, 2022] as const;
export const CHART_TYPES = ["bar", "line", "pie"] as const;
export const CATEGORIES = [
  "Technology",
  "Furniture",
  "Office Suppl",
  "Apparel",
  "Electronics",
] as const;

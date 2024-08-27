import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#539dfd', // 添加自定义颜色
      },
      transitionDuration: {
        'DEFAULT': '300ms', // 添加默认过渡时间为0.3秒
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;

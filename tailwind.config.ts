import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
};
export default config;

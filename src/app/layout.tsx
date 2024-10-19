import { NextUIProvider } from '@nextui-org/react';

import Header from '@/components/Header'
import Footer from '@/components/Footer'

// 加载样式文件
import "@/styles/index.scss";
import "@/styles/tailwind.scss";

// 使用本地字体
// import localFont from 'next/font/local'
// const LXGWWenKai = localFont({
//   src: '../assets/font/LXGWWenKai.ttf',
//   display: 'swap',
// })

import { getWebDataAPI } from '@/api/project'

import Tools from '@/components/Tools';
import NProgress from '@/components/NProgress';

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { data } = await getWebDataAPI();

  return (
    <html lang="en">
      <head>
        <title>{`${data?.title} - ${data?.subhead}`}</title>
        <meta name="description" content={data?.description} />
        <meta name="keywords" content={data?.keyword} />
        <link rel="icon" href={data?.favicon} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@callmebill/lxgw-wenkai-web@latest/style.css" />

        <script dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?e5bf799a3e49312141c8b677b7bec1c2";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `
        }} />
      </head>

      {/* <body className={`${LXGWWenKai.className} dark:!bg-black-a transition-colors`}> */}
      <body className={`dark:!bg-black-a transition-colors`}>
        {/* 进度条组件 */}
        <NProgress />
        {/* 顶部导航组件 */}
        <Header />

        {/* 主体内容 */}
        <NextUIProvider>
          {children}
        </NextUIProvider>

        {/* 底部组件 */}
        <Footer />
        {/* 右侧工具栏组件 */}
        <Tools />
      </body>
    </html>
  );
}

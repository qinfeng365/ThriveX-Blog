import Swiper from "@/components/Swiper";
import Typed from "@/components/Typed";
import Starry from "@/components/Starry"
import Container from "@/components/Container";
import ArticleLayout from "@/components/ArticleLayout";
import Sidebar from "@/components/Sidebar";

import { getThemeDataAPI } from '@/api/project'

interface Props {
  searchParams: { page: number };
};

export default async ({ searchParams }: Props) => {
  const page = searchParams.page || 1;
  const { data } = await getThemeDataAPI()

  return (
    <>
      <Swiper src={data?.swiperImage}>
        {/* 星空背景组件 */}
        <Starry />
        {/* 打字机组件 */}
        <Typed className="absolute top-[45%] sm:top-[40%] left-[50%] transform -translate-x-1/2 w-[80%] text-center text-white xs:text-xl sm:text-[30px] leading-7 sm:leading-[40px] md:leading-[50px] custom_text_shadow"></Typed>
      </Swiper>

      <Container>
        {/* 文章列表 */}
        <ArticleLayout page={page} />
        {/* 侧边栏 */}
        <Sidebar />
      </Container>
    </>
  );
}
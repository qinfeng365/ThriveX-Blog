import Swiper from "@/components/Swiper";
import Typed from "@/components/Typed";
import Starry from "@/components/Starry"

export default function Home() {
  return (
    <>
      <Swiper>
        <Starry />
        <Typed className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[80%] text-center text-white text-[30px] custom_text_shadow"></Typed>
      </Swiper>
    </>
  );
}
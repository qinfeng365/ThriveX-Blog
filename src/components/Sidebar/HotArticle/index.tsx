import Link from 'next/link';
import Image from 'next/image';
import { getRecommendedArticleListAPI } from '@/api/article'
import { IoIosArrowForward } from "react-icons/io";
import fire from '@/assets/svg/other/fire.svg'
import "./index.scss"

const RandomArticle = async () => {
    // 获取热门文章
    const { data } = await getRecommendedArticleListAPI();

    return (
        <div className='RandomArticleComponent'>
            <div className="randomArticle">
                <div className="title">
                    <Image src={fire} alt='热门文章'></Image>
                    <span> 热门文章</span>
                </div>

                {/* 文章列表 */}
                <div className="list">
                    {data.map((item) => (
                        <div className="item" key={item.id}>
                            <Link href={`/article/${item.id}`}>
                                <IoIosArrowForward />
                                <span className='w-[80%]'>{item.title}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RandomArticle;

import Link from 'next/link';
import Image from 'next/image';
import { getRandomArticleList } from '@/api/article'
import article from '@/assets/svg/other/article.svg'
import { IoIosArrowForward } from "react-icons/io";
import "./index.scss"

const RandomArticle = async () => {
    // 获取随机文章
    const { data } = await getRandomArticleList();

    return (
        <div className='RandomArticleComponent'>
            <div className="randomArticle">
                <div className="title">
                    <Image src={article} alt='随机文章图标'></Image>
                    <span> 随机文章</span>
                </div>

                {/* 文章列表 */}
                <div className="list">
                    {data.map((item) => (
                        <div className="item" key={item.id}>
                            <Link href={`/article/${item.id}`}>
                                <IoIosArrowForward />
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RandomArticle;

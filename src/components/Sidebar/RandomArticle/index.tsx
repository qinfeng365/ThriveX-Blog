import Image from 'next/image';
import { randomImage } from '@/utils';
import { getRandomArticleListAPI } from '@/api/article';
import article from '@/assets/svg/other/article.svg'
import "./index.scss"
import Link from 'next/link';

const HotArticle = async () => {
    const { data } = await getRandomArticleListAPI()

    return (
        <div className='HotArticleComponent'>
            <div className="HotArticle">
                <h3 className="title">
                    <Image src={article} alt="随机推荐" /> 随机推荐
                </h3>

                <div className="list">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="item"
                            style={{ backgroundImage: `url(${item.cover || randomImage()})` }}
                        >
                            <Link href="/">
                                <h4>{item.title}</h4>
                            </Link>
                            
                            <span>{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HotArticle;
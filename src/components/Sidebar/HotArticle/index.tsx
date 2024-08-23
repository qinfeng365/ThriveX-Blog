import Image from 'next/image';
import { randomImage } from '@/utils';
import { getRandomArticleList } from '@/api/article';
import fire from '@/assets/svg/other/fire.svg'
import "./index.scss"

const HotArticle = async () => {
    const { data } = await getRandomArticleList()

    return (
        <div className='HotArticleComponent'>
            <div className="HotArticle">
                <h3 className="title">
                    <Image src={fire} alt="热门推荐" /> 热门推荐
                </h3>

                <div className="list">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="item"
                            style={{ backgroundImage: `url(${item.cover || randomImage()})` }}
                        >
                            <a href="javascript:void(0);">
                                <h4>{item.title}</h4>
                            </a>
                            <span>{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HotArticle;
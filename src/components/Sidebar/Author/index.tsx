import Image from 'next/image';
import Request from '@/utils/request';
import avatarBg from '@/assets/image/avatar_bg.jpg';
import { Social, Web } from '@/types/app/project';
import { User } from '@/types/app/user';
import './index.scss';

import CSDN from '@/assets/svg/socializing/CSDN.svg'
import Douyin from '@/assets/svg/socializing/Douyin.svg'
import GitHub from '@/assets/svg/socializing/GitHub.svg'
import Gitee from '@/assets/svg/socializing/Gitee.svg'
import Juejin from '@/assets/svg/socializing/Juejin.svg'
import QQ from '@/assets/svg/socializing/QQ.svg'
import Weixin from '@/assets/svg/socializing/Weixin.svg'
import { getUserDataAPI } from '@/api/user';

const Author = async () => {
    const { data } = await getUserDataAPI()
    const { data: { social } } = await Request<Web>("GET", "/project/web")
    const socialList = JSON.parse(social)

    // 图标列表
    const images: { [string: string]: string } = {
        "CSDN": CSDN,
        "Douyin": Douyin,
        "GitHub": GitHub,
        "Gitee": Gitee,
        "Juejin": Juejin,
        "QQ": QQ,
        "Weixin": Weixin,
    }

    const getIcon = (name: string) => {
        return images[name]
    };

    return (
        <div className='AuthorComponent'>
            <div className="author" style={{ backgroundImage: `url(${avatarBg})` }}>
                {/* 作者头像 */}
                <div className="avatar">
                    <img src={data.avatar} alt="" />
                </div>

                {/* 作者介绍 */}
                <div className="info">
                    <h3>{data.name}</h3>
                    <p>{data.info}</p>
                </div>

                {/* 社交账号 */}
                <div className="socializing">
                    <div className="title"></div>

                    <div className="list">
                        {socialList.map((item: Social) => (
                            <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.name}>
                                <Image src={getIcon(item.name)} alt={item.name} title={item.name} ></Image>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Author;
import { Feed } from 'feed';
import { NextResponse } from 'next/server';

import { getArticlePagingAPI } from '@/api/article'
import { getWebDataAPI } from '@/api/project'
import { getUserDataAPI } from '@/api/user'

export async function GET() {
    const { data: web } = await getWebDataAPI()
    const { data: user } = await getUserDataAPI()
    const { data: article } = await getArticlePagingAPI({ pagination: { page: 1, size: 8 } })
    const list = article?.result || []

    const feed = new Feed({
        title: `${web.title} - ${web.subhead}`,
        description: web.description,
        id: web.url,
        link: web.url,
        language: 'zh-CN',
        copyright: 'ThriveX 现代化博客管理系统',
        updated: new Date(),
        generator: '为爱发电',
        docs: "https://github.com/LiuYuYang01/ThriveX-Blog",
        author: {
            name: user.name,
            email: user.email,
            link: web.url
        },
        image: user.avatar,
        feed: web.url + '/api/rss'
    });

    list.forEach(item => {
        feed.addItem({
            id: item.id + '',
            title: item.title,
            link: web.url + '/article/' + item.id,
            description: item.description,
            content: item.content,
            copyright: 'ThriveX 现代化博客管理系统',
            date: new Date(+item.createTime!)
        });
    });

    const xml = feed.rss2();

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
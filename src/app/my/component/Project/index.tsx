"use client"

import { Tabs, Tab, Card, CardBody } from "@nextui-org/react"

export default () => {
    return (
        <>
            <div className="w-3/6 mx-auto">
                <div className="flex w-full flex-col">
                    <Tabs aria-label="Options" placement="top" classNames={{ wrapper: "flex flex-col", base: "justify-center" }}>
                        <Tab key="ThriveX" title="ThriveX">
                            <Card>
                                <CardBody className="flex-row space-x-10 p-[20px_30px]">
                                    <div className="sticky top-0 w-2/6">
                                        <h3 className="text-[18px] mb-4">作品预览：</h3>
                                        <div className="grid grid-cols-2 gap-4 p-2.5 border rounded-xl">
                                            <img src="https://bu.dusays.com/2024/09/17/66e9704b2b809.png" alt="" className="rounded-lg" />
                                            <img src="https://bu.dusays.com/2024/09/17/66e97036dddcb.png" alt="" className="rounded-lg" />
                                            <img src="https://bu.dusays.com/2024/09/17/66e97035726ae.png" alt="" className="rounded-lg" />
                                            <img src="https://bu.dusays.com/2024/09/17/66e97031cd456.png" alt="" className="rounded-lg" />
                                        </div>
                                    </div>

                                    <div className="overflow-auto w-4/6 h-60 pb-8 text-sm space-y-8">
                                        <div>
                                            <h3 className="text-[18px] mb-4">作品详情：</h3>
                                            <p className="text-gray-700 dark:text-[#8c9ab1]">
                                                🎉 Thrive 是一个简而不简单的现代化博客管理系统，专注于分享技术文章和知识，为技术爱好者和从业者提供一个分享、交流和学习的平台。用户可以在平台上发表自己的技术文章，或浏览其他用户分享的文章，并与他们进行讨论和互动。
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-[18px] mb-4">技术栈：</h3>
                                            <div className="text-gray-700 dark:text-[#8c9ab1]">
                                                <p className="text-xs">前端：React、Nextjs、TypeScript、Zustand、TailwindCSS、Antd、Scss、Echarts</p>
                                                <p className="text-xs">后端：Spring Boot、Mybatis Plus、MySQL、Redis、Qiniu、Socket.io、Swagger</p>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-[18px] mb-4">GitHub：</h3>
                                            <div className="space-y-2">
                                                <div>
                                                    <span>前端：</span>
                                                    <a href="https://github.com/LiuYuYang01/ThriveX-Blog" target="_blank" className="text-xs text-primary">https://github.com/LiuYuYang01/ThriveX-Blog</a>
                                                </div>

                                                <div>
                                                    <span>控制端：</span>
                                                    <a href="https://github.com/LiuYuYang01/ThriveX-Admin" target="_blank" className="text-xs text-primary">https://github.com/LiuYuYang01/ThriveX-Admin</a>
                                                </div>

                                                <div>
                                                    <span>后端：</span>
                                                    <a href="https://github.com/LiuYuYang01/ThriveX-Service" target="_blank" className="text-xs text-primary">https://github.com/LiuYuYang01/ThriveX-Service</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>

                        <Tab key="Thrive" title="Thrive">
                            <Card>
                                <CardBody className="flex-row space-x-10 p-[20px_30px]">
                                    <div className="sticky top-0 w-2/6">
                                        <h3 className="text-[18px] mb-4">作品预览：</h3>
                                        <div className="grid grid-cols-2 gap-4 p-2.5 border rounded-xl">
                                            <img src="https://bu.dusays.com/2024/09/17/66e96cb4e8417.png" alt="" className="rounded-lg" />
                                            <img src="https://bu.dusays.com/2024/09/17/66e96ca366600.png" alt="" className="rounded-lg" />
                                            <img src="https://bu.dusays.com/2024/09/17/66e96ca781d49.png" alt="" className="rounded-lg" />
                                            <img src="https://bu.dusays.com/2024/09/17/66e96c9e76c81.png" alt="" className="rounded-lg" />
                                        </div>
                                    </div>

                                    <div className="overflow-auto w-4/6 h-60 pb-8 text-sm space-y-8">
                                        <div>
                                            <h3 className="text-[18px] mb-4">作品详情：</h3>
                                            <p className="text-gray-700 dark:text-[#8c9ab1]">
                                                🎉 Thrive 是一个简而不简单的现代化博客管理系统，专注于分享技术文章和知识，为技术爱好者和从业者提供一个分享、交流和学习的平台。用户可以在平台上发表自己的技术文章，或浏览其他用户分享的文章，并与他们进行讨论和互动。
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-[18px] mb-4">技术栈：</h3>
                                            <div className="text-gray-700 dark:text-[#8c9ab1]">
                                                <p className="text-xs">前端：Vue3、TypeScript、Pinia、Element-plus、Scss、Echarts 、highlight.js</p>
                                                <p className="text-xs">后端：Flask、SQLAlchemy、MySQL、Flask-JWT、Socket.io、Swagger</p>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-[18px] mb-4">GitHub：</h3>
                                            <div className="space-y-2">
                                                <div>
                                                    <span>前端：</span>
                                                    <a href="https://github.com/LiuYuYang01/Thrive_Blog" target="_blank" className="text-xs text-primary">https://github.com/LiuYuYang01/Thrive_Blog</a>
                                                </div>

                                                <div>
                                                    <span>控制端：</span>
                                                    <a href="https://github.com/LiuYuYang01/Thrive_Admin" target="_blank" className="text-xs text-primary">https://github.com/LiuYuYang01/Thrive_Admin</a>
                                                </div>

                                                <div>
                                                    <span>后端：</span>
                                                    <a href="https://github.com/LiuYuYang01/Thrive_Api_Py" target="_blank" className="text-xs text-primary">https://github.com/LiuYuYang01/Thrive_Api_Py</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>

                        <Tab key="Campus" title="云上校园">
                            <Card>
                                <CardBody>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}
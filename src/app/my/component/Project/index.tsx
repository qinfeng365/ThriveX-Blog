"use client"

import { Project } from "@/types/app/my"
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css";

export default ({ data }: { data: Project[] }) => {
    return (
        <>
            <div className="w-3/6 mx-auto">
                <div className="flex w-full flex-col">
                    <Tabs aria-label="Options" placement="top" classNames={{ wrapper: "flex flex-col", base: "justify-center" }}>
                        {
                            data.map((item, index) => (
                                <Tab key={index} title={item.name}>
                                    <Card>
                                        <CardBody className="flex-row space-x-10 p-[20px_30px]">
                                            <div className="sticky top-0 w-2/6">
                                                <h3 className="text-[18px] mb-4">作品预览：</h3>
                                                <div className="grid grid-cols-2 gap-2 p-2.5 border rounded-xl">
                                                    <PhotoProvider>
                                                        {
                                                            item.images.map((img, index) => (
                                                                <PhotoView key={index} src={img || ''}>
                                                                    <img src={img} alt="作品图片" className="border hover:scale-[1.2] rounded-lg cursor-pointer transition-all" />
                                                                </PhotoView>
                                                            ))
                                                        }
                                                    </PhotoProvider>
                                                </div>
                                            </div>

                                            <div className="overflow-auto w-4/6 h-60 pb-8 text-sm space-y-8">
                                                <div>
                                                    <h3 className="text-[18px] mb-4">作品详情：</h3>
                                                    <p className="text-gray-700 dark:text-[#8c9ab1]">{item.description}</p>
                                                </div>

                                                <div>
                                                    <h3 className="text-[18px] mb-4">技术栈：</h3>
                                                    <div className="text-gray-700 dark:text-[#8c9ab1]">
                                                        <p className="text-xs">前端：{item.front.technology}</p>
                                                        <p className="text-xs">控制端：{item.control.technology}</p>
                                                        <p className="text-xs">后端：{item.backend.technology}</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <h3 className="text-[18px] mb-4">GitHub：</h3>
                                                    <div className="space-y-2">
                                                        <div>
                                                            <span>前端：</span>
                                                            <a href={item.front.url} target="_blank" className="text-xs text-primary">{item.front.url}</a>
                                                        </div>

                                                        <div>
                                                            <span>控制端：</span>
                                                            <a href={item.control.url} target="_blank" className="text-xs text-primary">{item.control.url}</a>
                                                        </div>

                                                        <div>
                                                            <span>后端：</span>
                                                            <a href={item.backend.url} target="_blank" className="text-xs text-primary">{item.backend.url}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Tab>
                            ))
                        }
                    </Tabs>
                </div>
            </div>
        </>
    )
}
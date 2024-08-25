"use client"

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Comment } from '@/types/app/comment'
import { addCommentDataAPI } from '@/api/comment';
import "./index.scss"

interface Props {
    id: number
}

const CommentForm = ({ id }: Props) => {
    const [isEmote, setIsEmote] = useState(false);
    const [placeholder, setPlaceholder] = useState("来发一针见血的评论吧~");
    const [cid, setCid] = useState(0);
    const [isPublish, setIsPublish] = useState(false);

    const { register, control, formState: { errors }, handleSubmit, reset, setValue } = useForm({
        defaultValues: {
            content: "",
            name: "",
            email: "",
            url: "",
            avatar: ''
        }
    });

    useEffect(() => {
        const info = JSON.parse(localStorage.getItem("data") || '{}');
        setValue('name', info.name || '');
        setValue('email', info.email || '');
        setValue('avatar', info.avatar || '');
        setValue('url', info.url || '');
    }, [setValue]);

    // const reply = (data) => {
    //     setCid(data.id);
    //     setPlaceholder(`回复评论给：${data.name}`);
    // };

    const onSubmit = async (data: Comment) => {
        const { code, message } = await addCommentDataAPI(id, { ...data, createTime: Date.now() + "" })
        console.log(code);
        if (code !== 200) return alert("发布评论失败：" + message);

        alert("🎉 发布评论成功, 请等待审核!");
        // setPlaceholder("来发一针见血的评论吧~");
    };

    // const saveLocally = (formData) => {
    //     const info = { name: formData.name, email: formData.email, avatar: formData.avatar, url: formData.url };
    //     localStorage.setItem("data", JSON.stringify(info));
    // };

    return (
        <div className='CommentComponent'>
            <div className="comment mt-[70px]">
                <div className="title relative top-0 left-0 w-full h-[1px] mb-10 bg-[#f7f7f7] transition-colors"></div>

                <form className="form space-y-2">
                    <div className='w-full'>
                        <textarea placeholder={placeholder} className="ipt w-full p-4 min-h-36" {...register("content", { required: "请输入内容" })} />
                        <span className='text-red-400 text-sm pl-3'>{errors?.content?.message}</span>
                    </div>

                    <div className='flex flex-col'>
                        <input type="text" className="ipt w-48 h-9 pl-4" placeholder="你的名称 *" {...register("name", { required: "请输入名称" })} />
                        <span className='text-red-400 text-sm pl-3 mt-1'>{errors?.name?.message}</span>
                    </div>

                    <div className='flex flex-col'>
                        <input type="text" className="ipt w-64 h-9 pl-4" placeholder="你的邮箱（选填）*" {...register("email", { pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "请输入正确的邮箱" } })} />
                        <span className='text-red-400 text-sm pl-3 mt-1'>{errors?.email?.message}</span>
                    </div>

                    <div className='flex flex-col'>
                        <input type="text" className="ipt w-80 h-9 pl-4" placeholder="头像（选填）*" {...register("avatar", { pattern: { value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/, message: "请输入正确的头像链接" } })} />
                        <span className='text-red-400 text-sm pl-3 mt-1'>{errors?.avatar?.message}</span>
                    </div>

                    <div className='w-full flex flex-col'>
                        <input type="text" className="ipt w-full h-9 pl-4" placeholder="你的站点（选填）*"  {...register("url", { pattern: { value: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/, message: "请输入正确的网站链接" } })} />
                        <span className='text-red-400 text-sm pl-3 mt-1'>{errors?.url?.message}</span>
                    </div>

                    <button className="w-full h-10 !mt-4 text-white rounded-md bg-primary text-center" onClick={handleSubmit(onSubmit)}>发表评论</button>
                </form>

                {/* <List isPublish={isPublish} reply={reply} /> */}
            </div>
        </div>
    );
};

export default CommentForm;

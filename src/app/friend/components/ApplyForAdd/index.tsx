"use client"

import { useEffect, useState } from "react";
import { Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Select, SelectItem, Textarea } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Web, WebType } from "@/types/app/web";
import { addWebDataAPI, getWebTypeListAPI } from '@/api/web'
import { Bounce, toast, ToastOptions } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [typeList, setTypeList] = useState<WebType[]>([])

  // 获取网站类型列表
  const getWebTypeList = async () => {
    const { data } = await getWebTypeListAPI()
    setTypeList(data)
  }
  useEffect(() => {
    getWebTypeList()
  }, [])

  const [defaultValues, setDefaultValues] = useState<Web>({} as Web)
  const { handleSubmit, control, formState: { errors }, trigger } = useForm<Web>({ defaultValues });
  const onSubmit: SubmitHandler<Web> = async (data, event) => {
    event?.preventDefault();
    const { code, message } = await addWebDataAPI({ ...data, createTime: new Date().getTime().toString() })

    const toastConfig: ToastOptions = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    }

    if (code !== 200) return toast.error(message, toastConfig);

    toast.success('🎉 提交成功, 请等待审核!', toastConfig);
    getWebTypeList()
    onOpenChange()
  }

  // 表单样式
  const inputWrapper = "hover:!border-primary group-data-[focus=true]:border-primary rounded-md"

  return (
    <>
      <Button color="primary" variant="shadow" onPress={onOpen}>申请加入</Button>

      <Modal
        size="lg"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">申请友链</ModalHeader>

              <ModalBody>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: '请输入网站名称' }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        label="网站名称"
                        variant="bordered"
                        placeholder="示例：宇阳"
                        isInvalid={!!errors.title?.message}
                        errorMessage={errors.title?.message}
                        onBlur={() => trigger('title')}
                        classNames={{ inputWrapper }}
                      />
                    </>
                  )}
                />

                <Controller
                  name="description"
                  control={control}
                  rules={{ required: '请输入网站介绍' }}
                  render={({ field }) => (
                    <>
                      <Textarea
                        {...field}
                        label="网站介绍"
                        variant="bordered"
                        placeholder="示例：逐渐强大的全栈开发工程师"
                        isInvalid={!!errors.description?.message}
                        errorMessage={errors.description?.message}
                        onBlur={() => trigger('description')}
                        classNames={{ inputWrapper }}
                      />
                    </>
                  )}
                />

                <Controller
                  name="image"
                  control={control}
                  rules={{ required: '请输入图片地址', pattern: { value: /^https?:\/\//, message: "请输入正确的图片地址" } }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        label="图片地址"
                        variant="bordered"
                        placeholder="示例：https://blog.liuyuyang.net/avatar.jpg"
                        isInvalid={!!errors.image?.message}
                        errorMessage={errors.image?.message}
                        onBlur={() => trigger('image')}
                        classNames={{ inputWrapper }}
                      />
                    </>
                  )}
                />

                <Controller
                  name="url"
                  control={control}
                  rules={{ required: '请输入网站地址', pattern: { value: /^https?:\/\//, message: "请输入正确的网站地址" } }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        label="网站地址"
                        variant="bordered"
                        placeholder="示例：https://blog.liuyuyang.net/"
                        isInvalid={!!errors.url?.message}
                        errorMessage={errors.url?.message}
                        onBlur={() => trigger('url')}
                        classNames={{ inputWrapper }}
                      />
                    </>
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  rules={{ pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "请输入正确的邮箱" } }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        label="邮箱（选填）"
                        variant="bordered"
                        placeholder="示例：liuyuyang1024@yeah.net"
                        isInvalid={!!errors.email?.message}
                        errorMessage={errors.email?.message}
                        onBlur={() => trigger('email')}
                        classNames={{ inputWrapper }}
                      />
                    </>
                  )}
                />

                <Controller
                  name="rss"
                  control={control}
                  rules={{ pattern: { value: /^https?:\/\//, message: "请输入正确的订阅地址" } }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        label="订阅地址（选填）"
                        variant="bordered"
                        placeholder="示例：https://blog.liuyuyang.net/index.php/feed/"
                        isInvalid={!!errors.rss?.message}
                        errorMessage={errors.rss?.message}
                        onBlur={() => trigger('rss')}
                        classNames={{ inputWrapper }}
                      />
                    </>
                  )}
                />

                <Controller
                  name="typeId"
                  control={control}
                  rules={{ required: '请选择网站类型' }}
                  render={({ field }) => (
                    <>
                      <Select
                        {...field}
                        label="网站类型"
                        variant="bordered"
                        placeholder="示例：技术类"
                        isInvalid={!!errors.typeId?.message}
                        errorMessage={errors.typeId?.message}
                        classNames={{
                          trigger: "hover:!border-primary data-[focus=true]:!border-primary data-[open=true]:!border-primary rounded-md"
                        }}
                      >
                        {typeList.map(item => <SelectItem key={item.id}>{item.name}</SelectItem>)}
                      </Select>
                    </>
                  )}
                />
              </ModalBody>

              <ModalFooter>
                <Button color="primary" onPress={() => handleSubmit(onSubmit)()} className="w-full">加入</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

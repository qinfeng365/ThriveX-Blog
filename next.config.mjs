/** @type {import('next').NextConfig} */
const nextConfig = {
    // 关闭严格模式
    reactStrictMode: false,
    // 配置环境变量
    env: {
        GAODE_KEY_CODE: "455e8ada6799412070c1156c6936b7c4",
        GAODE_SECURITYJS_CODE: "c8c59309d679d989a8a56461956cdd38",
    },
    // 配置图片来源
    images: {
        domains: [
            'res.liuyuyang.net',
            'q1.qlogo.cn',
            'bu.dusays.com'
        ],
    },
};

export default nextConfig;
import Request from "@/utils/request";
import { Layout, Web } from "@/types/app/project";

export const getWebDataAPI = () => Request<Web>("GET", "/project/web") 

export const getThemeDataAPI = () => Request<Layout>("GET", "/project/layout") 
import Request from "@/utils/request";
import { Theme, Web } from "@/types/app/project";

export const getWebDataAPI = () => Request<Web>("GET", "/project/web") 

export const getThemeDataAPI = () => Request<Theme>("GET", "/project/theme") 
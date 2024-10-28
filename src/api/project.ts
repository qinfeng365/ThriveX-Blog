import Request from "@/utils/request";
import { Web } from "@/types/app/project";

export const getWebDataAPI = () => Request<Web>("GET", "/project/web") 
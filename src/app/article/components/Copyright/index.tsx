import { getUserDataAPI } from "@/api/user";
import "./index.scss"

const Copyright = async () => {
    const { data } = await getUserDataAPI()

    return (
        <div className="CopyrightComponent">
            <div className="p-3 space-y-2 border-l-[3px] border-primary bg-[#ecf7fe] rounded-md text-sm text-black-b">
                <p>作者：{data.name}</p>
                <p>版权：此文章版权归 {data.name} 所有，如有转载，请注明出处!</p>
            </div>
        </div>
    );
};

export default Copyright;

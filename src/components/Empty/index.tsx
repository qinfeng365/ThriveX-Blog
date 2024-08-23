import empty from '@/assets/svg/other/empty.svg'
import './index.scss';

const EmptyState = ({ info }: { info: string }) => {
    return (
        <div className='EmptyComponent'>
            <div className="empty">
                <img src={empty.src} alt="空状态" />
                <div className="info">{info}</div>
            </div>
        </div>
    );
};

export default EmptyState;

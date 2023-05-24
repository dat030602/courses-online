import { BlogIcon, HomeIcon, LightIcon, RoadIcon } from '~/components/Icons';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <Button className={cx('btn-sidebar')} to="/">
                    <HomeIcon className={cx('icon')} />
                    <p>Trang chủ</p>
                </Button>
                <Button className={cx('btn-sidebar')} to="/courses">
                    <RoadIcon className={cx('icon')} />
                    <p>Khoá học</p>
                </Button>
                <Button className={cx('btn-sidebar')} to="/">
                    <LightIcon className={cx('icon')} />
                    <p>Học</p>
                </Button>
                <Button className={cx('btn-sidebar')} to="/">
                    <BlogIcon className={cx('icon')} />
                    <p>Blog</p>
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;

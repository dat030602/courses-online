import { BlogIcon, HomeIcon, LightIcon, RoadIcon } from '~/components/Icons';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Sidebar({ curPage = '' }) {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <Button className={cx('btn-sidebar', curPage === '' ? 'active' : '')} to="/">
                    <HomeIcon className={cx('icon')} />
                    Trang chủ
                </Button>
                <Button className={cx('btn-sidebar', curPage === 'courses' ? 'active' : '')} to="/courses">
                    <RoadIcon className={cx('icon')} />
                    Khoá học
                </Button>
                <Button className={cx('btn-sidebar', curPage === 'teacher' ? 'active' : '')} to="/teacher-courses">
                    <LightIcon className={cx('icon')} />
                    Giáo viên
                </Button>
                <Button className={cx('btn-sidebar', curPage === 'blog' ? 'active' : '')} to="/blog">
                    <BlogIcon className={cx('icon')} />
                    Blog
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;

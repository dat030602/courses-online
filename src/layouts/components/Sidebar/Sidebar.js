import { BlogIcon, HomeIcon, LightIcon, RoadIcon } from '~/components/Icons';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    const handleOnclick = (e) => {
        const btn = document.querySelectorAll(`.${cx('btn-sidebar')}`);
        for (let index = 0; index < btn.length; index++) {
            const element = btn[index];
            element.classList.remove(cx('active'));
        }
        e.target.classList.add(cx('active'));
    };
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <Button
                    className={cx('btn-sidebar', 'active')}
                    to="/"
                    onClick={(e) => {
                        handleOnclick(e);
                    }}
                >
                    <HomeIcon className={cx('icon')} />
                    Trang chủ
                </Button>
                <Button
                    className={cx('btn-sidebar')}
                    to="/courses"
                    onClick={(e) => {
                        handleOnclick(e);
                    }}
                >
                    <RoadIcon className={cx('icon')} />
                    Khoá học
                </Button>
                <Button
                    className={cx('btn-sidebar')}
                    to="/teacher-courses"
                    onClick={(e) => {
                        handleOnclick(e);
                    }}
                >
                    <LightIcon className={cx('icon')} />
                    Giáo viên
                </Button>
                <Button
                    className={cx('btn-sidebar')}
                    to="/"
                    onClick={(e) => {
                        handleOnclick(e);
                    }}
                >
                    <BlogIcon className={cx('icon')} />
                    Blog
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;

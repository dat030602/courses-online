import ListCourses from '~/components/Popper/Courses';
import styles from './MyCourses.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../Sidebar/Sidebar';

const cx = classNames.bind(styles);

function MyCourses() {
    return (
        <>
            <Sidebar curPage='courses' />
            <aside className={cx('wrapper', 'grid')}>
                <div className={cx('grid-full-width')}>
                    <ListCourses />
                </div>
                <div className={cx('grid-full-width')}>
                    <ListCourses />
                </div>
            </aside>
        </>
    );
}

export default MyCourses;

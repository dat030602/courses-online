import ListCourses from '~/components/Popper/Courses';
import styles from './MyCourses.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MyCourses() {
    return (
        <aside className={cx('wrapper', 'grid')}>
            <div className={cx('grid-full-width')}>
                <ListCourses />
            </div>
            <div className={cx('grid-full-width')}>
                <ListCourses />
            </div>
        </aside>
    );
}

export default MyCourses;

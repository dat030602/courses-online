import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import CourseItem from './CourseItem';

import styles from './Courses.module.scss';

const cx = classNames.bind(styles);

function Courses({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('title')}>
                    <h5>Khoá học đặc biệt</h5>
                </div>
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
                <CourseItem />
            </div>
        </>
    );
}

export default Courses;

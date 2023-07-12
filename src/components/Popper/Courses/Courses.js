import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import CourseItem from './CourseItem';

import styles from './Courses.module.scss';

const cx = classNames.bind(styles);

function Courses({ children, data, title = 'Khoá học đặc biệt', id = '' }) {
    return (
        <>
            {data !== undefined ? (
                <div className={cx('wrapper')} id={id}>
                    <div className={cx('title')}>
                        <h5>{title}</h5>
                    </div>
                    {Object.keys(data).map((el, index) => (
                        <CourseItem key={index} data={data[index]} />
                    ))}
                </div>
            ) : (
                <>
                    <div className={cx('wrapper')}>
                        <div className={cx('title')}>
                            <h5>{title}</h5>
                        </div>
                        <CourseItem />
                        <CourseItem />
                        <CourseItem />
                        <CourseItem />
                    </div>
                </>
            )}
        </>
    );
}

export default Courses;

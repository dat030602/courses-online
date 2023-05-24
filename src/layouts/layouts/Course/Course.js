import styles from './Course.module.scss';
import classNames from 'classnames/bind';

import HeaderCourse from '~/layouts/components/HeaderCourse/HeaderCourse';

const cx = classNames.bind(styles);

function Course({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderCourse />
            <main className={cx('main')}>
                <div className={cx('grid')} style={{ padding: 0 }}>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default Course;

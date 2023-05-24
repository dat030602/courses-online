import Courses from '~/components/Popper/Courses';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import Slide from './Slide';

const cx = classNames.bind(styles);

function Home() {
    return (
        <aside className={cx('wrapper', 'grid')}>
            <Slide />
            <div className={cx('grid-full-width')}>
                <Courses />
            </div>
            <div className={cx('grid-full-width')}>
                <Courses />
            </div>
        </aside>
    );
}

export default Home;

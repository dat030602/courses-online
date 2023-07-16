import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />

            <main className={cx('main')}>
                <div className={cx('grid')}>{children}</div>
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

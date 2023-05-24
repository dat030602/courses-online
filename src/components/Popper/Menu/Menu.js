import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

import styles from './Menu.module.scss';
import Header from '~/components/Popper/Menu/Header';

const cx = classNames.bind(styles);

function Menu({ children, title, width = '230px', notify = false }) {
    const notifyProps = [
        {
            id: 1,
            title: 'hihi',
            to: '/',
        },
        {
            id: 2,
            title: 'hihi',
            to: '/',
        },
    ];
    const HeaderProps = [
        {
            id: 1,
            title: 'Thông tin cá nhân',
            to: '/@Dat-Nguyen-Van',
        },
        {
            id: 2,
            title: 'Khoá học của tôi',
            to: '/my-courses',
        },
    ];
    const renderItems = () => {
        if (notify)
            return Object.keys(notifyProps).map(function (key) {
                return <MenuItem key={notifyProps[key].id} data={notifyProps[key]} title={title !== 'Thông báo'} />;
            });
        else
            return Object.keys(HeaderProps).map(function (key) {
                return <MenuItem key={HeaderProps[key].id} data={HeaderProps[key]} title={title !== 'Thông báo'} />;
            });
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} style={{ width: width }} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                <Header title={title} />
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    return (
        <Tippy interactive offset={[12, 8]} placement="bottom-end" delay={[0, 500]} render={renderResult}>
            {children}
        </Tippy>
    );
}

export default Menu;

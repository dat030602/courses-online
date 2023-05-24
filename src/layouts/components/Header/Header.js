import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';

import { LogoIcon, NotifyIcon, SearchIcon } from '~/components/Icons';
import Menu from '~/components/Popper/Menu/Menu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header>
            <div className={cx('wrapper', 'grid')}>
                <div className={cx('navbar')}>
                    <div className={cx('logo')}>
                        <Button to="/" logo>
                            <LogoIcon width="4.2rem" height="4.2rem" />
                        </Button>
                    </div>
                    <div className={cx('input')}>
                        <input type="text" placeholder="Tìm kiếm ..." />
                        <Button icon className={cx('btn-search')}>
                            <SearchIcon width="2.4rem" height="2.4rem" />
                        </Button>
                    </div>
                    <div className={cx('actions')}>
                        <Menu title="Thông báo" width="350px" notify>
                            <div className={cx('title')}>
                                <Button className={cx('btn-notify')}>
                                    <NotifyIcon className={cx('icon')} />
                                </Button>
                            </div>
                        </Menu>
                        <Menu title="Nguyễn Văn Đạt">
                            <div className={cx('title')}>
                                <Button>Nguyễn Văn Đạt</Button>
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

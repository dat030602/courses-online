import styles from './HeaderCourse.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { ArrowIcon, LogoIcon, NotifyIcon, SearchIcon } from '~/components/Icons';
import Menu from '~/components/Popper/Menu/Menu';

const cx = classNames.bind(styles);

function HeaderCourse() {
    return (
        <header>
            <div className={cx('wrapper', 'grid')}>
                <div className={cx('navbar')}>
                    <div className={cx('logo')}>
                        <Button href="/" className={cx('btn-back')}>
                            <ArrowIcon className={cx('icon', 'arrow')} />
                        </Button>
                        <Button to="/" logo navigate="true">
                            <LogoIcon width="4.2rem" height="4.2rem" className={cx('icon-logo')} />
                        </Button>
                        <div className={cx('name-course')}>
                            <span>Mô hình Client - Server là gì?</span>
                        </div>
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

export default HeaderCourse;

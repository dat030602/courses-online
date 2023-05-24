import Button from '~/components/Button/Button';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FacebookIcon, LogoIcon, YoutubeIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('wrapper-block')}>
                <div className={cx('grid-5', 'h-100')}>
                    <div className={cx('title')}>
                        <Button to="/" className={cx('btn-logo')} logo>
                            <LogoIcon width="100%" height="4.2rem" />
                        </Button>
                        <p>Lớp học thầy trí</p>
                    </div>
                    <div className={cx('content', 'h-100')}>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Giới thiệu</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Liên hệ</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Điều khoản</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Bảo mật</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Cơ hội việc làm</span>
                        </Button>
                    </div>
                </div>
                <div className={cx('grid-5', 'h-100')}>
                    <div className={cx('title', 'h-100')}>
                        <p>VỀ F8</p>
                    </div>
                    <div className={cx('content', 'h-100')}>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Giới thiệu</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Liên hệ</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Điều khoản</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Bảo mật</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Cơ hội việc làm</span>
                        </Button>
                    </div>
                </div>
                <div className={cx('grid-5', 'h-100')}>
                    <div className={cx('title', 'h-100')}>
                        <p>VỀ F8</p>
                    </div>
                    <div className={cx('content', 'h-100')}>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Giới thiệu</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Liên hệ</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Điều khoản</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Bảo mật</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Cơ hội việc làm</span>
                        </Button>
                    </div>
                </div>
                <div className={cx('grid-5', 'h-100')}>
                    <div className={cx('title', 'h-100')}>
                        <p>VỀ F8</p>
                    </div>
                    <div className={cx('content', 'h-100')}>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Giới thiệu</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Liên hệ</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Điều khoản</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Bảo mật</span>
                        </Button>
                        <Button to="/" className={cx('text', 'h-100')}>
                            <span>Cơ hội việc làm</span>
                        </Button>
                    </div>
                </div>
                <div className={cx('grid-5', 'h-100')}>
                    <div className={cx('title', 'h-100')}>
                        <p>CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</p>
                    </div>
                    <div className={cx('content', 'h-100')}>
                        <span>Mã số thuế: 0109922901</span>
                        <span>Ngày thành lập: 04/03/2022</span>
                        <span>
                            Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm mang lại
                            giá trị cho cộng đồng.
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-block')}>
                <span>© 2018 - 2023 F8. Nền tảng học lập trình hàng đầu Việt Nam</span>
                <span className={cx('social')}>
                    <Button to='/'>
                        <YoutubeIcon className={cx('icon', 'c-red')} />
                    </Button>
                    <Button to='/'>
                        <FacebookIcon className={cx('icon', 'c-blue')} />
                    </Button>
                </span>
            </div>
        </aside>
    );
}

export default Footer;

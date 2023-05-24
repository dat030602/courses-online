import styles from '../Home.module.scss';
import classNames from 'classnames/bind';

import BackgroundImage from '~/components/BackgroundImage';

const cx = classNames.bind(styles);

function Slide() {
    return (
        <div className={cx('slide')}>
            <div className={cx('slide-item')}>
                <BackgroundImage
                    padding={'270px'}
                    className={cx('slide-image')}
                    src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000"
                />
            </div>
        </div>
    );
}

export default Slide;

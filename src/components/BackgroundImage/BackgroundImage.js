import classNames from 'classnames/bind';
import styles from './BackgroundImage.module.scss';

const cx = classNames.bind(styles);

function BackgroundImage({ className, src, padding }) {
    return (
        <div
            className={`${className} ${cx('wrapper')}`}
            style={{
                backgroundImage: `url("${src}")`,
                paddingTop: `${padding}`,
            }}
        ></div>
    );
}

export default BackgroundImage;

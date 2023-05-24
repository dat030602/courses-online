import Button from '~/components/Button/Button';
import styles from './Modal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Modal({ children, onClick }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('p-relative')}>
                <div className={cx('overlay')} onClick={() => onClick()}></div>
                <div className={cx('show')}>
                    <div>
                        <div>
                            <div className={cx('close')}>
                                <Button className={cx('btn-close')} onClick={() => onClick()}>
                                    ×
                                </Button>
                            </div>
                            <div className={cx('modal')}>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;

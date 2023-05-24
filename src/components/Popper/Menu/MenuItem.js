import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, title = false }) {
    return (
        <Button className={cx('menu-item', title === true ? 'title' : '')} to={data.to}>
            {data.title}
        </Button>
    );
}
export default MenuItem;

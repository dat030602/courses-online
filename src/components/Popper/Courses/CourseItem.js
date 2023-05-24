import classNames from 'classnames/bind';
import styles from './Courses.module.scss';
import Button from '~/components/Button';
import BackgroundImage from '~/components/BackgroundImage';

const cx = classNames.bind(styles);

function CourseItem({ data }) {
    return (
        <div className={cx('course-item')} title="HTML CSS Pro - Thầy Trí">
            <Button className={cx('btn-course-item')} to={'/course'}>
                <BackgroundImage
                    className={cx('btn-course-item-img')}
                    padding="56.25%"
                    src="https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png"
                />
                <h4>HTML CSS Pro</h4>
                <h5>Thầy Trí</h5>
                <div className={cx('price')}>
                    <span>2.499.000đ</span>
                    <span className={cx('sale')}>1.299.000đ</span>
                </div>
            </Button>
        </div>
    );
}
export default CourseItem;

import classNames from 'classnames/bind';
import styles from './Courses.module.scss';
import Button from '~/components/Button';
import BackgroundImage from '~/components/BackgroundImage';
import { FormatPrice } from '~/services';

const cx = classNames.bind(styles);

function CourseItem({ data }) {
    return (
        <>
            <div
                className={cx('course-item')}
                title={data !== undefined ? `${data.namecourse} - Lớp ${data.grade} - ${data.sex ? 'Thầy' : 'Cô'} ${data.nameteacher} ${data.id}` : ''}
            >
                <Button className={cx('btn-course-item')} to={data !== undefined ? `/course/${data.id}` : '/'}>
                    <BackgroundImage
                        className={cx('btn-course-item-img')}
                        padding="56.25%"
                        src={data !== undefined ? data.image : './assets/images/Default_No_Image_Available.png'}
                    />
                    <h4>{data !== undefined ? `${data.namecourse} - Lớp ${data.grade}` : 'No content'}</h4>
                    <h5>{data !== undefined ? `${data.sex ? 'Thầy' : 'Cô'} ${data.nameteacher}` : 'No content'}</h5>
                    <div className={cx('price')}>
                        <span>{data !== undefined ? `${FormatPrice(data.oldprice * 1.5)}` : '0'}đ</span>
                        <span className={cx('sale')}>{data !== undefined ? `${FormatPrice(data.price)}` : '0'}đ</span>
                    </div>
                </Button>
            </div>
        </>
    );
}
export default CourseItem;

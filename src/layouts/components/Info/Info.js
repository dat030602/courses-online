import ListCourses from '~/components/Popper/Courses';
import styles from './Info.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Info() {
    const [isDisabled, setIsDisabled] = useState(true);

    const handleOnClickEdit = () => {
        setIsDisabled(!isDisabled);
    };
    const handleOnClickSubmit = () => {
        setIsDisabled(!isDisabled);
    };
    return (
        <aside className={cx('wrapper', 'grid')}>
            <div>
                <div className={cx('title', 'mb-32')}>
                    <h5>Thông tin cá nhân</h5>
                </div>
                <div className={cx('form')}>
                    <div className={cx('form-edit')}>
                        <div className={cx('input-form')}>
                            <label for="name" class={cx('form-label')}>
                                Tên
                            </label>
                            <input
                                className={cx('input')}
                                type="text"
                                maxLength={100}
                                id={cx('name')}
                                disabled={isDisabled}
                            />
                        </div>
                        <div className={cx('input-form')}>
                            <label for="date" class={cx('form-label')}>
                                Ngày sinh
                            </label>
                            <input className={cx('input')} type="date" id={cx('date')} disabled={isDisabled} />
                        </div>
                        <div className={cx('input-form')}>
                            <label for="sex" class={cx('form-label')}>
                                Giới tính
                            </label>
                            <input
                                className={cx('input')}
                                type="text"
                                maxLength={10}
                                id={cx('sex')}
                                disabled={isDisabled}
                            />
                        </div>
                        <div className={cx('input-form')}>
                            <div className={cx('input-form')}>
                                <label for="address" class={cx('form-label')}>
                                    Địa chỉ
                                </label>
                                <input className={cx('input')} type="text" id={cx('address')} disabled={isDisabled} />
                            </div>
                        </div>
                        <div className={cx('input-form')}>
                            <label for="phone" class={cx('form-label')}>
                                Số điện thoại
                            </label>
                            <input
                                className={cx('input')}
                                type="text"
                                maxLength={10}
                                id={cx('phone')}
                                disabled={isDisabled}
                            />
                        </div>
                        <div className={cx('input-form')}>
                            <label for="email" class={cx('form-label')}>
                                Email
                            </label>
                            <input
                                className={cx('input')}
                                type="email"
                                maxLength={100}
                                id={cx('email')}
                                disabled={isDisabled}
                            />
                        </div>
                        <div className={cx('input-form')}>
                            <label for="role" class={cx('form-label')}>
                                Vai trò
                            </label>
                            <input className={cx('input')} type="text" id={cx('role')} disabled={isDisabled} />
                        </div>
                    </div>
                    <div className={cx('btn', 'mt-32')}>
                        {isDisabled && (
                            <Button edit btn onClick={handleOnClickEdit}>
                                Sửa
                            </Button>
                        )}
                        {!isDisabled && (
                            <Button submit btn onClick={handleOnClickSubmit}>
                                Xác nhận
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Info;

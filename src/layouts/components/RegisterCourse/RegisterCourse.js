import { Buffer } from 'buffer';
import { useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';

import styles from './RegisterCourse.module.scss';
import classNames from 'classnames/bind';
import { CountChapter, FormatPrice, IntToHours } from '~/services';

const cx = classNames.bind(styles);

function RegisterCourse() {
    return (
        <aside className={cx('wrapper', 'mt-32')}>
            <div className={cx('title')}>
                <h5>Mở khóa khóa học:</h5>
                <h3>HTML, CSS Cơ bản</h3>
            </div>
            <div className={cx('mt-32')}>
                <div className={cx('grid-3', 'left-col')}>
                    <div className={cx('title')}>
                        <p>Tên khóa học:</p>
                        <h5>HTML CSS Pro</h5>
                    </div>
                    <div className={cx('title')}>
                        <p>Mã đơn hàng:</p>
                        <h5>F8C16354</h5>
                    </div>
                    <div className={cx('title')}>
                        <p>Chi tiết thanh toán:</p>
                    </div>
                    <div className={cx('price')}>
                        <div>
                            <div className={cx('subtitle')}>Giá bán:</div>
                            <div className={cx('price-detail')}>
                                <span className={cx('price-detail-sale')}>2,499,000đ</span>
                                <span>1,299,000đ</span>
                            </div>
                        </div>
                        <div>
                            <div className={cx('subtitle')}>Tổng tiền:</div>
                            <div className={cx('price-detail')}>
                                <span className={cx('price-detail-total')}>1,299,000đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('grid-2-3')}>
                    <div className={cx('qr-code')}>
                        <div className={cx('title')}>
                            <h5>Chuyển khoản bằng QR</h5>
                        </div>
                        <div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
                                alt=""
                            />
                            <div>
                                <p>Bước 1: Mở app ngân hàng hoặc Momo và quét mã QR.</p>
                                <p>
                                    Bước 2: Đảm bảo nội dung chuyển khoản là <strong>F8C16354</strong>.
                                </p>
                                <p>Bước 3: Thực hiện thanh toán.</p>
                            </div>
                        </div>
                    </div>
                    <div className={cx('transfer-information', 'mt-16')}>
                        <div className={cx('title')}>
                            <h5>Chuyển khoản thủ công</h5>
                        </div>
                        <div className={cx('bank-info')}>
                            <div className={cx('bank-info-item')}>
                                <div>
                                    <div className={cx('label')}>Số tài khoản</div>
                                    <div className={cx('content')}>9353538222</div>
                                </div>
                            </div>
                            <div className={cx('bank-info-item')}>
                                <div>
                                    <div className={cx('label')}>Tên tài khoản</div>
                                    <div className={cx('content')}>ĐẶNG NGỌC SƠN</div>
                                </div>
                            </div>
                            <div className={cx('bank-info-item')}>
                                <div>
                                    <div className={cx('label')}>Nội dung</div>
                                    <div className={cx('content')}>
                                        <strong>F8C16354</strong>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('bank-info-item')}>
                                <div>
                                    <div className={cx('label')}>Chi nhánh</div>
                                    <div className={cx('content')}>Vietcombank Hà Nội</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('transfer-information', 'mt-16')}>
                        <div className={cx('title')}>
                            <h5>Lưu ý</h5>
                        </div>
                        <div className={cx('contact')}>
                            <div>
                                Tối đa 24 giờ sau thời gian chuyển khoản, nếu hệ thống không phản hồi vui lòng liên hệ
                                ngay bộ phận hỗ trợ của F8.
                            </div>
                            <div className={cx('mt-12')}>
                                <div className={cx('img')}>
                                    <img
                                        src="https://fullstack.edu.vn/static/media/phone.0c60754adb11aa1f42791f4b80423f6d.svg"
                                        alt=""
                                    />
                                </div>
                                <a href="tel:0246.329.1102">0246.329.1102</a>
                            </div>
                            <div className={cx('mt-12', 'contact')}>
                                <div className={cx('img')}>
                                    <img
                                        src="https://fullstack.edu.vn/static/media/envelope.e7b59ce57be76a9435865a20e7021f56.svg"
                                        alt=""
                                    />
                                </div>
                                <a href="mailto:contact@fullstack.edu.vn">contact@fullstack.edu.vn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default RegisterCourse;

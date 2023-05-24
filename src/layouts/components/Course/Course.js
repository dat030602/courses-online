import { BatteryIcon, CheckIcon, MovieIcon, QuantityIcon, TimeIcon, VideoIcon } from '~/components/Icons';
import styles from './Course.module.scss';
import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import Button from '~/components/Button/Button';
import BackgroundImage from '~/components/BackgroundImage/BackgroundImage';
import Modal from '../Modal/Modal';

const cx = classNames.bind(styles);

function Course() {
    const refStage = useRef([]);

    const handleOnClickStage = (e, index) => {
        // eslint-disable-next-line array-callback-return
        refStage.current.map((value, indexSub) => {
            if (indexSub === index) {
                e.currentTarget.style.setProperty('content', '-');
                if (value.className === `${cx('info-stage')} ${cx('active')}`) {
                    value.classList.remove(cx('active'));
                    value.style.height = 0;
                } else {
                    const scrollHeight = value.scrollHeight;
                    value.classList.add(cx('active'));
                    value.style.height = scrollHeight + 'px';
                }
            }
            // else refLink.current[indexSub].classList.remove(cx('active'));
        });
    };
    // eslint-disable-next-line no-const-assign
    refStage.current = [];
    const pushRefLink = (el) => {
        if (el && !refStage.current.includes(el)) {
            refStage.current.push(el);
        }
    };
    const [modal, setModal] = useState(false);

    const handleOnClickModal = () => {
        setModal(!modal);
    };
    return (
        <aside className={cx('wrapper', 'mt-32')}>
            <div className={cx('grid-full-width', 'grid-2-3', 'dl-ib')}>
                <h2>App "Đừng Chạm Tay Lên Mặt"</h2>
                <p className={cx('description', 'mt-12')}>
                    Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện
                    ReactJS & Tensoflow để hoàn thiện ứng dụng này.
                </p>
                <div className={cx('about')}>
                    <p className={cx('about-title', 'mt-40')}>Bạn sẽ học được gì?</p>
                    <ul className={cx('about-list')}>
                        <li className={cx('about-item')}>
                            <CheckIcon className={cx('icon')} />
                            <span>Làm được tool cảnh báo khi sờ tay lên mặt</span>
                        </li>
                        <li className={cx('about-item')}>
                            <CheckIcon className={cx('icon')} />
                            <span>Biết áp dụng làm tool có concept tương tự</span>
                        </li>
                        <li className={cx('about-item')}>
                            <CheckIcon className={cx('icon')} />
                            <span>Làm quen với tư tưởng "Máy học"</span>
                        </li>
                        <li className={cx('about-item')}>
                            <CheckIcon className={cx('icon')} />
                            <span>Biết thêm một số kỹ thuật với Javascript</span>
                        </li>
                    </ul>
                </div>
                <div className={cx('about')}>
                    <p className={cx('about-title', 'mt-40')}>Nội dung khóa học</p>
                    <p className={cx('description')}>
                        <strong>3</strong> chương • <strong>13</strong> bài học • Thời lượng{' '}
                        <strong>01 giờ 34 phút</strong>
                    </p>
                    <div className={cx('info-course')}>
                        <div className={cx('stage')}>
                            <div className={cx('stage-title')} onClick={(e) => handleOnClickStage(e, 0)}>
                                <span>1. Giới thiệu</span>
                                <span>2 bài học</span>
                            </div>
                            <ul className={cx('info-stage')} ref={pushRefLink}>
                                <li className={cx('info-stage-item')}>
                                    <div>
                                        <span>
                                            <VideoIcon className={cx('icon', 'op-50')} />
                                        </span>
                                        <span>1. Giới thiệu</span>
                                    </div>
                                    <div>2:30</div>
                                </li>
                                <li className={cx('info-stage-item')}>
                                    <div>
                                        <span>
                                            <VideoIcon className={cx('icon', 'op-50')} />
                                        </span>
                                        <span>2. Demo AI hoạt động</span>
                                    </div>
                                    <div>2:30</div>
                                </li>
                                <li className={cx('info-stage-item')}>
                                    <div>
                                        <span>
                                            <VideoIcon className={cx('icon', 'op-50')} />
                                        </span>
                                        <span>1. Giới thiệu</span>
                                    </div>
                                    <div>2:30</div>
                                </li>
                                <li className={cx('info-stage-item')}>
                                    <div>
                                        <span>
                                            <VideoIcon className={cx('icon', 'op-50')} />
                                        </span>
                                        <span>2. Demo AI hoạt động</span>
                                    </div>
                                    <div>2:30</div>
                                </li>
                                <li className={cx('info-stage-item')}>
                                    <div>
                                        <span>
                                            <VideoIcon className={cx('icon', 'op-50')} />
                                        </span>
                                        <span>1. Giới thiệu</span>
                                    </div>
                                    <div>2:30</div>
                                </li>
                                <li className={cx('info-stage-item')}>
                                    <div>
                                        <span>
                                            <VideoIcon className={cx('icon', 'op-50')} />
                                        </span>
                                        <span>2. Demo AI hoạt động</span>
                                    </div>
                                    <div>2:30</div>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('stage')}>
                            <div className={cx('stage-title')} onClick={(e) => handleOnClickStage(e, 1)}>
                                <span>1. Giới thiệu</span>
                                <span>2 bài học</span>
                            </div>
                            <ul className={cx('info-stage')} ref={pushRefLink}>
                                <li className={cx('info-stage-item')}>
                                    <div>
                                        <span>
                                            <VideoIcon className={cx('icon', 'op-50')} />
                                        </span>
                                        <span>1. Giới thiệu</span>
                                    </div>
                                    <div>2:30</div>
                                </li>
                                <li className={cx('info-stage-item')}>
                                    <div>
                                        <span>
                                            <VideoIcon className={cx('icon', 'op-50')} />
                                        </span>
                                        <span>2. Demo AI hoạt động</span>
                                    </div>
                                    <div>2:30</div>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('stage')}>
                            <div className={cx('stage-title')} onClick={(e) => handleOnClickStage(e, 2)}>
                                <span>1. Giới thiệu</span>
                                <span>2 bài học</span>
                            </div>
                            <ul className={cx('info-stage')} ref={pushRefLink}>
                                <li className={cx('info-stage-item')}>
                                    <div>
                                        <span>
                                            <VideoIcon className={cx('icon', 'op-50')} />
                                        </span>
                                        <span>1. Giới thiệu</span>
                                    </div>
                                    <div>2:30</div>
                                </li>
                                <li className={cx('info-stage-item')}>
                                    <div>
                                        <span>
                                            <VideoIcon className={cx('icon', 'op-50')} />
                                        </span>
                                        <span>2. Demo AI hoạt động</span>
                                    </div>
                                    <div>2:30</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('grid-full-width', 'grid-3', 'dl-ib')}>
                <Button className={cx('video-demo')} onClick={() => handleOnClickModal()}>
                    <div>
                        <BackgroundImage
                            className={cx('')}
                            padding="200px"
                            src="https://img.youtube.com/vi/AGwWVWlL7Wk/sddefault.jpg"
                        />
                    </div>
                    <div className={cx('video-demo-content')}>
                        <span>
                            <VideoIcon className={cx('icon-play')} />
                        </span>
                        <span className={cx('video-demo-text')}>Xem giới thiệu khoá học</span>
                    </div>
                </Button>
                {modal && (
                    <Modal onClick={handleOnClickModal}>
                        <div className={cx('modal')}>
                            <div className={cx('modal-content', 'mb-16')}>
                                <h4>App "Đừng Chạm Tay Lên Mặt"</h4>
                                <h5>Giới thiệu khóa học</h5>
                            </div>
                            <div className={cx('video-show')}>
                                <iframe
                                    className={cx('video')}
                                    src="https://www.youtube.com/embed/xI0seilQ6_M"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen="true"
                                ></iframe>
                            </div>
                        </div>
                    </Modal>
                )}
                <div className={cx('text-full-width')}>Miễn phí</div>
                <div className={cx('submit', 'mb-32')}>
                    <Button to="/course/learn" className={cx('btn-submit')}>
                        ĐĂNG KÝ HỌC
                    </Button>
                </div>
                <div className={cx('about-course')}>
                    <ul>
                        <li>
                            <span>
                                <QuantityIcon className={cx('icon')} />
                            </span>
                            <span>Trình độ cơ bản</span>
                        </li>
                        <li>
                            <span>
                                <MovieIcon className={cx('icon')} />
                            </span>
                            <span>Tổng số 13 bài học</span>
                        </li>
                        <li>
                            <span>
                                <TimeIcon className={cx('icon')} />
                            </span>
                            <span>
                                Thời lượng <strong>01 giờ 34 phút</strong>
                            </span>
                        </li>
                        <li>
                            <span>
                                <BatteryIcon className={cx('icon')} />
                            </span>
                            <span>Học mọi lúc, mọi nơi</span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Course;

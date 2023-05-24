import Button from '~/components/Button/Button';
import styles from './LearnCourse.module.scss';
import classNames from 'classnames/bind';
import { ArrowIcon, CheckRoundIcon, VideoIcon } from '~/components/Icons';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const cx = classNames.bind(styles);

function LearnCourse() {
    const refStage = useRef([]);

    const handleOnClickStage = (e, index) => {
        // eslint-disable-next-line array-callback-return
        refStage.current.map((value, indexSub) => {
            if (indexSub === index) {
                e.currentTarget.style.setProperty('content', '-');
                if (value.className === `${cx('stage-item-list')} ${cx('open')}`) {
                    value.classList.remove(cx('open'));
                    value.classList.add(cx('close'));
                    value.style.height = 0;
                } else {
                    const scrollHeight = value.scrollHeight;
                    value.classList.add(cx('open'));
                    value.classList.remove(cx('close'));
                    value.style.height = scrollHeight + 'px';
                }
                if (refArrow.current[indexSub].classList.value !== `${cx('icon-arrow')} ${cx('down')}`) {
                    refArrow.current[indexSub].classList.remove(cx('up'));
                    refArrow.current[indexSub].classList.add(cx('down'));
                } else {
                    refArrow.current[indexSub].classList.remove(cx('down'));
                    refArrow.current[indexSub].classList.add(cx('up'));
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

    const refArrow = useRef([]);

    refArrow.current = [];
    const pushRefArrow = (el) => {
        if (el && !refArrow.current.includes(el)) {
            refArrow.current.push(el);
        }
    };

    const handleOnEndVideo = () => {
        // setEndTime(e.getCurrentTime());
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid-3-4', 'video-block')}>
                <div className={cx('video-show')}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=_ihFoNhOOm8"
                        className={cx('video')}
                        height="100%"
                        width="100%"
                        controls={true}
                        onEnded={handleOnEndVideo}
                    />
                </div>
                <div className={cx('content', 'grid-full-width', 'mt-32')}>
                    <div className={cx('title', 'mb-8')}>Mô hình Client - Server là gì?</div>
                    <div className={cx('description', 'mb-24')}>Cập nhật tháng 11 năm 2022</div>
                    <div className={cx('about')}>
                        <p>Tham gia các cộng đồng để cùng học hỏi, chia sẻ và "thám thính" xem F8 sắp có gì mới nhé!</p>
                        <p>
                            Fanpage:
                            <a href="https://www.facebook.com/f8vnofficial">https://www.facebook.com/f8vnofficial</a>
                        </p>
                        <p>
                            Group:
                            <a href="https://www.facebook.com/groups/649972919142215">
                                https://www.facebook.com/groups/649972919142215
                            </a>
                        </p>
                        <p>
                            Youtube:
                            <a href="https://www.youtube.com/F8VNOfficial">https://www.youtube.com/F8VNOfficial</a>
                        </p>
                        <p>
                            Sơn Đặng: <a href="https://www.facebook.com/sondnf8">https://www.facebook.com/sondnf8</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('grid-4', 'stage-block')}>
                <div className={cx('mb-8', 'grid-full-width')}>
                    <p className={cx('stage-title')}>Nội dung khoá học</p>
                </div>
                <div className={cx('stage')}>
                    <ul className={cx('stage-list')}>
                        <li>
                            <div
                                className={cx('stage-item-title', 'p-relative')}
                                onClick={(e) => handleOnClickStage(e, 0)}
                            >
                                <h4>1. Thuật toán</h4>
                                <p className={cx('time')}>
                                    <span>
                                        <VideoIcon className={cx('icon')} />
                                    </span>
                                    <span>5/6 | 18:39</span>
                                </p>
                                <div className={cx('icon-arrow')} ref={pushRefArrow}>
                                    <ArrowIcon className={cx('icon', 'arrow')} />
                                </div>
                            </div>
                            <ul className={cx('stage-item-list', 'open')} ref={pushRefLink}>
                                <Button to="/course/learn" className={cx('active', 'selected')}>
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn" className={cx('active')}>
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                            </ul>
                        </li>
                        <li>
                            <div
                                className={cx('stage-item-title', 'p-relative')}
                                onClick={(e) => handleOnClickStage(e, 1)}
                            >
                                <h4>1. Thuật toán</h4>
                                <p className={cx('time')}>
                                    <span>
                                        <VideoIcon className={cx('icon')} />
                                    </span>
                                    <span>5/6 | 18:39</span>
                                </p>
                                <div className={cx('icon-arrow', 'up')} ref={pushRefArrow}>
                                    <ArrowIcon className={cx('icon', 'arrow')} />
                                </div>
                            </div>
                            <ul className={cx('stage-item-list', 'close')} ref={pushRefLink}>
                                <Button to="/course/learn" className={cx('active', 'selected')}>
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn" className={cx('active')}>
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                            </ul>
                        </li>
                        <li>
                            <div
                                className={cx('stage-item-title', 'p-relative')}
                                onClick={(e) => handleOnClickStage(e, 2)}
                            >
                                <h4>1. Thuật toán</h4>
                                <p className={cx('time')}>
                                    <span>
                                        <VideoIcon className={cx('icon')} />
                                    </span>
                                    <span>5/6 | 18:39</span>
                                </p>
                                <div className={cx('icon-arrow', 'up')} ref={pushRefArrow}>
                                    <ArrowIcon className={cx('icon', 'arrow')} />
                                </div>
                            </div>
                            <ul className={cx('stage-item-list', 'close')} ref={pushRefLink}>
                                <Button to="/course/learn" className={cx('active', 'selected')}>
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn" className={cx('active')}>
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                            </ul>
                        </li>
                        <li>
                            <div
                                className={cx('stage-item-title', 'p-relative')}
                                onClick={(e) => handleOnClickStage(e, 2)}
                            >
                                <h4>1. Thuật toán</h4>
                                <p className={cx('time')}>
                                    <span>
                                        <VideoIcon className={cx('icon')} />
                                    </span>
                                    <span>5/6 | 18:39</span>
                                </p>
                                <div className={cx('icon-arrow', 'up')} ref={pushRefArrow}>
                                    <ArrowIcon className={cx('icon', 'arrow')} />
                                </div>
                            </div>
                            <ul className={cx('stage-item-list', 'close')} ref={pushRefLink}>
                                <Button to="/course/learn" className={cx('active', 'selected')}>
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn" className={cx('active')}>
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                                <Button to="/course/learn">
                                    <div className={cx('item-title')}>
                                        <h5>1. Thuật toán laf gif Thuật toán laf gif Thuật toán laf gif</h5>
                                        <p className={cx('time')}>
                                            <span>
                                                <VideoIcon className={cx('icon')} />
                                            </span>
                                            <span>18:39</span>
                                        </p>
                                    </div>
                                    <div className={cx('check-icon')}>
                                        <CheckRoundIcon className={cx('icon', 'check')} />
                                    </div>
                                </Button>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LearnCourse;

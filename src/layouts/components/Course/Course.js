import { Buffer } from 'buffer';
import { useParams } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';

import Button from '~/components/Button/Button';
import Modal from '../Modal/Modal';
import BackgroundImage from '~/components/BackgroundImage/BackgroundImage';
import { BatteryIcon, CheckIcon, MovieIcon, QuantityIcon, TimeIcon, VideoIcon } from '~/components/Icons';

import styles from './Course.module.scss';
import classNames from 'classnames/bind';
import { CountChapter, FormatPrice, IntToHours } from '~/services';
import Sidebar from '../Sidebar/Sidebar';

const cx = classNames.bind(styles);

function Course() {
    const { id } = useParams();

    const [data, setData] = useState();
    const [countChapter, setCountChapter] = useState(0);
    const [countChapterLesson, setCountChapterLesson] = useState([]);
    const [lessons, setLessons] = useState([]);

    async function getData() {
        try {
            const response = await fetch(`https://localhost:7254/api/DetailCourse/${id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json; charset=utf-8',
                    Authorization: 'Basic ' + Buffer('user1:1').toString('base64'),
                    Server: 'Kestrel',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (data) setCountChapter(CountChapter(data.lessons));
    }, [data]);

    useEffect(() => {
        if (countChapter !== 0) {
            var countTemp = countChapterLesson;
            for (let index = 1; index <= countChapter; index++) {
                countTemp.push(index);
                setCountChapterLesson(countTemp);
            }
            var lessonTmp = [];
            countTemp.forEach((elCount, index) => {
                var element = data.lessons.filter(function (el) {
                    return el.chapter === elCount;
                });
                lessonTmp.push(element);
            });

            setLessons(lessonTmp);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countChapter]);

    const refStage = useRef([]);

    const handleOnClickStage = (e, index) => {
        console.log('RUN');
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
        <>
            <Sidebar curPage='courses' />
            <aside className={cx('wrapper', 'mt-32')}>
                {data !== undefined && (
                    <div className={cx('grid-full-width', 'grid-2-3', 'dl-ib')}>
                        <h2>{data.info[0].nameCourse}</h2>
                        <p className={cx('description', 'mt-12')}>{data.info[0].desrcription}</p>
                        <div className={cx('about')}>
                            <p className={cx('about-title', 'mt-40')}>Bạn sẽ học được gì?</p>
                            <ul className={cx('about-list')}>
                                {data.require.map((e, index) => {
                                    return (
                                        <li className={cx('about-item')} key={index}>
                                            <CheckIcon className={cx('icon')} />
                                            <span>{e.content}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className={cx('about')}>
                            <p className={cx('about-title', 'mt-40')}>Nội dung khóa học</p>
                            <p className={cx('description')}>
                                <strong>{CountChapter(data.lessons)}</strong> chương •{' '}
                                <strong>{data.lessons.length}</strong> bài học • Thời lượng{' '}
                                <strong>{IntToHours(data.info[0].totletime, false)}</strong>
                            </p>
                            <div className={cx('info-course')}>
                                {lessons !== [] &&
                                    lessons.map((element, index) => {
                                        return (
                                            <div className={cx('stage')} key={index}>
                                                <div
                                                    className={cx('stage-title')}
                                                    onClick={(e) => handleOnClickStage(e, index)}
                                                >
                                                    <span>
                                                        {index + 1}. {element[0].namechapter}
                                                    </span>
                                                    <span>{element.length} bài học</span>
                                                </div>
                                                <ul className={cx('info-stage')} ref={pushRefLink}>
                                                    {element.map((e, indexSub) => {
                                                        return (
                                                            <li className={cx('info-stage-item')} key={indexSub}>
                                                                <div>
                                                                    <span>
                                                                        <VideoIcon className={cx('icon', 'op-50')} />
                                                                    </span>
                                                                    <span>
                                                                        {e.idNumber}. {e.nameLesson}
                                                                    </span>
                                                                </div>
                                                                <div>{IntToHours(e.timeVideo)}</div>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                )}
                {data !== undefined && (
                    <div className={cx('grid-full-width', 'grid-3', 'dl-ib')}>
                        <Button className={cx('video-demo')} onClick={() => handleOnClickModal()}>
                            <div>
                                <BackgroundImage className={cx('')} padding="200px" src={data.info[0].image} />
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
                                        <h4>{data.info[0].nameCourse}</h4>
                                        <h5>Giới thiệu khóa học</h5>
                                    </div>
                                    <div className={cx('video-show')}>
                                        <iframe
                                            className={cx('video')}
                                            src={data.info[0].review}
                                            title="YouTube video player"
                                            frameBorder={0}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen={true}
                                        ></iframe>
                                    </div>
                                </div>
                            </Modal>
                        )}
                        <div className={cx('text-full-width')}>{FormatPrice(data.info[0].price)}đ</div>
                        <div className={cx('submit', 'mb-32')}>
                            <Button to="/course/learn/C000000001" className={cx('btn-submit')}>
                                ĐĂNG KÝ HỌC
                            </Button>
                        </div>
                        <div className={cx('about-course')}>
                            <ul>
                                <li>
                                    <span>
                                        <QuantityIcon className={cx('icon')} />
                                    </span>
                                    <span>Trình độ {data.info[0].level === 1 ? 'cơ bản' : 'nâng cao'}</span>
                                </li>
                                <li>
                                    <span>
                                        <MovieIcon className={cx('icon')} />
                                    </span>
                                    <span>Tổng số {data.lessons.length} bài học</span>
                                </li>
                                <li>
                                    <span>
                                        <TimeIcon className={cx('icon')} />
                                    </span>
                                    <span>
                                        Thời lượng <strong>{IntToHours(data.info[0].totletime, false)}</strong>
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
                )}
            </aside>
        </>
    );
}

export default Course;

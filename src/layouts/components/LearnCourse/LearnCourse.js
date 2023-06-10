import { Buffer } from 'buffer';
import Button from '~/components/Button/Button';
import styles from './LearnCourse.module.scss';
import classNames from 'classnames/bind';
import { ArrowIcon, CheckRoundIcon, MuteIcon, PauseIcon, PlayIcon, VideoIcon, VolumeIcon } from '~/components/Icons';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { CountChapter, IntToHours, LessonLearned, SumTime } from '~/services';

const cx = classNames.bind(styles);

function LearnCourse() {
    const { id } = useParams();

    const [dataVideo, setDataVideo] = useState();
    const [dataLessons, setDataLessons] = useState();

    const [countChapter, setCountChapter] = useState(0);
    const [lessons, setLessons] = useState([]);

    async function getLessons() {
        try {
            const response = await fetch(`https://localhost:7254/api/Lesson/${id}`, {
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
                    setDataLessons(data);
                    setDataVideo(data.filter((e) => e.video !== '')[0]);
                    data.map((el) => {
                        if (el.video !== '') setIsControl(el.islearned);
                        return el;
                    });
                });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getLessons();
    }, []);

    useEffect(() => {
        if (dataLessons) {
            setCountChapter(CountChapter(dataLessons));
            if (isTarget === 0) {
                var newdata = dataLessons.filter((e) => e.video !== '');
                setIsTarget(newdata[0].chapter - 1);
            }
        }
    }, [dataLessons]);

    useEffect(() => {
        if (countChapter !== 0) {
            var countTemp = countChapterLesson;
            for (let index = 1; index <= countChapter; index++) {
                countTemp.push(index);
                setCountChapterLesson(countTemp);
            }
            var lessonTmp = [];
            countTemp.forEach((elCount, index) => {
                var element = dataLessons.filter(function (el) {
                    return el.chapter === elCount;
                });
                lessonTmp.push(element);
            });

            setLessons(lessonTmp);
        }
    }, [countChapter]);

    const refStage = useRef([]);

    const [isTarget, setIsTarget] = useState(0);

    const handleOnClickStage = (e, index) => {
        if (isTarget !== index) {
            // eslint-disable-next-line array-callback-return
            refStage.current.map((value, indexSub) => {
                if (indexSub === index) {
                    e.currentTarget.style.setProperty('content', '-');
                    setIsTarget(index);
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
        }
    };
    // eslint-disable-next-line no-const-assign
    const pushRefLink = (el) => {
        if (el && !refStage.current.includes(el)) {
            refStage.current.push(el);
        }
    };

    const refArrow = useRef([]);

    const pushRefArrow = (el) => {
        if (el && !refArrow.current.includes(el)) {
            refArrow.current.push(el);
        }
    };
    const refVideo = useRef();

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isControl, setIsControl] = useState(true);
    const [countChapterLesson, setCountChapterLesson] = useState([]);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleMuteUnmute = () => {
        setIsMuted(!isMuted);
    };

    const handleOnProgress = () => {
        if (
            !dataVideo.islearned &&
            parseInt(refVideo.current.getCurrentTime()) % 20 === 0 &&
            parseInt(refVideo.current.getCurrentTime()) !== 0
        ) {
            if (dataVideo.timeVideo > refVideo.current.getCurrentTime()) {
                var data = dataVideo;
                data.timeVideo = parseInt(refVideo.current.getCurrentTime());
                updateLearned(data);
            }
        }
    };
    const handleOnEndVideo = () => {
        if (!dataVideo.islearned) {
            var data = dataVideo;
            data.islearned = true;
            data.timelearned = data.timeVideo;
            updateLearned(data, true);
        }
    };
    async function updateLearned(data, islearned = false) {
        try {
            var idRequest = 'ChangeTimeLearned';
            if (islearned) idRequest = 'Learned';

            const response = await fetch(`https://localhost:7254/api/Lesson/${idRequest}`, {
                method: 'POST',
                headers: {
                    Accept: '*/*',
                    Authorization: 'Basic ' + Buffer('user1:1').toString('base64'),
                    Server: 'Kestrel',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((res) => {
                    return res.json();
                })
                .then((dataRequest) => {
                    if (dataRequest === 1) {
                        setDataVideo(data);
                        console.log(data);
                        var newDataLessons = dataLessons;
                        newDataLessons.forEach((e, index) => {
                            if (e.id === data.id && e.idNumber === data.idNumber) {
                                e.islearned = data.islearned;
                                e.timelearned = data.timelearned;
                            }
                        });
                        setDataLessons(newDataLessons);
                    }
                });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid-3-4', 'video-block')}>
                <div className={cx('video-show')}>
                    <ReactPlayer
                        url={dataVideo && dataVideo.video}
                        className={cx('video')}
                        height="100%"
                        width="100%"
                        controls={isControl}
                        config={{ file: { attributes: { controlsList: 'nodownload', playsInline: true } } }}
                        onPause={(e) => console.log(refVideo.current.getCurrentTime())}
                        playing={isPlaying}
                        volume={isMuted ? 0 : 0.8}
                        ref={refVideo}
                        onEnded={handleOnEndVideo}
                        onProgress={handleOnProgress}
                    />
                    {!isControl && (
                        <>
                            <div className={cx('icon-video', 'play')} onClick={handlePlayPause}>
                                {isPlaying ? <PlayIcon /> : <PauseIcon />}
                            </div>
                            <div className={cx('icon-video', 'mute')} onClick={handleMuteUnmute}>
                                {!isMuted ? <VolumeIcon /> : <MuteIcon />}
                            </div>
                        </>
                    )}
                </div>
                <div className={cx('content', 'grid-full-width', 'mt-32')}>
                    <div className={cx('title', 'mb-8')}>{dataVideo && dataVideo.name}</div>
                    <div className={cx('about')}>
                        {dataVideo &&
                            dataVideo.desrcription.split('\n').map((el, index) => {
                                if (el.indexOf('https') === -1) return <p key={index}>{el}</p>;
                                var prePos = 0;
                                var PstPos = 0;
                                var arr = [];
                                var newString = el;
                                var keyValue = 0;
                                while (prePos !== -1) {
                                    PstPos = newString.indexOf('https');

                                    if (PstPos === -1) {
                                        arr.push(newString);
                                        break;
                                    }
                                    arr.push(newString.substring(0, PstPos));

                                    newString = newString.substring(PstPos, newString.length);

                                    PstPos = newString.indexOf(' ');
                                    prePos = PstPos;

                                    if (PstPos === -1) {
                                        arr.push(
                                            <a key={keyValue++} href={newString}>
                                                {newString}
                                            </a>,
                                        );
                                        break;
                                    } else
                                        arr.push(
                                            <a key={keyValue++} href={newString.substring(0, PstPos)}>
                                                {newString.substring(0, PstPos)}
                                            </a>,
                                        );

                                    newString = newString.substring(PstPos, newString.length);

                                    prePos = PstPos;
                                }

                                return <p key={index}>{arr}</p>;
                            })}
                    </div>
                </div>
            </div>
            <div className={cx('grid-4', 'stage-block')}>
                <div className={cx('mb-8', 'grid-full-width')}>
                    <p className={cx('stage-title')}>Nội dung khoá học</p>
                </div>
                <div className={cx('stage')}>
                    <ul className={cx('stage-list')}>
                        {lessons !== [] &&
                            lessons.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <div
                                            className={cx('stage-item-title', 'p-relative')}
                                            onClick={(e) => handleOnClickStage(e, index)}
                                        >
                                            <h4>
                                                {index + 1}. {element[0].namechapter}
                                            </h4>
                                            <p className={cx('time')}>
                                                <span>
                                                    <VideoIcon className={cx('icon')} />
                                                </span>
                                                <span>
                                                    {LessonLearned(element, index + 1)} | {SumTime(element)}
                                                </span>
                                            </p>
                                            <div
                                                className={cx('icon-arrow', index === isTarget ? cx('up') : cx('down'))}
                                                ref={pushRefArrow}
                                            >
                                                <ArrowIcon className={cx('icon', 'arrow')} />
                                            </div>
                                        </div>
                                        <ul
                                            className={cx('stage-item-list', index === isTarget ? '' : cx('close'))}
                                            ref={pushRefLink}
                                        >
                                            {element.map((e, indexx) => {
                                                return (
                                                    <Button
                                                        href={
                                                            e.video === '' ? `/course/learn/${e.id}-${e.idNumber}` : '#'
                                                        }
                                                        className={cx(
                                                            (e.idNumber - 1 > 0 &&
                                                                dataLessons.filter(
                                                                    (ee) => ee.idNumber === e.idNumber - 1,
                                                                )[0].islearned) ||
                                                                e.islearned ||
                                                                e.video !== ''
                                                                ? 'active'
                                                                : '',
                                                            e.video !== '' ? 'selected' : '',
                                                        )}
                                                        key={indexx}
                                                    >
                                                        <div className={cx('item-title')}>
                                                            <h5>
                                                                {indexx + 1}. {e.name}
                                                            </h5>
                                                            <p className={cx('time')}>
                                                                <span>
                                                                    <VideoIcon className={cx('icon')} />
                                                                </span>
                                                                <span>{IntToHours(e.timeVideo)}</span>
                                                            </p>
                                                        </div>
                                                        {e.islearned && (
                                                            <div className={cx('check-icon')}>
                                                                <CheckRoundIcon className={cx('icon', 'check')} />
                                                            </div>
                                                        )}
                                                    </Button>
                                                );
                                            })}
                                        </ul>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default LearnCourse;

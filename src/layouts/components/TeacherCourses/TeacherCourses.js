import ListCourses from '~/components/Popper/Courses';
import styles from './TeacherCourses.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import { FilterData } from '~/services';
import Button from '~/components/Button/Button';
import Sidebar from '../Sidebar/Sidebar';

const cx = classNames.bind(styles);

function Courses() {
    const [data, setData] = useState();

    async function getCourses() {
        try {
            const response = await fetch(`https://localhost:7254/api/Courses`, {
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
                    setData(FilterData(data));
                });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCourses();
    }, []);
    return (
        <>
            <Sidebar curPage='teacher' />
            <aside className={cx('wrapper', 'grid')}>
                {data !== undefined && (
                    <>
                        {Object.keys(data).map((el, index) => (
                            <div className={cx('btn')} key={index}>
                                <Button href={`#${data[index][0].id}`} key={index}>{`${
                                    data[index].sex ? 'Thầy' : 'Cô'
                                } ${data[index][0].nameteacher}`}</Button>
                            </div>
                        ))}
                        {Object.keys(data).map((el, index) => (
                            <div className={cx('grid-full-width')} key={index}>
                                <ListCourses
                                    data={data[index]}
                                    title={`${data[index].sex ? 'Thầy' : 'Cô'} ${data[index][0].nameteacher}`}
                                    id={data[index][0].id}
                                />
                            </div>
                        ))}
                    </>
                )}
            </aside>
        </>
    );
}

export default Courses;

import Courses from '~/components/Popper/Courses';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';

import Slide from './Slide';
import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import { FilterData } from '~/services';

const cx = classNames.bind(styles);

function Home() {
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
                    console.log(data);
                    setData(FilterData(data, 'home'));
                });
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCourses();
    }, []);
    return (
        <aside className={cx('wrapper', 'grid')}>
            <Slide />
            {data !== undefined &&
                Object.keys(data).map((el, index) => (
                    <div className={cx('grid-full-width')} key={index}>
                        <Courses data={data[index]} />
                    </div>
                ))}
        </aside>
    );
}

export default Home;

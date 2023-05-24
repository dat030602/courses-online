import config from '~/config/';
import Course from '~/layouts/layouts/Course';

//Layout
import HomePage from '~/pages/Home';
import CoursePage from '~/pages/Course';
import CoursesPage from '~/pages/Courses';
import MyCoursesPage from '~/pages/MyCourses';
import InfoPage from '~/pages/Info';
import LearnCoursePage from '~/pages/LearnCourse';

const publicRoutes = [
    { path: config.routes.home, components: HomePage },
    { path: config.routes.course, components: CoursePage },
    { path: config.routes.courses, components: CoursesPage },
    { path: config.routes.myCourses, components: MyCoursesPage },
    { path: config.routes.info, components: InfoPage },
    { path: config.routes.learn, components: LearnCoursePage, layout: Course },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };

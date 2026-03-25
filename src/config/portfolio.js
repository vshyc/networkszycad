import img1 from '../components/assets/img/portfolio/01-thumbnail.jpg';
import java from '../components/assets/img/portfolio/java.jpeg';
import restAssured from '../components/assets/img/portfolio/restAssured.png';
import devops from '../components/assets/img/portfolio/devops.png';
import family from '../components/assets/img/portfolio/family.jpeg';
import run from '../components/assets/img/portfolio/run.jpg';
import ino from '../components/assets/img/portfolio/ino.jpg';
import img2 from '../components/assets/img/portfolio/02-thumbnail.jpg';

export const TECHNOLOGIES = [
  { title: 'CV', subTitle: 'Education and Work Journey', img: img2, portfolioModal: '/CV' },
  { title: 'Tester', subTitle: 'The Journey', img: img1, portfolioModal: '/about' },
  { title: 'Java', subTitle: 'Main Language', img: java, portfolioModal: '/java' },
  { title: 'TA', subTitle: 'Test Automation', img: restAssured, portfolioModal: '/ta' },
  { title: 'DevOps', subTitle: 'Grow in DevOps', img: devops, portfolioModal: '/devops' },
];

export const FREE_TIME = [
  { title: 'Family', subTitle: 'Family is always first', img: family, portfolioModal: '/myFamily' },
  { title: 'Sport', subTitle: 'Running, Cycling, Gym', img: run, portfolioModal: '/running' },
  { title: 'Orienteering', subTitle: 'Spending time with my Family', img: ino, portfolioModal: '/orienteering' },
];

export const SERVICES = [
  { serviceName: 'E-Commerce', serviceText: '', icon: 'fa-shopping-cart' },
  { serviceName: 'Responsive Design', serviceText: '', icon: 'fa-laptop' },
  { serviceName: 'Web Security', serviceText: '', icon: 'fa-lock' },
];

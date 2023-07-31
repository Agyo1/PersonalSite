import perceptronImage from './images/perceptron.png';
import orbitFinderImage from './images/orbitFinder.PNG';
import orderWebsiteImage from './images/orderWebsite.PNG';

const projects = [
    {
        id: 1,
        name: 'perceptron',
        link: '#',
        image: perceptronImage,
        tags: [
            {
                name: 'html',
                rule: 'pink-tag',
            },
            {
                name: 'css',
                rule: 'blue-tag',
            },
            {
                name: 'js',
                rule: 'orange-tag',
            },
        ],
    },
    {
        id: 2,
        name: 'orbit finder',
        link: '#',
        image: orbitFinderImage,
        tags: [
            {
                name: 'html',
                rule: 'pink-tag',
            },
            {
                name: 'css',
                rule: 'blue-tag',
            },
            {
                name: 'js',
                rule: 'orange-tag',
            },
        ],
    },
    {
        id: 3,
        name: 'order website',
        link: '#',
        image: orderWebsiteImage,
        tags: [
            {
                name: 'react',
                rule: 'cyan-tag',
            },
        ],
    },
];
export default projects;

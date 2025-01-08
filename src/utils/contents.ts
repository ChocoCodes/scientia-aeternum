import { ModuleContent } from './utils';
import textBlocks from './textblocks';

const contents: ModuleContent[] = [
    {
        module: 1,
        title: 'A Historical Odyssey — Science and Technology Through the Years',
        image: './src/assets/img/m1.png',
        content: textBlocks[0],
    },
    {
        module: 2,
        title: 'Impacts of Intellectual Revolutions in the Society',
        image: './src/assets/img/m2.png',
        content: textBlocks[1]
    },
    {
        module: 3,
        title: 'Exploring Diversity in the society and the UN Sustainable Goals',
        image: './src/assets/img/m3.png',
        content: textBlocks[2]
    },
    {
        module: 4,
        title: 'Unveiling the Dynamics of Biodiversity and Environmental Issues',
        image: './src/assets/img/m45.png',
        content: textBlocks[3]
    },
    {
        module: 5,
        title: 'Enabling Human Flourishing in the Modern Age of Science and Technology',
        image: './src/assets/img/m6.png',
        content: textBlocks[4]
    },
    {
        module: 6,
        title: 'Student Reflection on the Course',
        image: './src/assets/img/ref.jpg',
        content: textBlocks[5]
    },
];

export default contents;



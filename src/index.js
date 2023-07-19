import _ from 'lodash';
import '../src/styles/main.scss'
import addBaseElements from './modules/addBaseElements';
import fillHeader from './modules/fillHeader';
import fillFooter from './modules/fillFooter';
import sidePanel from './modules/sidePanel';
import projectData from './modules/projectData';
import resizeWindow from './modules/resizeWindow';

addBaseElements();
fillHeader();
fillFooter();
sidePanel();
projectData();

window.addEventListener('resize', resizeWindow);
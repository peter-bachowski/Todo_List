import _ from 'lodash';
import '../src/styles/main.scss'
import addBaseElements from './modules/addBaseElements';
import fillHeader from './modules/fillHeader';
import fillFooter from './modules/fillFooter';
import sidePanel from './modules/sidePanel';
import projectData from './modules/projectData';
import resizeWindow from './modules/resizeWindow';
import loadTodos from './modules/loadTodos';
import formatContentArea from './modules/formatContentArea';
import getCurrentDate from './modules/getCurrentDate';

addBaseElements();
fillHeader();
fillFooter();
projectData();
sidePanel();
formatContentArea();
loadTodos();

window.addEventListener('resize', resizeWindow);
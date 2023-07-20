import _ from 'lodash';
import '../src/styles/main.scss'
import addBaseElements from './modules/addBaseElements';
import fillHeader from './modules/fillHeader';
import fillFooter from './modules/fillFooter';
import sidePanel from './modules/sidePanel';
import projectData from './modules/projectData';
import resizeWindow from './modules/resizeWindow';
import loadTodos from './modules/loadTodos';

addBaseElements();
fillHeader();
fillFooter();
sidePanel();
projectData();
loadTodos();

window.addEventListener('resize', resizeWindow);
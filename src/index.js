import _ from 'lodash';
import '../src/styles/main.scss'
import addBaseElements from './modules/addBaseElements';
import fillHeader from './modules/fillHeader';
import fillFooter from './modules/fillFooter';
import fillSidePanel from './modules/fillSidePanel';
import projectCounter from './modules/projectCounter';
import resizeWindow from './modules/resizeWindow';
import loadProjectTodo from './modules/loadProjectTodo';

addBaseElements();
fillHeader();
fillFooter();
fillSidePanel();
projectCounter();
loadProjectTodo();

window.addEventListener('resize', resizeWindow);
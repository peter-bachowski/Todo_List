import _ from 'lodash';
import '../src/styles/main.scss'
import addBaseElements from './modules/addBaseElements';
import fillHeader from './modules/fillHeader';
import fillFooter from './modules/fillFooter';
import fillSidePanel from './modules/fillSidePanel';
import projectCounter from './modules/projectCounter';

addBaseElements();
fillHeader();
fillFooter();
fillSidePanel();
projectCounter();
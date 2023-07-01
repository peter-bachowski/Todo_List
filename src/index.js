import _ from 'lodash';
import '../src/styles/main.scss'
import addBaseElements from './addBaseElements';
import fillHeader from './fillHeader';
import fillFooter from './fillFooter';
import fillSidePanel from './fillSidePanel';

addBaseElements();
fillHeader();
fillFooter();
fillSidePanel();
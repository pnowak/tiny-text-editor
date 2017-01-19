'use strict';

import Editor from './src/editor';
import { get } from './src/helpers';

const editor = new Editor( get( 'editor' ), 'bold', 'italic' ); 

editor.create();
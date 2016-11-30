'use strict';

import Editor from './src/editor';
import { get } from './src/helpers';

const editor = new Editor(); 

editor.create( get( 'editor' ), {
    toolbar: [ 'bold', 'italic', 'undo', 'redo' ]
} );
'use strict';

import Editor from './src/editor';

const editor = new Editor(); 

editor.create( document.getElementById( 'editor' ), {
    toolbar: [ 'bold', 'italic', 'undo', 'redo' ]
} );
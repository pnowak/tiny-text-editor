'use strict';

class Typing {
	constructor() {
		this.keyCodeToKeyName = {
		    // Keys with words or arrows on them
		    8:'Backspace', 9:'Tab', 13:'Enter', 16:'Shift', 17:'Control', 18:'Alt',
		    19:'Pause', 20:'CapsLock', 27:'Esc', 32:'Spacebar', 33:'PageUp',  
		    34:'PageDown', 35:'End', 36:'Home', 37:'Left', 38:'Up', 39:'Right',
		    40:'Down', 45:'Insert', 46:'Del',

		    // Number keys on main keyboard (not keypad)
		    48:'0',49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',

		    // Letter keys. Note that we don't distinguish upper and lower case
		    65:'A', 66:'B', 67:'C', 68:'D', 69:'E', 70:'F', 71:'G', 72:'H', 73:'I',
		    74:'J', 75:'K', 76:'L', 77:'M', 78:'N', 79:'O', 80:'P', 81:'Q', 82:'R',
		    83:'S', 84:'T', 85:'U', 86:'V', 87:'W', 88:'X', 89:'Y', 90:'Z',

		    97:'a', 261:'ą', 98:'b', 99:'c', 263:'ć', 100:'d', 101:'e', 281:'ę', 102:'f', 
		    103:'g', 104:'h', 105:'i', 106:'j', 107:'k', 108:'l', 322:'ł', 109:'m', 110:'n', 
		    324:'ń', 111:'o', 243:'ó', 112:'p', 113:'q', 114:'r', 115:'s', 347:'ś', 116:'t', 
		    117:'u', 118:'v', 119:'w', 120:'x', 121:'y', 122:'z', 378:'ź', 380:'ż',

		    // Keypad numbers and punctuation keys. (Opera does not support these.)
		    96:'0',97:'1',98:'2',99:'3',100:'4',101:'5',102:'6',103:'7',104:'8',105:'9',
		    106:'Multiply', 107:'Add', 109:'Subtract', 110:'Decimal', 111:'Divide',

		    // Punctuation keys that don't require holding down Shift
		    // Hyphen is nonportable: FF returns same code as Subtract
		    59:';', 61:'=', 186:';', 187:'=', // Firefox and Opera return 59,61 
		    188:',', 190:'.', 191:'/', 192:'`', 219:'[', 220:'\\', 221:']', 222:"'"
		}
	}

    handleKeypress(e) {
        let key = this.keyCodeToKeyName[e.which];

        console.log(key);
    }
}

export default Typing;
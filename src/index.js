const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let coded = []; 
    for (let i = 0; i < expr.length; i+=10) {
        coded.push(expr.substring(i, i+10)); 
    }
    let decoded = [];
   
    coded.forEach(el => {
        
        el = (el === '**********') ? ' ' : 
                                   String(parseInt(el, 10));
  
        for (i = 0; i < el.length; i+=2) {

            el = (el.indexOf('10') !== -1) ? el.split('10').join('.') : 
                                             el.split('11').join('-');
        }
        
        if (el !== ' ') {
            decoded.push(MORSE_TABLE[el]);
        } else decoded.push(el);
   
    });
    
    return decoded.join(''); 
}

module.exports = {
    decode
}
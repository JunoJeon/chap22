import {sprintf} from "sprintf-js"


for (let i=0; i<10; i++) {
	let line = parseInt(Math.random()*20+1) 
	let column = parseInt(Math.random()*40+1)
	let fg = parseInt(Math.random()*8 + 30)
	let bg = parseInt(Math.random()*8 + 40)
	let ch = parseInt(Math.random()*26 + 'A'[0].charCodeAt())
	ch = String.fromCharCode(ch) // ch를 문자로 바꿔줌

	"A"[0].codePointAt()

// 	console.log(`[${line}, ${column}, ${fg}, ${bg}, ${ch}]`);
	console.log(sprintf("[%02d, %02d, %02d, %02d, %s]", line, column, fg, bg, ch));
}
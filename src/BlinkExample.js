import sleep from 'es7-sleep'
import VT100 from "./util/VT100.js";
import Alpha from "./util/Alpha.js";


async function main() {
	VT100.clearScreen();
	
	for(let i=0; i<300; i++) {
		
		let alpha = new Alpha();
		alpha.show();
		await sleep(100);
		alpha.hide();
		
	}
	VT100.reset
	VT100.cursorMove(21,1);
	VT100.println("Program end");
}

main();
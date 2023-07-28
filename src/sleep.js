
import sleep from 'es7-sleep'

async function main() {
	console.log("Program Start...")
	
	for (let i=0; i<10; i++) {
		await sleep(1000);
		console.log(i);
	}
	
	console.log("Program End...");
}

main();
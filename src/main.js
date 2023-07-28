

function main() {
	console.log("Start..");
	
	
	console.log(isNaN(NaN));
	console.log(Math.random());
	
	for(let i=0; i<10; i++)
		process.stdout.write(i+"");
	
	console.log("End..");
}

main();
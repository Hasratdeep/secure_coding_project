async function simulateAsyncOperation() {
	return new Promise((resolve) =>
		setTimeout(() => {
            console.log("asynchronous operation successful!");
			resolve("Success!");
		}, 1000)
	);
}
async function demonstrateAsyncCall() {
	console.log("Starting asynchronous operation...");
	const result = await simulateAsyncOperation();
	console.log(result);
}
const myPromise = new Promise((resolve, reject) => {
	const condition = true; 
	if (condition) {
		resolve("Promise is Resolved Successfully.");
	} else {
		reject("Promise is rejected");
	}
});
myPromise
	.then((result) => console.log(result)) 
	.catch((error) => console.log(error));

    async function fetchCatBreeds() {
        const response = await fetch("https://catfetch.com/v3.1/all");
        const finalResponse = response.json()
        console.log(finalResponse);
        return finalResponse;
    }
    fetchCatBreeds().then((data) => console.log(data));
    function getSelectedValue() {
        const SelectedValue = factCountDropdown.value;
        console.log(SelectedValue);
        return SelectedValue;
    }
    async function displayCatFacts() {
          console.error("Error fetching cat breeds:", error);
        }
        const samuraiPizzaCats = {
            leader: "Speedy Cerviche",
            members: 3,
            base: {
                location: "Little Tokyo",
                name: "Pizza Cat Restaurant",
            },
            catchphrase: "It's cheese time!",
        };
        const {leader, base: {location}} = samuraiPizzaCats;
        console.log(leader);
        console.log(location);




            






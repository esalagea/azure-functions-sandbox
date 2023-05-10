
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const functionKey = 'SNLWnbx7O3ezNHJOgEicu4u9PzrRw6g06At13zcqBYWyAzFuAewBtw==';
const base_url = `http://localhost:41413/api/HttpTriggerJava?code=${functionKey}`
//const base_url = `https://app-azure-function-examples-230509115615.azurewebsites.net/api/HttpTriggerJava?code=${functionKey}`

let firstOption = null;

// Handle clicks on the first set of images
page1.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        firstOption = event.target.dataset.option;
        page1.classList.add("hidden");
        page2.classList.remove("hidden");
        page2.classList.add("image-container");
    }
});


// Handle clicks on the second set of images
page2.addEventListener("click", async (event) => {
    if (event.target.tagName === "IMG") {
        const secondOption = event.target.dataset.option;


        const apiUrl = base_url+ `&character=${firstOption}&location=${secondOption}`


        try {
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.text();
                // Navigate to the result page with the function response as a URL parameter
                window.location.href = `story.html?response=${encodeURIComponent(data)}`;
            } else {
                alert(`Error: ${response.status} ${response.statusText}`);
            }



        } catch (error) {
            console.error("Error:", error);
            alert(`Error: ${error.message}`);
        }
    }
});


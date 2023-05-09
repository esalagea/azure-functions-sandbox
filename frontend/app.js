document.getElementById('call-function').addEventListener('click', async () => {
    const functionKey = 'SNLWnbx7O3ezNHJOgEicu4u9PzrRw6g06At13zcqBYWyAzFuAewBtw==';
    const apiUrl = `https://app-azure-function-examples-230509115615.azurewebsites.net/api/HttpTriggerJava?code=${functionKey}&name=Emil`;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.text();
            alert(`Function response: ${data}`);
        } else {
            alert(`Error: ${response.status} ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert(`Error: ${error.message}`);
    }
});

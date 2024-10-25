// promises

console.log("I am first")
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                id: userId,
                name: "John Doe",
                age: 30,
            };

            // Simulating a successful response
            if (userId) {
                resolve(userData);
            } else {
                // Simulating an error response
                reject("User ID is required");
            }
        }, 2000); // Simulate a 2-second delay
    });
}
fetchUserData(1)
    .then((data) => {
        console.log("User Data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

console.log("I am last")

const btn = document.getElementById("myButton").value.trim();
const result = document.getElementById("result");

function fetchDataFromExternalAPI() {
  return new Promise((resolve, reject) => {
    fetch(" https://jsonplaceholder.typicode.com/todos") // Replace 'https://api.example.com/data' with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data); // Resolve the promise with the fetched data
        console.log(data);
      })
      .catch((error) => {
        reject(error); // Reject the promise if there's an error
      });
  });
}

// Fetch data from the external API and display it in an unordered list
document.getElementById("myButton").addEventListener("click", function () {
  fetchDataFromExternalAPI()
    .then((data) => {
      data.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${item.title} Completed: ${item.completed}` ; // Replace with your object properties
        result.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("There was a problem fetching the data:", error);
      result.innerHTML = "There was a problem fetching the data"
    });
});

const apiUrl = "https://wedding-3j8y.onrender.com/api/getAll"; // Replace with your API endpoint

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    displayResults(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

function displayResults(data) {
  const resultsContainer = document.getElementById("results");

  data.forEach((item, index) => {
    const resultDiv = document.createElement("div");
    resultDiv.classList.add("card", "mb-4");

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList.add("card-body");

    const title = document.createElement("h3");
    title.textContent = `${index + 1}) ${item.Q2}`;
    title.classList.add("card-title", "font-weight-bold");

    const q1 = document.createElement("p");
    q1.textContent = `${item.Q1}`;
    q1.classList.add("card-text");

    cardBodyDiv.appendChild(title);
    cardBodyDiv.appendChild(q1);

    resultDiv.appendChild(cardBodyDiv);

    resultsContainer.appendChild(resultDiv);
  });
}

fetchData();

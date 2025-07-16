function fetchCovidData() {
    const date = document.getElementById("dateInput").value;
    if (!date) {
        alert("Please select a date.");
        return;
    }

    document.getElementById("results").innerHTML = "<div class='text-center my-4'><div class='spinner-border'></div></div>";

    fetch("https://api.rootnet.in/covid19-in/stats/history")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const allData = data.data;
            const selected = allData.find(function (entry) {
                return entry.day === date;
            });

            if (!selected) {
                document.getElementById("results").innerHTML = `<p class=\"text-danger text-center\">No data found for ${date}</p>`;
                return;
            }

            document.getElementById("date-section").innerHTML = `
          <div class=\"text-center mb-4\">
            <h5>Showing data for: <strong>${date}</strong></h5>
            <button class=\"btn btn-secondary mt-2\" onclick=\"location.reload()\">Select Another Date</button>
          </div>
        `;

            let dataCards = "";
            const labels = [];
            const confirmedCases = [];

            selected.regional.forEach(function (state) {
                labels.push(state.loc);
                confirmedCases.push(state.totalConfirmed);
                dataCards += `
            <div class=\"card shadow-sm\">
              <div class=\"card-body\">
                <h5 class=\"card-title\">${state.loc}</h5>
                <p class=\"card-text\">
                  Confirmed Cases: <strong>${state.totalConfirmed}</strong><br>
                  Discharged: <strong>${state.discharged}</strong><br>
                  Deaths: <strong>${state.deaths}</strong>
                </p>
              </div>
            </div>
          `;
            });


            // this graph is made by CHATGPT , NOT BY ME., i want to make this more attractive that's why i used chatGPT for help.


            document.getElementById("results").innerHTML = `
          <div class=\"col-md-6 overflow-auto\">
            ${dataCards}
          </div>
          <div class=\"col-md-6\">
            <canvas id=\"covidChart\"></canvas>
          </div>
        `;

            const ctx = document.getElementById('covidChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Total Confirmed Cases',
                        data: confirmedCases,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Confirmed Cases by State'
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                maxRotation: 90,
                                minRotation: 60,
                                autoSkip: false
                            }
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

        })
        .catch(function (error) {
            document.getElementById("results").innerHTML = `<p class=\"text-danger text-center\">Error fetching data.</p>`;
            console.log(error);
        });
}
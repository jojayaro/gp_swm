function updateChart() {
    const url = "https://services.swpc.noaa.gov/products/geospace/propagated-solar-wind-1-hour.json";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const timeTags = data.slice(1).map(row => row[0]);
        const bz = data.slice(1).map(row => parseFloat(row[6]));
        const bt = data.slice(1).map(row => parseFloat(row[7]));
        const speed = data.slice(1).map(row => parseFloat(row[1]));
        const density = data.slice(1).map(row => parseFloat(row[2]));
        const temperature = data.slice(1).map(row => parseFloat(row[3]));

        let sum_bz = 0;
        for (let i = 0; i < bz.length; i++) {
        sum_bz += bz[i];
        }

        let avg = sum_bz / bz.length;

        document.getElementById("avg_bz").innerHTML = avg.toFixed(2);

        let sum_speed = 0;
        for (let i = 0; i < speed.length; i++) {
            sum_speed += speed[i];
        }

        let avg2 = sum_speed / speed.length;

        document.getElementById("avg_speed").innerHTML = avg2.toFixed(2);

        let sum_density = 0;

        for (let i = 0; i < density.length; i++) {
            sum_density += density[i];
        }

        let avg3 = sum_density / density.length;

        document.getElementById("avg_density").innerHTML = avg3.toFixed(2);

        document.getElementById("avg_temp").innerHTML = temperature[temperature.length - 1];

        var dataupdate = {
            x: [timeTags, timeTags],
            y: [bz, bt]
        };
        Plotly.update('bz_chart', dataupdate);

        var dataupdate2 = {
            x: [timeTags],
            y: [speed]
        };
        Plotly.update('speed_chart', dataupdate2);

        var dataupdate3 = {
            x: [timeTags],
            y: [density]
        };
        Plotly.update('density_chart', dataupdate3);

        var dataupdate4 = {
            x: [timeTags],
            y: [temperature]
        };
        Plotly.update('temperature_chart', dataupdate4);

    })
      .catch(error => console.error('Error fetching data:', error));


}
// Step 1: Fetch the data from the URL
const url = "https://services.swpc.noaa.gov/products/geospace/propagated-solar-wind-1-hour.json";

fetch(url)
.then(response => response.json())
.then(data => {
    //Parse the JSON data
    const timeTags = data.slice(1).map(row => row[0]);
    const bz = data.slice(1).map(row => parseFloat(row[6]));
    const bt = data.slice(1).map(row => parseFloat(row[7]));
    const speed = data.slice(1).map(row => parseFloat(row[1]));
    const density = data.slice(1).map(row => parseFloat(row[2]));
    const temperature = data.slice(1).map(row => parseFloat(row[3]));

    //calculate average bz
    let sum_bz = 0;
    for (let i = 0; i < bz.length; i++) {
        sum_bz += bz[i];
    }
    let avg = sum_bz / bz.length;
    document.getElementById("avg_bz").innerHTML = avg.toFixed(2);

    //calculate average speed
    let sum_speed = 0;
    for (let i = 0; i < speed.length; i++) {
        sum_speed += speed[i];
    }
    let avg2 = sum_speed / speed.length;
    document.getElementById("avg_speed").innerHTML = avg2.toFixed(2);

    //calculate average density
    let sum_density = 0;
    for (let i = 0; i < density.length; i++) {
        sum_density += density[i];
    }
    let avg3 = sum_density / density.length;
    document.getElementById("avg_density").innerHTML = avg3.toFixed(2);

    document.getElementById("avg_temp").innerHTML = temperature[temperature.length - 1];


    // Step 4: Create a Plotly chart
    const trace1 = {
    x: timeTags,
    y: bz,
    mode: 'lines',
    name: 'Bz',
    };

    const trace2 = {
    x: timeTags,
    y: bt,
    mode: 'lines',
    name: 'Bt',
    };

    const layout =  {
        "showlegend": false,
        //"height": 400,
        "paper_bgcolor": "transparent",
        "plot_bgcolor": "transparent",
        "xaxis": {
            showgrid: false,
            "visible": false
        },
        "yaxis": {
            showgrid: false,
        },
        "xaxis2": {
            showgrid: false,
        "visible": false
        },
        "yaxis2": {
            showgrid: false,
        },
        margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 20,
            pad: 5
        },
    }

    const dataPlot = [trace1, trace2];

    Plotly.newPlot('bz_chart', dataPlot, layout);

    const trace3 = {
        x: timeTags,
        y: speed,
        mode: 'lines',
        name: 'Speed',
    };

    const layout2 =  {
        "showlegend": false,
        //"height": 800,
        "paper_bgcolor": "transparent",
        "plot_bgcolor": "transparent",
        "xaxis": {
            showgrid: false,
            "visible": false
        },
        "yaxis": {
            showgrid: false,
        },
        margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 20,
            pad: 5
        },
    }

    const dataPlot2 = [trace3];

    Plotly.newPlot('speed_chart', dataPlot2, layout2);

    const trace4 = {
        x: timeTags,
        y: density,
        mode: 'lines',
        name: 'Density',
    };

    const layout3 =  {
        "showlegend": false,
        //"height": 800,
        "paper_bgcolor": "transparent",
        "plot_bgcolor": "transparent",
        "xaxis": {
            showgrid: false,
            "visible": false
        },
        "yaxis": {
            showgrid: false,
        },
        margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 20,
            pad: 5
        },
    }

    const dataPlot3 = [trace4];

    Plotly.newPlot('density_chart', dataPlot3, layout3);

    const trace5 = {
        x: timeTags,
        y: temperature,
        mode: 'lines',
        name: 'Temperature',
    };

    const layout4 =  {
        "showlegend": false,
        //"height": 800,
        "paper_bgcolor": "transparent",
        "plot_bgcolor": "transparent",
        "xaxis": {
            showgrid: false,
            "visible": false
        },
        "yaxis": {
            showgrid: false,
        },
        margin: {
            l: 20,
            r: 20,
            b: 20,
            t: 20,
            pad: 5
        },
    }

    const dataPlot4 = [trace5];

    Plotly.newPlot('temp_chart', dataPlot4, layout4);


})
.catch(error => console.error('Error fetching data:', error));

setInterval(updateChart, 60000);
// Scatterplot for thesis project. Looks at county and state max and median AQI values from 1980-2019 at 10 year increments.
// Data Source: https://aqs.epa.gov/aqsweb/airdata/download_files.html#Annual
// require https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js

var aqiData


function preload() {
    aqiData = loadTable('/Data/EPA/scatter/AQI_2019_min.csv', 'csv', 'header');
    myFont = loadFont('/Assets/Barlow/Barlow-Light.ttf');
    myFontTitle = loadFont('/Assets/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf');
}


function setup() {
    let c = createCanvas(1500, 1310)
    background('#DBD3D1');
    noLoop();
    ellipseMode();

    var table = aqiData
    var regDia = 7;
    var featureDia = 13;
    y = 1300


    //bottom x axis line
    line(10, 1300, 1300, 1300);
    // y axis line
    line(10, 10, 10, 1300);

    // background tints to be done in Ai
    // 0-50 = good
    // 51-100 = moderate
    // 101-150 = unhealthy for sensitive groups
    // 151-200 = unhealthy
    // 201-300 = very unhealthy
    // 301-500 = hazardous



function plotData(state, colX, startR, endR) {
    strokeWeight(1);
    noFill();
    for (var r=startR; r<endR; r++){
        if (table.getString(r, 0) == state)
            var medianVal = (table.getNum(r, 4)*3);
            console.log(medianVal);
            stroke(127,184,177)
            ellipse(colX, y - medianVal, regDia, regDia);
    };
    // plot max value
    for (var r=startR; r<endR; r++){
        if (table.getString(r, 0) == state)
            var maxVal = (table.getNum(r, 3)*3);
            console.log(maxVal);
            stroke(227,84,43);
            ellipse(colX, y - maxVal, regDia, regDia);
    };
    // plot overall median
    // noStroke();
    for (var r=startR; r<startR+1; r++){
        stroke(75,139,167);
        strokeWeight(2);
        if (table.getString(r, 0) == state)
        var oaMed = (table.getNum(r, 6)*3);
        console.log(oaMed);
        fill(75,139,167,120);
        ellipse(colX, y - oaMed, featureDia, featureDia);
    };
}

/* parameters: state name, x placement on graph (increase by 20 each state),
from csv file: start row value is actual row -2, end row value is one less than last state shown */
plotData("Alaska", 20, 0, 6);
plotData("California", 40, 6, 59);
plotData("Colorado", 60, 59, 84);
plotData("Hawaii", 80, 84, 88);
plotData("Idaho", 100, 88, 108);
plotData("Montana", 120, 108, 123);


}


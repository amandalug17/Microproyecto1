/**
 * Funcion del grafico de pie
 */
window.onload = function() {

    var chart = new CanvasJS.Chart("myChart", {
        animationEnabled: true,
        title: {
            text: ""
        },
        data: [{
            type: "pie",
            startAngle: 240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 80, label: "Java"},
                {y: 9, label: "HTML"},
                {y: 9, label: "CSS"},
                {y: 2, label: "JavaScript"}
            ]
        }]
    });
    chart.render();
    

}
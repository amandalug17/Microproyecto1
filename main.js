
window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "dark2", 
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Mis Habilidades y Destrezas"
        },
        data: [{
            type: "pie",
            startAngle: 45,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 40, label: "Herramientas de Diseño" },
                { y: 40, label: "Java" },
                { y: 9, label: "HTML" },
                { y: 9, label: "CSS" },
                { y: 2, label: "JavaScript" }
            ]
        }]
    });
    chart.render();
    
    }
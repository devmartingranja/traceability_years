
let btnGenerar = document.getElementById('btnGenerar');
let inpAnioInicio = document.getElementById('inpAnioInicio');
let inpAnioFin = document.getElementById('inpAnioFin');
import { calcularTrayectoria } from './operations.js'


btnGenerar.addEventListener('click', () => {

    let valAnioInicio = parseInt(inpAnioInicio.value)
    let valAnioFin = valAnioInicio + parseInt(inpAnioFin.value)
    generarGrafica(valAnioInicio || 0, valAnioFin || 0);

})

function generarGrafica(anioInicio = 2000, anioFin = 2050) {

    let data = calcularTrayectoria(anioInicio, anioFin)

    Highcharts.chart('container', {
        chart: {
            type: 'scatter',
            margin: [70, 50, 100, 80]
        },
        title: {
            text: 'Trazabilidad vida útil de la Edificación'
        },
        subtitle: {
            text: 'Trabajo Final de Master (TFM)'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            gridLineWidth: 1,
            minPadding: 0.2,
            maxPadding: 0.2,
            maxZoom: 0,
            title: {
                text: 'Vida Útil Estimada en Años'
            }
        },
        yAxis: {
            title: {
                text: 'Estado de Prestación'
            },
            minPadding: 0.2,
            maxPadding: 0.2,
            maxZoom: 0,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            enabled: true
        },
        exporting: {
            enabled: true
        },
        plotOptions: {
            series: {
                lineWidth: 1
            }
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: 'Año {point.x} -> {point.y} %'
        },
        series: [{
            name: 'Duración del Elemento',
            data
        }]
    });

}
generarGrafica();



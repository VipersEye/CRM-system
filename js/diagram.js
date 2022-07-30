// Line chart

var ctx = document.getElementById('line').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Ноябрь', 'Декабрь', 'Январь', 'Март', 'Апрель', 'Май'],
        datasets: [{
            label: 'Прибыль',
            data: [160450, 193468, 127840, 110790, 173364, 156174],
            lineTension: 0,
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            pointBorderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointRadius: 5,
            pointHoverRadius: 10,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: 'rectRounded'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Полученная прибыль по месяцам',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: true
        },
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

// Bar chart

var ctx = document.getElementById('bar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Михайлов Никита', 'Сорокина Виктория', 'Субботин Всеволод', 'Рыбакова Василиса', 'Тарасова Анна', 'Миронов Александр'],
        datasets: [{
            data: [12, 19, 3, 5, 8, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Выполненные заказы',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: false,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: true
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Doughnut chart

var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Михайлов Никита', 'Сорокина Виктория', 'Субботин Всеволод', 'Рыбакова Василиса', 'Тарасова Анна', 'Миронов Александр'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 5.99, 7],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600', 'rgba(255, 159, 64)'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Приносимая прибыль',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: true
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});
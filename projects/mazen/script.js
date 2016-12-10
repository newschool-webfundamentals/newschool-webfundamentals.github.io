var bodyObj, className, index;

bodyObj = document.getElementById('body');
index = 1;
className = [
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img6',
    'img7',
    'img8',
    'img9',
    'img10'
];

function updateIndex(){
    if(index === 0){
        index = 1;
        }else if(index === 1){
        index = 2;
        }else if(index === 2){
        index = 3;
        }else if(index === 3){
        index = 4;
        }else if(index === 4){
        index = 5;
        }else if(index === 5){
        index = 6;
        }else if(index === 6){
        index = 7;
        }else if(index === 7){
        index = 8;
        }else if(index === 8){
        index = 9;
       }else{
        index = 0;
    }
}

bodyObj.onclick = function(e){
    e.currentTarget.className = className[index];
    updateIndex();
}

$(function () {
    Highcharts.chart('container1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Increase in Part Time Employment since 2013 (Greece)' 
        },
        subtitle: {
            text: 'Source: EuroStat'
        },
        xAxis: {
            categories: [
                'Q1 2013',
                'Q2 2013',
                'Q1 2014',
                'Q2 2014',
                'Q3 2014',
                'Q4 2014',
                'Q1 2015',
                'Q2 2015',
                'Q3 2015',
                'Q4 2015',
                'Q1 2016',
                'Q2 2016'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Thousands (000)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} k</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Part Time Employment',
            data: [6, 10, 30, 43, 50, 60, 61, 55, 36, 47, 59, 70]

        }]
    });
});

$(function () {
    Highcharts.chart('container2', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Union Affliation Since 1983'
        },
        subtitle: {
            text: 'Source: Bureau of Labor Statistics'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Percent of Employed (%)'
            },
            labels: {
                formatter: function () {
                    return this.value / 1 + '%';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} had <b>{point.y:,.0f}</b><br/>% of employees unionized in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1983,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'United States',
            data: [20.1, 18.8, 18.0, 17.5, 17.0, 16.8, 16.4, 16.0, 16.0, 15.7, 15.7, 15.5, 14.9, 14.5, 14.1, 13.9, 13.9, 13.4, 13.3, 13.3, 12.9, 12.5, 12.0, 12.1, 12.4, 12.3, 11.9, 11.8, 11.3, 11.3, 11.1, 11.1 ]
        }]
    });
});

$(function () {
    Highcharts.chart('container3', {
        title: {
            text: 'National Wage Growth vs Productivity Growth',
            x: -20 //center
        },
        subtitle: {
            text: '1950-2015, USA',
            x: -20
        },
        xAxis: {
            categories: ['1950', '1955', '1960',  '1965',  '1970',  '1975',  '1980',  '1985',  '1990',  '1995',  '2000',  '2005',  '2010',  '2015']
        },
        yAxis: {
            title: {
                text: 'Percent Change(%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Hourly Compensation (%)',
            data: [10.48, 28.74, 45.49, 62.46, 76.59, 86.84, 88.56, 86.31, 82.22, 82.70, 92.90, 100.05, 111.53, 112.53]
        }, {
            name: 'Net Productivity (%)',
            data: [9.33, 26.46, 40.05, 64.94, 80.37, 97.92, 106.57, 123.43, 136.98, 150.86, 178.50, 213.58, 234.28, 241.08]
        }]
    });
});

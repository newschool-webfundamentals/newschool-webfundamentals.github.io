// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

$(function() {
  // ENTER YOUR CODE BELOW HERE

  // Age categories
  var categories = [
    'Deer', 'Primates (Monkeys, Gorillas)', 'Hippos',
    'Elephants', 'Rabbits', 'Bears', 'Rats', 'Foxes', 'Dogs', 'Weasels',
    'Bats', 'Snakes', 'Vultures', 'Sharks', 'Crocodiles',
    'Big Cats (Lions, Tigers, Cheetahs, Jaguars)', 'Cats'
  ];

  Highcharts.setOptions({
    colors: ['#AD0317', '#7D797A']
  });

  Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'The Good Guys vs. The Bad Guys'

    },
    subtitle: {
      text: 'Common animal characters in 35 Disney movies analyzed'
    },

    xAxis: [{
      categories: categories,
      reversed: false,
      labels: {
        step: 1
      }
    }, { // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
      linkedTo: 0,
      labels: {
        step: 1
      }
    }],
    yAxis: {
      title: {
        text: null
      },
      labels: {
        formatter: function() {
          return Math.abs(this.value) + '';
        }
      }
    },

    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },

    tooltip: {
      formatter: function() {
        return '<b>' + this.series.name + ', Animal Species: ' + this.point.category + '</b><br/>' +
          'Number of characters: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
      }
    },

    series: [{
      name: 'Antagonists',
      data: [-0, -0, -0, -0, -0, -1, -2, -2, -2, -2, -2, -2, -3, -3, -5, -5, -6]
    }, {
      name: 'Protagonists',
      data: [2, 2, 2, 4, 4, 2, 1,
        3, 11, 0, 0, 0, 0, 0,
        0, 1, 1
      ]
    }]
  });

  $(document).ready(function(){
    $('.carousel').carousel();
  });
      
  /// ENTER YOUR CODE ABOVE HERE
});

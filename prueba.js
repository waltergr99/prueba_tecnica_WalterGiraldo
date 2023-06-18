var labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6", "Label 7"];
var values = [10, 8, 6, 6, 7, 8, 8];

var tx = document.querySelector('.mychart').getContext('2d');
var chart = new Chart(tx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Amplitud',
            data: values,
            backgroundColor: '#13B497',
            borderColor: '#000000',
            borderWidth: 0.5
        }]
    },
    options: {
        scales: {
            x: {
                display: false
            },
            y: {
                beginAtZero: true,
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        indexAxis: 'x',
        barPercentage: 0.5,
        categoryPercentage: 0.8, 
        layout: {
            padding: {
                bottom: 10
            }
        }
    }
});
var ctx = document.querySelector(".mychart2").getContext("2d");
var chart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["col1", "col2", "col3"],
    datasets: [{
      label: "num datos",
      data: [10, 9, 8],
      backgroundColor: ["#0B6050", "#13B497", "#87FFE9"]
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        color: '#000',
        font: {
          size: 12,
          weight: 'bold'
        },
        formatter: function(value, context) {
          return value;
        },
        position: 'bottom'
      }
    },
    elements: {
      center: {
        text: 'Total',
        color: '#000',
        fontStyle: 'Arial',
        sidePadding: 20
      }
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function(acc, value) {
            return acc + value;
          }, 0);
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.round((currentValue / total) * 100);
          return percentage + '%';
        }
      }
    }
  }
});



var t = document.querySelector('.mychart3').getContext('2d');
var chart = new Chart(t, {
    type: 'bar',
    data: {
        labels: ["lab1"],
        datasets: [{
            label: 'Amplitud',
            data: [10],
            backgroundColor: '#13B497',
            borderColor: '#000000',
            borderWidth: 0.5
         
        }]
    },
    options: {
        scales: {
            x: {
                display: false
            },
            y: {
                beginAtZero: true,
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        indexAxis: 'y',
        barPercentage: 0.5,
        categoryPercentage: 0.8, 
        layout: {
            padding: {
                bottom: 10
            }
        }
    }
});




      

var chart4 = document.querySelector(".mychart4");
var har = new Chart(chart4, {
    type: 'line',
    data: {
        labels: ["", "", "", "", "", "", "", "", "", ""],
        datasets: [{
            label: 'Valores',
            data: [0, 4, 6, 2, 4, 7, 6, 5, 4, 2, 1],
            backgroundColor: 'rgba(19, 180, 151, 0.2)', 
            borderColor: '#13B497',
            borderWidth: 1,
            tension: 0.4,
            fill: true, 
            pointRadius: 0,
            pointHoverRadius: 0
        }]
    },
    options: {
        scales: {
            x: {
                display: false
            },
            y: {
                beginAtZero: false,
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    }
});

        
        var labes = ["", "", "", "", "", "", "", "", "", ""];
        var values1 = [10, 8, 12, 6, 15, 11, 9, 7, 13, 5];
        var values2 = [5, 13, 7, 9, 11, 15, 6, 12, 8, 10];

        
        var mychar5 = document.querySelector('.mychart5').getContext('2d');

        var chang = new Chart(mychar5, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Línea 1',
                        data: values1,
                        backgroundColor: "#D9B75F",
                        borderColor: '#D9B75F',
                        borderWidth: 1,
                        tension: 0.4, 
                        fill: false, 
                        pointRadius: 0,
                        pointHoverRadius: 0 
                    },
                    {
                        label: 'Línea 2',
                        data: values2,
                        backgroundColor: "#13B497",
                        borderColor: "#13B497",
                        borderWidth: 1,
                        tension: 0.4, 
                        fill: false, 
                        pointRadius: 0, 
                        pointHoverRadius: 0 
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        display: false
                    },
                    y: {
                        beginAtZero: false, 
                        display: false
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });





        var ff = document.querySelector(".mychart8").getContext("2d");
        var chart = new Chart(ff, {
          type: "doughnut",
          data: {
            labels: ["col1", "col2", "col3", "col4"],
            datasets: [{
              label: "num datos",
              data: [10, 9, 8, 7],
              backgroundColor: ["red", "blue", "yellow", "green"]
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              },
              datalabels: {
                color: '#000',
                font: {
                  size: 12,
                  weight: 'bold'
                },
                formatter: function(value, context) {
                  return value;
                },
                anchor: 'end',
                align: 'start',
                offset: 4
              }
            }
          }
        });

        


        var ctxx = document.querySelector('.mychart7').getContext('2d');

        var tt = new Chart(ctxx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Línea blanca',
                        data: [2,8,6,6,10,8,4],
                        backgroundColor: '#FFFFFF',
                        borderColor: '#FFFFFF',
                        borderWidth: 2,
                        borderRadius:10
                    },
                    {
                        label: 'Línea verde',
                        data: [4,3,1,7,4,4,7],
                        backgroundColor: '#22DBBA',
                        borderColor: '#22DBBA',
                        borderWidth: 1,
                        borderRadius:10
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        display: false,
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });

        

const swiperWrapper = document.querySelector('.swiper-wrapper');

fetch('https://picsum.photos/v2/list?page=2&limit=100')
  .then(response => response.json())
  .then(data => {
    let counter = 0;
    data.forEach(image => {
      if (counter < 5) {
  
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');
        swiperSlide.appendChild(imgElement);
        swiperWrapper.appendChild(swiperSlide);
        counter++; 
      }
    });

   
    const swiper = new Swiper('.swiper', {
    
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    swiper.updateSize();
  })
  .catch(error => {
    console.log(error);
  });


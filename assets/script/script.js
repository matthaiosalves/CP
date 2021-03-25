/* Copiar Script */


function copy_text_fun(n) {
    let copyText = document.querySelectorAll("#script-body");  
    let copyButton = document.querySelector('.modal.show #copy');
    let buttonCloseTop = document.querySelector('.modal.show button.close');
    let input = document.createElement("textarea");
    let sNumber = Number(n);
    sNumber = sNumber - 1;
    let copy = document.querySelector('#copy');
    
    //console.log(typeof sNumber)

    if (typeof sNumber === 'number') {
        let scripts = copyText[sNumber];
        input.value = scripts.textContent;
        document.body.appendChild(input);
        input.select();
        document.execCommand("Copy");
        input.remove();
        copyButton.innerHTML = "Copiado!";
        copyButton.setAttribute('disabled', 'disabled')
        copyButton.classList.add('btn-success')
        copyButton.classList.remove('btn-primary')
    }   
    
}

function handleCopyButton(){
    // document.querySelector('.modal.show #copy').innerText = 'Copiado'
    let copyButton = document.querySelectorAll('.modal #copy');

    copyButton.forEach(cButton => {
        cButton.innerHTML = "Copiar"
        cButton.removeAttribute('disabled');
        cButton.classList.remove('btn-success')
        cButton.classList.add('btn-primary')
    })
}


function showTime() {
    let d = new Date();
    let da = `0${d.getDate()}`.slice(-2);
    let m = `0${d.getMonth() + 1}`.slice(-2);
    let y = d.getFullYear();

    // `0${minutes}`.slice(-2).split('')
    let txt = da+'/'+m+'/'+y;

    document.querySelector(".date_day").innerHTML = txt;
}

function estatisticasChart() {
    const ctx = document.querySelector('#estatisticasChart');

    const data = [12, 19, 3, 5, 5]

    const dataInfo = {
        labels: ['T1', 'T2', 'T3', 'T4', 'Outros'],
        datasets: [{
            data: data,
            backgroundColor: [
                '#618a2a',
                '#f79d00',
                '#2196f3',
                '#ec0530',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                '#618a2a',
                '#f79d00',
                '#2196f3',
                '#ec0530',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        legend: {
            display: false,
        },
        scales: {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    }

    const config = {
        type: 'bar',
        data: dataInfo,
        options: options
    }

    const myChart = new Chart(ctx, config);
}

function estatisticasDoisChart() {
    const ctx = document.querySelector('#estatisticasDoisChart');

    const data = [12, 19, 3, 5]

    const dataInfo = {
        labels: ['Tp1', 'Tp2', 'Tp3', 'Tp4'],
        datasets: [{
            data: data,
            backgroundColor: [
                '#618a2a',
                '#f79d00',
                '#2196f3',
                '#ec0530'
            ],
            borderColor: [
                '#618a2a',
                '#f79d00',
                '#2196f3',
                '#ec0530'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    }

    const config = {
        type: 'pie',
        data: dataInfo,
        options: options
    }

    const myChart = new Chart(ctx, config);
}

function initChart() {
    // Chart.defaults.global.legend.display = false;
    estatisticasChart()
    estatisticasDoisChart()

}


$(function () {
    showTime();
    initChart();
    $('[data-toggle="tooltip"]').tooltip()

    $('.modal').on('hidden.bs.modal', function (e) {
        handleCopyButton()
    })
})


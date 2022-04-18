//Pseudocódigo
//Paso 1: Definir las propiedades del gráfico.
//Paso 2: Cree el gráfico con propiedades definidas y vincúlelo al elemento DOM.
//Paso 3: agregue la serie CandleStick.
//Paso 4: Establecer los datos y renderizar.
//Paso 5: conecte el enchufe al gráfico

//codigo
const log = console.log;

const chartProperties = {
    width: 1500,
    height: 600,
    timescale: {
        timeVisible:true,
        secondVisible:false,
    }
}

const domElement = document.getElementById('tvchart');
const chart = LighweightCharts.createChart(domElement,chertProperties);
const candleSeries = chart.addCandlestickSeries();

fetch(' https://github.com/Avivakavivak/tradingview.githttps://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=1000')
    .then(res => res.json())
    .then(data => {
        const cdata = data.map(d =>{
            return {time:d[0]/1000,open:parseFloat(d[1]),high:parseFloat(d[2]),low:pasereFloat(d[3]),close:parseFloat(d[4])}
        });
        candleSeries.setData(cdata);

    })
    .catch(err => log (err))

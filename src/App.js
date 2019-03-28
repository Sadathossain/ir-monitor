import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import DonutChart from './components/donutchart'

const logFilePath = 'data/homev2'

class App extends Component {
  constructor(props) {
    super(props);
    document.title = "Monitor : SadatRocks"
    this.state = {
      title1: '',
      data1: [ ['Response', 'Minutes per Day'], ['OK', 100], ['Not OK', 100] ],
      data2: [ ['Response', 'Minutes per Day'], ['OK', 53], ['Not OK', 11] ],
      data3: [ ['Response', 'Minutes per Day'], ['OK', 443], ['Not OK', 89] ],
      data4: [ ['Response', 'Minutes per Day'], ['OK', 443], ['Not OK', 89] ],
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.changeData(),
      15000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  findTotalRequests(s) {
    var temp = s,
      count = (temp.match(/<=>/g) || []).length;
      return count
    // constotale.log(count);
  }
  findOkRequests(s) {
    var temp = s,
      count = (temp.match(/HTTP\/1.1 200 OK/g) || []).length;
      return count
    // console.log(count);
  }
  readLogFile = file => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                var allLog = rawFile.responseText,
                    total = this.findTotalRequests(allLog),
                    ok = this.findOkRequests(allLog),
                    notok = total - ok,
                    startTime = allLog.substring(1, 34),
                    lastTime = '',
                    currentStatus = '[ NOT-OK ]';
                    if (allLog.slice(-5) === '====\n') {
                      currentStatus = '[ OK ]';
                      lastTime = (allLog.slice(-117)).slice((allLog.slice(-116)).indexOf('Time:'), 51);
                    } else {
                      currentStatus = '[ NOT-OK ]';
                      lastTime = allLog.slice(-34);
                    }

                this.setState({
                  title1: 'From ' + startTime + ' <=== TO ===> ' + lastTime + ' Status: ' + currentStatus,
                  data1: [ ['Response', 'Minutes per Day'], ['OK', total], ['Not OK', notok] ]
                })
                // console.log("st: ", startTime);
                console.log("ls: ", lastTime);
                // console.log("total: ", total);
                // console.log("ok: ", ok);
                // console.log("notok: ", notok);
                // console.log("allLog: ", typeof(allLog));
            }
        }
    };
    rawFile.send(null);
};
  changeData() {
    this.readLogFile(logFilePath);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>irhomev2</h2>
        <div className="Chart-row">
          <DonutChart
          title={this.state.title1}
          data={this.state.data1}
          width='55vw'
          height='65vh'
          />
        </div>
        {/* <div className="Chart-row">
          <DonutChart
          title='Chart1'
          data={this.state.data1}/>
          width='300px'
          height='300px'
          <DonutChart
          title='Chart1'
          data={[
            ['Response', 'Minutes per Day'],
            ['OK',     53],
            ['Not OK',  11]
          ]}
          width='300px'
          height='300px'/>
        </div>
        <div className="Chart-row">
          <DonutChart
          title='Chart1'
          data={[
            ['Response', 'Minutes per Day'],
            ['OK',     443],
            ['Not OK',  89]
          ]}
          width='300px'
          height='300px'/>
          <DonutChart
          title='Chart1'
          data={[
            ['Response', 'Minutes per Day'],
            ['OK',     53],
            ['Not OK',  11]
          ]}
          width='300px'
          height='300px'/>
        </div> */}
        </header>
      </div>
    );
  }
}

export default App;

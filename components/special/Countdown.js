import React from "react";

export default class Timer extends React.Component {
  state = {
    endDate: this.props.endDate,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    errorMsg: ''
  };
  componentDidMount= ()=>{
    this.calculateCountdown();
  }
  componentWillUnmount =()=> {
    clearTimeout(this.timer);
  }

  onEndDateChange = endDate => {
    this.setState({ endDate });
  }

  getTwoDigitValue = value => {
    if (value < 10) {
      return '0' + value;
    }
    return '' + value;
  }
  
  calculateCountdown = () => {
    const startDate = new Date();
    const { endDate } = this.state;
    
    this.setState({ errorMsg: '' });
    
    const timeRemaining = endDate.getTime() - startDate.getTime();

    if(timeRemaining > 0) {
      const start_date = new Date(startDate);
      const end_date = new Date(endDate);
      const start_millis = start_date.getTime(); // Get timestamp of start date
      const end_millis = end_date.getTime(); // Get timestamp of end date

      // Convert to seconds, 1 second = 1000 milli seconds
      const old_sec = start_millis / 1000;
      const current_sec = end_millis / 1000;

      // Get remaining seconds
      let seconds = current_sec - old_sec;

      let days = Math.floor(seconds / (24 * 60 * 60)); // 1 day is equal to 24 hours, each hour has 60 mins and 60 seconds
      seconds -= days * 24 * 60 * 60; // Get remaining seconds

      let hours = Math.floor(seconds / (60 * 60)); // 1 hour has 60 mins and 60 seconds
      seconds -= hours * 60 * 60; // Get remaining seconds

      let minutes = Math.floor(seconds / 60); // 1 minute is equal to 60 seconds
      seconds -= minutes * 60; // Get remaining seconds

      days    = Math.abs(days);
      hours   = Math.abs(hours);
      minutes = Math.abs(minutes);
      seconds = Math.floor(Math.abs(seconds));

      this.setState(() => ({
        days, hours, minutes, seconds
      }), () => {
        this.timer = setTimeout(this.calculateCountdown, 1000);
      });
    } else {
      this.setState({ errorMsg: 'Times up!'});
      clearTimeout(this.timer);
    }
  };

  render() {
    const { days, hours, minutes, seconds, errorMsg } = this.state;
    const convertedDays = this.getTwoDigitValue(days);
    const convertedHours = this.getTwoDigitValue(hours);
    const convertedMins = this.getTwoDigitValue(minutes);
    const convertedSeconds = this.getTwoDigitValue(seconds);

    return (
      <div>
        <div className="flex gap-x-4 sm:gap-x-8 justify-center text-white mx-auto p-4">
          <div>
              <div className="tracking-widest p-0.5 text-xl sm:text-4xl text-center">{convertedDays}</div>
              <div className="text-center text-[0.7rem]">Days</div>
          </div>
          <div>
          <div className="tracking-widest p-0.5 text-xl sm:text-4xl text-center">{convertedHours}</div>
          <div className="text-center text-[0.7rem]">Hours</div>
          </div>
          <div>
              <div className="tracking-widest p-0.5 text-xl sm:text-4xl text-center">{convertedMins}</div>
              <div className="text-center text-[0.7rem]">Minutes</div>
          </div>
          <div>
              <div className="tracking-widest p-0.5 text-xl sm:text-4xl text-center">{convertedSeconds}</div>
              <div className="text-center text-[0.7rem]">Seconds</div>
          </div>
      </div>
      </div>
    );
  }
}

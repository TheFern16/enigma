import React from 'react';
import DatePicker from 'react-toolbox/lib/date_picker/DatePicker';

class PickDate extends React.Component {
  render() {
    return (
      <section>
        <DatePicker label='Formatted date' sundayFirstDayOfWeek inputFormat={(value) => `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}`} />
      </section>
    )
  }
}

export default PickDate;
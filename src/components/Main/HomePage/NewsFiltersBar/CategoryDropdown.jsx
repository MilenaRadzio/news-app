import React from 'react';

class CategoryDropdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      }
    }

    onValueChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
        this.props.onCategoryChange(value);
    }

    render() {
     const { value } = this.state;

     return (
      <select value={value} onChange={this.onValueChange}>
        <option value="business">Biznes</option>
        <option value="entertainment">Rozrywka</option>
        <option value="general">Ogólne</option>
        <option value="healthy">Zdrowie</option>
        <option value="science">Nauka</option>
        <option value="sport">Sport</option>
        <option value="technology">Technologia</option></select>
    )
  }
}


export default CategoryDropdown;

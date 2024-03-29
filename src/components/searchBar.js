import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  onInputChange(e) {
    const searchTerm = e.target.value.toLowerCase();
    this.setState({ searchTerm });
  }

  onSearchSubmit() {
   this.props.onSubmit(this.state.searchTerm);
  }
  
handleKeyPress(e) {
    if (e.key === 'Enter') {
          this.props.onSubmit(this.state.searchTerm); 
    }
}
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="input-group searchBar">
            <input
              ref="searchBar"
              type="text"
              className="form-control"
              placeholder="ابحث عن سؤال"
              onKeyUp={this.handleKeyPress.bind(this)}
              onChange={this.onInputChange.bind(this)}
            />
            <span className="input-group-btn">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={this.onSearchSubmit.bind(this)}
              >
                ابحث
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;

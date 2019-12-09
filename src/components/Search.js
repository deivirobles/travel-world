import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = { search: "" }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }


  render() {
    const { handleSearch } = this.props;
    const { search } = this.state

    return (
      <div className="form-group">
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              class="form-control"
              value={search}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-primary" onClick={() => handleSearch(search)}>Search</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;

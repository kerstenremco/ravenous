import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match'
		};
		this.sortByOptions = {
			'Beste overeenkomst': 'best_match',
			'Hoogste waardering': 'rating',
			'Meest beoordeeld': 'review_count'
		};
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	getSortByClass(sortByOption) {
		if (this.state.sortBy === sortByOption) {
			return 'active';
		} else {
			return '';
		}
	}
	handleSortByChange(SortByChange) {
		this.setState({
			sortBy: SortByChange
		});
	}
	handleTermChange(e) {
		this.setState({
			term: e.target.value
		});
	}
	handleLocationChange(e) {
		this.setState({
			location: e.target.value
		});
	}
	handleSearch(e) {
		this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
		e.preventDefault();
	}
	renderSortByOptions() {
    	return Object.keys(this.sortByOptions).map(sortByOption => {
        	let sortByOptionValue = this.sortByOptions[sortByOption];
		return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
        });
    };
	render() {
    return (
    <div className="SearchBar">
  		<div className="SearchBar-sort-options">
    	<ul>
    {this.renderSortByOptions()}
   		</ul>
  		</div>
  		<div className="SearchBar-fields">
    		<input placeholder="Zoek restaurant" onChange={this.handleTermChange} />
    		<input placeholder="Waar?" onChange={this.handleLocationChange} />
  		</div>
  		<div className="SearchBar-submit" onClick={this.handleSearch}>
    	<button>Vind mijn restaurant!</button>
  		</div>
	</div>
    );
    };
};
export default SearchBar;
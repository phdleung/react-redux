import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className='ui segment'>
                <form
                    onSubmit={(event) => this.onFormSubmit(event)}
                    className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input
                            type='text'
                            onChange={(event) => { this.setState({ term: event.target.value }); }}
                            value={this.state.term} />
                    </div>
                </form>
            </div>);
    }
}

export default SearchBar;
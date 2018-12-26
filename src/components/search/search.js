import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults.js';

class Search extends Component {
    state = {
        searchText: '',
        amount: 42,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '9763002-d216503c71156925f0114dac0',
        images: []
    };

    onTextClick = (e) => {
        this.setState({[e.target.name]: e.target.value}, () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&
            image_type=photo&per_page=${this.state.amount}&safesearch=true`)
             .then(res => this.setState({images: res.data.hits}))
             .catch(err => console.log(err));
        });
    };

    onTextChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    keyPress = (e) => {
        if(e.keyCode === 13) {
            this.setState({[e.target.name]: e.target.value}, () => {
                axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&
                image_type=photo&per_page=${this.state.amount}&safesearch=true`)
                 .then(res => this.setState({images: res.data.hits}))
                 .catch(err => console.log(err));
            });
        }
    }

    render() {
        console.log(this.state.images)
        return (
            <div>
                <div style={{paddingLeft: "30px", paddingRight: "30px"}}>
                    <TextField 
                        name="searchText"
                        value={this.state.searchText}
                        onChange={this.onTextChange}
                        onKeyDown={this.keyPress}
                        placeholder="Search"
                        fullWidth={true}
                        style={{ backgroundColor: "trasnparent", border: "2px solid transparent", borderRadius: "8px"}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Button>
                                      <SearchIcon onClick={this.onTextClick}/>
                                    </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <br />
                 {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
            </div>
        )
    }
}

export default Search;
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from '../../actions';
import lupa from "../../img/SEARCH.png";
import './Buscador.css';
import swal from '@sweetalert/with-react';


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title === "") return swal("Be careful!", `You must enter a name`, "warning"); 
    this.props.getMovies(this.state.title)
  }


  render() {
    const { title } = this.state;

    return (
      <div>
        <h2 className="subtitle">Search for a movie:</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              type="text"
              id="searchInput"
              placeholder="Search..."
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="btnLupa">
            <img src={lupa} className="lupa" alt="img not found"/>
          </button>
        </form>

        <div>
        {
          this.props.movies.length === 0?
          <div className="notSearch">
            <img alt="img not found" className="imgNotSearch" src="https://www.gifsanimados.org/data/media/1358/mickey-y-minnie-mouse-imagen-animada-0320.gif"/> 
            <p className="pNotSearch">
              <i>You haven't done any search</i> <br></br>
              <i className="p2">Find the best movies here</i></p>
          </div>
          :
          <div className="divGeneral">
            {
            this.props.movies.map(movie => (
              <div className="eachCard">

                <div className="titleAndBtn" key={movie.imdbID}>
                  <Link to={`/movie/${movie.imdbID}`}>
                    <p className="titleCard">{movie.Title}</p>
                  </Link>
                  <button className="btnFav" onClick={() => {
                    this.props.addMovieFavorite({
                      title: movie.Title,
                      id: movie.imdbID
                    })
                    swal("Done!", `You added this movie to your favorites list`, "success"); 
                  }}>FAV</button>
                </div>

                <img className="imgPoster" src={movie.Poster} alt="img not found"/>

              </div> 
              ))
            }
          </div>
        }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  movies: state.moviesLoaded
});

function mapDispatchToProps(dispatch) {
  return {
    getMovies: title => dispatch(getMovies(title)),
    addMovieFavorite: title => dispatch(addMovieFavorite(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
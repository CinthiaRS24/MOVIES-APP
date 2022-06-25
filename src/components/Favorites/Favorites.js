import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeMovieFavorite } from "../../actions";
import swal from '@sweetalert/with-react'
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2 className="titleFav">List of your favorite movies</h2>
        <ul>
          {
            this.props.movies.length === 0? 
            <>
              <img className="tvGif" alt="img not found" src="https://media.baamboozle.com/uploads/images/473491/1646933779_91908_gif-url.gif"/>
              <p className="pNotFav"><i>You haven't added any movies to your favorites list</i></p>
              <Link to={"/"}>
                <button className="btnAdd">Add a movie</button>
              </Link>
            </>
            :
            this.props.movies.map(movie => (
              <div className="divCardFav" key={movie.id}>

                <div className="first-row">
                  <span className="titleCardFav">{movie.title}</span>
                  <button className="btnDeleteFav" onClick={() => {
                    this.props.removeMovieFavorite(movie.id);
                    swal("Done!", `You removed the movie from your favorites list`, "success"); 
                  }}>X</button>
                </div>
                
                <div className="second-row">
                  <Link to={`/movie/${movie.id}`}>
                    <img className="imgPlus" src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" alt="img not found"/>
                  </Link>
                  <p className="pPlus">See more detail</p>
                </div>
                
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    movies: state.moviesFavourites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';


class Movie extends React.Component {

    componentDidMount() {
        const movieID = this.props.match.params.id;
        this.props.getMovieDetail(movieID); // acá se despacha la acción, se llena el estado de movie detail
    }


    render() {
        return (
            <div className="movie-detail">
                <h1 className='titleDetail'>{this.props.movie.Title}</h1>
                <div className='secondRowDatil'>
                    <img className='posterDetail' src={this.props.movie.Poster} alt="img not found"/>
                    <div className='secondColumDetail'>
                        <p className='subtitlesDetail'>Plot:</p>
                        <h2 className='subSubTitlesDetail'>{this.props.movie.Plot}</h2>
                        <p className='subtitlesDetail'>Year:</p>
                        <h2 className='subSubTitlesDetail'>{this.props.movie.Year}</h2>
                        <p className='subtitlesDetail'>Released:</p>
                        <h2 className='subSubTitlesDetail'>{this.props.movie.Released}</h2>
                        <p className='subtitlesDetail'>Genres:</p>
                        <h2 className='subSubTitlesDetail'>{this.props.movie.Genre}</h2>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        movie: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: movieID => dispatch(getMovieDetail(movieID))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie);
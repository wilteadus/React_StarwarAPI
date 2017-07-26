import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFilm } from '../actions/action_fetchfilm'
import { fetchCast } from '../actions/action_fetchcast'
import { cancelSelect } from '../actions/action_cancelSelect'

class FilmList extends Component {
    constructor(props) {
        super(props);
        this.renderFilm=this.renderFilm.bind(this);
        this.renderCast=this.renderCast.bind(this);
    }
    componentDidMount() {
        this.props.fetchFilm();
    }

    renderFilm(data) {
        return(
            <tr
                key={ data.title }
                onClick={()=>this.props.fetchCast(data)}
            >
                <td colSpan="2"  className="movie">
                    { data.title }
                </td>
            </tr>
        );
    }
    renderCast(data) {
        return(
            <tr
                key={ data.name }
            >
                <td colSpan="2" className="character">
                    { data.name }
                </td>
            </tr>
        );
    }

    render() {
        if(!this.props.film){
            return <div>Loading...</div>
        } else if (this.props.select_film.selectedFilm == ''){
            return (
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td className="sub_head" colSpan="2">
                            <b>Choose a movie to see the character</b>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                        { this.props.film.map(this.renderFilm) }
                    </tbody>
                </table>
            )
        }
        else {
            return(
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td className="sub_head" colSpan="2">
                            <b>{ this.props.select_film.selectedFilm }</b>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                        { this.props.select_film.castList.map(this.renderCast) }
                        <tr onClick={ this.props.cancelSelect }><td><b>Go Back To Check Other Movies</b></td></tr>
                    </tbody>
                </table>
            )
        }
    }
}

function mapStateToProps({ film, select_film }) {
    return { film, select_film };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchFilm, fetchCast, cancelSelect },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmList)
import React , {Component} from "react";
import { connect } from "react-redux";
class Home extends Component{
    state ={age:0}
    render(){
        return(
            <div>
                <h3>อายุของคุณ :{this.props.age} ปี</h3>
                <button onClick={this.props.increteAge}>+คลิกบวกอายุ</button>
                <button onClick={this.props.decreteAge}>-คลิกบวกอายุ</button>                
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {age: state.counter}
}

function mapDisoatchToProps(dispatch) {
    return {
        increteAge: () => {
            dispatch({type: 'INCREMENT'})
        },
        decreteAge: () => {
            dispatch({type: 'DECREMENT'})
        }
    }

}
export default connect(mapStateToProps,mapDisoatchToProps)(Home)
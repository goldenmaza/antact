import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Props,
    DispatchProps,
    AppReducer
} from '../redux/constants/app';
import {
    getAPIData
} from '../redux/actions/app';

class App extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.loadButton = this.loadButton.bind(this);
    }

    loadButton(event) {
        event.preventDefault();

        this.props.getAPIData();
    }

    render() {
        const { response } = this.props;console.log(response);
        return (
            <>
                <input id='loadButton' className='input' type='button' title='LOAD' value='LOAD' onClick={this.loadButton} />
            </>
        );
    }
}

const mapStateToProps = (state:any):AppReducer => ({
    response: state.appComponent.response
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...bindActionCreators({
        getAPIData
    }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

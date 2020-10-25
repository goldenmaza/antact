import { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    AppReducer
} from '../redux/constants/app';
import {
    getAPIData
} from '../redux/actions/app';

class App extends Component<AppReducer> {
    constructor(props) {
        super(props);

        this.loadButton = this.loadButton.bind(this);
    }

    loadButton(event) {
        event.preventDefault();

        this.props.actions.getAPIData();
    }

    render() {
        return (
        );
    }
}

const mapStateToProps = state:AppReducer => ({

});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: bindActionCreators({
        getAPIData
    }, dispatch)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));

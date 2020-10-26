import React, { Component } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Props,
    DispatchProps,
    AppReducer,
    SERVICE_API_ENDPOINT,
    FAILURE_API_ENDPOINT
} from '../redux/constants/app';
import {
    getAPIData,
    clearData
} from '../redux/actions/app';

class App extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.loadButton = this.loadButton.bind(this);
        this.failureButton = this.failureButton.bind(this);
        this.clearButton = this.clearButton.bind(this);
    }

    loadButton(event) {
        event.preventDefault();

        this.props.getAPIData(SERVICE_API_ENDPOINT);
    }

    failureButton(event) {
        event.preventDefault();

        this.props.getAPIData(FAILURE_API_ENDPOINT);
    }

    clearButton(event) {
        event.preventDefault();

        this.props.clearData();
    }

    render() {
        const { loading, response, failure } = this.props;
        return (
            <article>
                <section>
                    <div className='container'>
                        <input id='loadButton' className='input' type='button' title='LOAD' value='LOAD' onClick={this.loadButton} />
                        <input id='failureButton' className='input' type='button' title='ERROR' value='ERROR' onClick={this.failureButton} />
                        <input id='clearButton' className='input' type='button' title='CLEAR' value='CLEAR' onClick={this.clearButton} />
                    </div>
                </section>
                <section>
                    <div className='container'>
                    {loading &&
                        <div className='indicator'></div>
                    }
                    </div>
                </section>
                <section>
                    <div className='container response'>
                    {response !== null &&
                        <pre>{JSON.stringify(response, null, '   ')}</pre>
                    }
                    </div>
                </section>
                <section>
                    <div className='container failure'>
                    {failure !== null &&
                        <pre>{JSON.stringify(failure, null, '   ')}</pre>
                    }
                    </div>
                </section>
            </article>
        );
    }
}

const mapStateToProps = (state:any):AppReducer => ({
    loading: state.appComponent.loading,
    response: state.appComponent.response,
    failure: state.appComponent.failure
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...bindActionCreators({
        getAPIData,
        clearData
    }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

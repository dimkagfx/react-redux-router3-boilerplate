import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";


const App = ({children}) => (children);

App.propTypes = {
	children: PropTypes.object,
};

const connectToRedux = connect();

export default connectToRedux(App);

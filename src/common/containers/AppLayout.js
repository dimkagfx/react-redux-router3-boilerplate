import React, {Component} from "react";
import {connect} from "react-redux";

class AppLayout extends Component {

	componentDidMount() {
		document.title = "Login";
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-2 bg-default p-t-3 nav--full-height">
						Test Test Test
					</div>
					<div className="col-xs-10 m-t-5">
						{this.props.children}
					</div>
				</div>
			</div>);
	}
}

AppLayout.propTypes = {
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const connectToRedux = connect(
	mapStateToProps,
	mapDispatchToProps,
);

export default connectToRedux(AppLayout);

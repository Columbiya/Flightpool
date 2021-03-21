import { connect } from "react-redux";
import { Redirect } from "react-router";

const mapStateToProps = state => ({
    isLoggedIn: state.login.isLoggedIn
});

export function withRedirect(Element) {
    function ElementWithRedirect(props) {
        if (!props.isLoggedIn) return <Redirect to={'/login'} />

        return (
            <Element {...props} />
        );
    }

    return connect(mapStateToProps, null)(ElementWithRedirect);
}

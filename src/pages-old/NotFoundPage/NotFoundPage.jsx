import React from "react";
import './NotFoundPage.scss';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="not-found">
                <strong className="not-found__error">
                    404
                </strong>
                <h1>Page not found</h1>
                <small className="not-found__error-details">
                    Requsted page could not be found or reached
                </small>
            </div >
        )
    }
}

export default NotFoundPage;
import React from "react"
import {connect} from "react-redux"
import {getData} from "../actions/index"

const mapPropsToState = state => {
    return { articles: state.remoteArticles.slice(0,10) };
};

class Post extends React.Component {
    onComponentMount() {
        this.props.getData()
    }

    render() {
        return (
          <ul>
            {this.props.articles.map(el => (
              <li key={el.id}>{el.title}</li>
            ))}
          </ul>
        );
      }
}

export default connect(mapPropsToState, {getData})(Post)

import React from 'react';
import {connect} from 'react-redux';
import {ideasAction} from '../actions/ideasAction'

class IdeaList extends React.Component {


  handleIdea(event){

    this.props.ideasAction(event.target.value)

  }

  render(){
    const ideaList = this.props.ideas.map(idea =>
      <div>
        {idea.text}
      </div>
    )
    return(
      <div>
        <form>
          Idea:- <input className="ideaBox" type="text" placeholder="Enter your idea"
            autoComplete="off" onSubmit={()=>this.handleIdea.bind(this)} />
          <input type="submit"/>
        </form>
        <hr/>
        {ideaList}
      </div>
        )
      }


}

const mapStateToProps = (state) => ({
  ideas:state.ideas.ideas
})

export default connect(mapStateToProps,{ideasAction})(IdeaList)

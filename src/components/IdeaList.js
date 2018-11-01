import React from 'react';
import {connect} from 'react-redux';
import {ideasAction,toggleAction} from '../actions/ideasAction';
import './IdeaList.css'

class IdeaList extends React.Component {
  constructor(props){
    super(props);
    this.handleIdea =this.handleIdea.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleIdea(event){
    console.log(event.target.value,'event')
    event.preventDefault()
    this.props.ideasAction(event.target.idea.value,event.target.industry.value)

  }

  handleVisibility(id){
    this.props.toggleAction(id)
  }

  render(){
    const ideaList = this.props.ideas.filter(idea => idea.visibility === true)
    .map(idea =>
      <div className = "ideaBox" key={idea.id}>
        Idea:-{idea.text}<br/>
        Industry:-{idea.industry}<br/>
        <button onClick={() => this.handleVisibility(idea.id)}>Hide</button>
      </div>
    )
    return(
      <div>
        <form onSubmit={this.handleIdea}>
          Idea:- <input className="ideaText" name="idea" type="text" placeholder="Enter your idea"
                 autoComplete="off" /><br/>
          Industry:-<input className="industry" name="industry" type="text" placeholder="Enter your idea"
                    autoComplete="off" /><br/>
          <input type="submit" />
        </form>
        <hr/>

        <div className="header">
          <h4>Idea Board</h4>
        </div>

        <div className="ideaContainer">
          {ideaList}
        </div>
        </div>
        )
      }


}

const mapStateToProps = (state) => ({
  ideas:state.ideas.ideas
})

export default connect(mapStateToProps,{ideasAction,toggleAction})(IdeaList)

import React from 'react';
import {connect} from 'react-redux';
import {ideasAction} from '../actions/ideasAction';
import './IdeaList.css'

class IdeaList extends React.Component {
  constructor(props){
    super(props);
    this.handleIdea =this.handleIdea.bind(this);
  }

  handleIdea(event){
    console.log(event.target.value,'event')
    this.props.ideasAction(event.target.value)

  }

  render(){
    const ideaList = this.props.ideas.map(idea =>
      <div className = "ideaBox">
        {idea}
      </div>
    )
    return(
      <div>


        Idea:- <input className="idea" type="text" placeholder="Enter your idea"
          autoComplete="off"  onDoubleClick={this.handleIdea}/>
        <input type="submit" />

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

export default connect(mapStateToProps,{ideasAction})(IdeaList)

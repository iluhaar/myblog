import React from "react";

class ProfileStatus extends React.Component {
    
  state = {
      editMode: false,
      status: null
  }

  activeEditMode = () => {
    this.setState( {
        editMode: true
    })
  }
  deactiveEditMode = () => {
    this.setState( {
        editMode: false,
    })
    console.log('fasfdas')
  }
  
    render() {
        return (
      <div>
          {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activeEditMode} >{this.props.status}</span>
        </div>}
        {this.state.editMode && 
        <div>
          <input autoFocus={true} onBlur={this.deactiveEditMode} value={this.props.status}></input>
        </div>}
      </div>
    );
  }
}

export default ProfileStatus;

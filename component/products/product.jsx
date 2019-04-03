import React, {Component} from 'react';
import RichTextEditor, {createEmptyValue} from 'react-rte';
import {convertToRaw} from 'draft-js';
import autobind from 'class-autobind';

//import {EditorValue} from './RichTextEditor';

//  Props = {};
//  State = {
//   value: EditorValue,
//   format: string,
//   readOnly: boolean,
// };

export default class EditorDemo extends Component {
  props=this.Props;
  state=this.State;

  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      value: createEmptyValue(),
      format: 'html',
      readOnly: false,
    };
  }

  render() {
    let {value, format} = this.state;

    return (
      <div className="container editor-demo">
        
        <div className="row">
          <RichTextEditor
            value={value}
            onChange={this._onChange}
            className="react-rte-demo"
            placeholder="Tell a story"
            toolbarClassName="demo-toolbar"
            editorClassName="demo-editor"
          
          />
        </div>
        
        <div className="row">
          <textarea
            className="source"
            placeholder="Editor Source"
            value={value.toString(format)}
            onChange={this._onChangeSource}
          />
        </div>
        
      </div>
    );
  }

  _logState() {
    let editorState = this.state.value.getEditorState();
    let contentState = window.contentState = editorState.getCurrentContent().toJS();
    console.log(contentState);
  }

  _logStateRaw() {
    let editorState = this.state.value.getEditorState();
    let contentState = editorState.getCurrentContent();
    let rawContentState = window.rawContentState = convertToRaw(contentState);
    console.log(JSON.stringify(rawContentState));
  }

  _onChange(value) {
    this.setState({value});
  }

  _onChangeSource(event) {
    let source = event.target.value;
    let oldValue = this.state.value;
    this.setState({
      value: oldValue.setContentFromString(source, this.state.format),
    });
  }

 /*  _onChangeFormat(event: Object) {
    this.setState({format: event.target.value});
  }

  _onChangeReadOnly(event: Object) {
    this.setState({readOnly: event.target.checked});
  } */
}
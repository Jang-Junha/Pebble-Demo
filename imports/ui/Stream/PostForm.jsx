import React, { Component } from 'react';
import ReactQuill from 'react-quill';

import postColl from '../../api/postColl.js';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.titleInput = React.createRef();
        this.quillInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const titleNode = this.titleInput.current;
        const quillEditor = this.quillInput.current.getEditor();

        const title = titleNode.value.trim();
        const content = quillEditor.getText();

        postColl.insert({
            title,
            summary: "This is a common summary.",
            content,
            createdAt: new Date()
        });

        titleNode.value = '';
        quillEditor.setText('');
    }

    render() {
        return (
            <form id="postForm" className="new-post" onSubmit={this.handleSubmit.bind(this)} >
                <input
                    type="text"
                    ref={this.titleInput}
                    placeholder="Type a title"
                />
                <br />
                <ReactQuill
                    ref={this.quillInput}
                    placeholder="Type for your new post!"
                />
                <br />
                <button
                    className="btn waves-effect"
                    type="submit"
                    form="postForm"
                    value="Submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default PostForm;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import voteColl, { removeVote } from '../../api/voteColl.js';

// Vote를 Materalize Card 형식으로 보여주는 Component
// props = { vote }, vote: object

class VoteSimpleView extends Component {
    constructor(props) {
        super(props);

        this.deleteThisVote = this.deleteThisVote.bind(this);
        this.renderPoll = this.renderPoll.bind(this);
    }

    deleteThisVote(event) {
        event.preventDefault();

        const _id = this.props.vote._id;
        removeVote(_id);
    }

    renderPoll() {
        return this.props.vote.poll.map((cand) => (
            <p key={cand.itemIdx}> {`  ${cand.name}: ${cand.count}표`} </p>
        ));
    }

    render() {
        const vote = this.props.vote;
        const sche = vote.schedule;
        return (
            <div className="card grey darken-3">
                <div className="card-content white-text">
                    <span className="card-title"> {vote.title} </span>
                    {this.renderPoll()}
                    <p> {`Schedule: ${sche.start.toLocaleString()} ~ ${sche.end.toLocaleString()}`} </p>
                </div>
                
                <div className="card-action">
                    {
                        <Link to={`/vote/${vote.voteId}`} className="brown-text text-lighten-5 disabled">투표하기</Link>
                    }
                    <a href="#" className="brown-text text-lighten-5" onClick={this.deleteThisVote}>지우기</a>
                </div>
            </div>
        )
    }
}

export default VoteSimpleView;
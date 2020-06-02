import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <div>
                <form data-testid="movie-form">
                    <input type="text" />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

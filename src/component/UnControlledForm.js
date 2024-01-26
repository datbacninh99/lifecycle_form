import React, { Component } from 'react';

class UnControllerForm extends Component {
    constructor() {
        super();
        // Khởi tạo các ref tham chiếu tới DOM
        this.bookId = React.createRef();
        this.bookName = React.createRef();
    }

    handleSubmit = (e) => {
        console.log("BookId:" + this.bookId.current.value + " BookName:" + this.bookName.current.value);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>UnControlled Form</h2>
                <form onSubmit={this.handleSubmit}>
                    BookId: <input type={"text"} name="bookId" ref={this.bookId} /><br />
                    BookName: <input type={"text"} name="bookName" ref={this.bookName} /><br />
                    <input type={"submit"} value="Submit" />
                </form>
            </div>
        );
    }
}

export default UnControllerForm;
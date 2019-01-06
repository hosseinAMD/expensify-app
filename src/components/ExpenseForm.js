import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';


class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description:props.expense ? props.expense.description :'',
            note:props.expense ? props.expense.note :'',
            amount:props.expense ? (props.expense.amount).toString() :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error:''
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*?$/)){
            this.setState(() => ({amount}));
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocused:focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            const error = 'Please fill both description and amount fields!'
            this.setState(() => ({error}));
        } else {
            this.setState(() => ({error:''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseInt(this.state.amount , 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                     />
                     <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                      />
                      <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                       /> 
                      <textarea
                        placeholder="Any note! (optional)"
                        rows="5"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                      >
                      </textarea>
                      <button>{this.props.expense ? 'Edit Expense' : 'Add Expense'}</button>
                </form>
            </div>
        );
    };
};

export default ExpenseForm;
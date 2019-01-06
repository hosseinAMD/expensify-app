import moment from 'moment';

export default [{
    id:'1',
    description:'Book',
    note:'',
    amount: 25000,
    createdAt: 0
}, {
    id:'2',
    description:'Gums',
    note:'',
    amount: 4000,
    createdAt: moment(0).subtract(4,'days').valueOf()
}, {
    id:'3',
    description:'Clothes',
    note:'',
    amount: 80000,
    createdAt: moment(0).add(4,'days').valueOf()
}];
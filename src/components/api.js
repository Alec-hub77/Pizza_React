import axios from 'axios';

export const Pizzas = () => {
    axios.get('http://localhost:3000/db.json').then(resp => {
        return resp.data.pizzas
    })
}


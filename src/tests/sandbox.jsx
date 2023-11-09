//import {fetch} from 'node-fetch';

const result =
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=EPHdw7WFvcqzXLwX6bqAM1RNjhXYEorU&s=cats', {
        'apikey': "EPHdw7WFvcqzXLwX6bqAM1RNjhXYEorU"
    })
        .then(response => response.text())
        .then(data => data.data)

        result
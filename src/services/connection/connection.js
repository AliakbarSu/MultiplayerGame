import io from 'socket.io-client';
import { AddChallengeRequest } from '../store/actions/game';
const socket = io('http://localhost:3000', {
    path: '/challenge'
});



export const locationChanged = (lat, long) => {
    return new Promise((resolve, reject) => {
        socket.emit('locationChanged', {lat, long}, res => {
            resolve(res)
        });
    })
    
}

export const connect = () => {
   

    socket.on('connect', () => {
        console.log('Connected')
    })
    
    
    
    socket.on('newChallenge', (data) => {
        console.log(data)
    })
    
    
    
    socket.on('exception', (data) => {
        console.log('event', data);
    })
    
    socket.on('disconnect', () => {
        console.log('Disconnected')
    })
}



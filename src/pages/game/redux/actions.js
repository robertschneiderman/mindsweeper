export const REQUEST_GAMES = 'REQUEST_GAMES';
export const REQUEST_GAME = 'REQUEST_GAME';
export const CREATE_GAME = 'CREATE_GAME';
export const UPDATE_GAME = 'UPDATE_GAME';
export const DESTROY_GAME = 'DESTROY_GAME';
export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';
export const REMOVE_GAME = 'REMOVE_GAMES';
export const GAME_ERROR = 'GAME_ERROR';

export const requestGames = () => ({
    type: REQUEST_GAMES,
});

export const requestGame = id => ({
    type: REQUEST_GAME,
    id
});

export const receiveGames = games => ({
    type: RECEIVE_GAMES,
    games
});

export const receiveGame = game => ({
    type: RECEIVE_GAME,
    game
});

export const removeGame = game => ({
    type: REMOVE_GAME,
    game
});

export const createGame = game => ({
    type: CREATE_GAME,
    game
});

export const updateGame = game => ({
    type: UPDATE_GAME,
    game
});

export const destroyGame = game => ({
    type: DESTROY_GAME,
    game
});

export const gameError = error => ({
    type: GAME_ERROR,
    error
});
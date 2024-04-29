import { create } from "zustand";
import { FILM_DATA } from "../../mocks/FilmData";

export const useCounter = create((set) => ({
    countWatch: 0,
    countFavorite: 0,
    incrementWatch: () => set((state) => ({ count: state.countWatch + 1 })),
    incrementFavorite: () => set((state) => ({ count: state.countFavorite + 1 })),
    decrementWatch: () => set((state) => ({ count: state.countWatch - 1 })),
    decrementFavorite: () => set((state) => ({ count: state.countFavorite - 1 })),
}));


export const useCard = create((set, get) => ({
    cards: FILM_DATA,
    toggleWatch: (id) => { set(state => ({ cards: state.cards.map(c => c.id === id ? { ...c, watch: !c.watch } : c) })) },
    toggleFavorite: (id) => { set(state => ({ cards: state.cards.map(c => c.id === id ? { ...c, favorite: !c.favorite } : c) })) },
    getWatch: (id) => {
        return get().cards.find(card => card.id === id)?.watch;
    },
    getFavorite: (id) => {
        return get().cards.find(card => card.id === id)?.favorite;
    },
    sortLowCards: () => {
        return get().cards.slice().sort((a, b) => a.rating - b.rating);
    },
    sortHighCards: () => {
        return get().cards.slice().sort((a, b) => b.rating - a.rating);
    },
    getCards: () => {
        return get().cards;
    },
    getCardsByFilterCat: (text) => {
        const filterFilm = get().cards.filter(item =>
            item.categories.some(cat =>
                cat.toLowerCase().startsWith(text.toLowerCase())));
        return filterFilm;
    }
}))
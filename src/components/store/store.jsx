import { create } from "zustand";
import { FILM_DATA } from "../../mocks/FilmData";
import { persist } from "zustand/middleware";
export const useCard = create(
  persist(
    (set, get) => ({
      cards: FILM_DATA,
      toggleWatch: (id) => {
        set((state) => ({
          cards: state.cards.map((c) =>
            c.id === id ? { ...c, watch: !c.watch } : c
          ),
        }));
      },
      toggleFavorite: (id) => {
        set((state) => ({
          cards: state.cards.map((c) =>
            c.id === id ? { ...c, favorite: !c.favorite } : c
          ),
        }));
      },
      addComment: (id, comments) => {
        set((state) => ({
          cards: state.cards.map((c) =>
            c.id === id ? { ...c, comments: comments } : c
          ),
        }));
      },
      getWatch: (id) => {
        return get().cards.find((card) => card.id === id)?.watch;
      },
      getCountWatch: () => {
        return get().cards.filter((card) => card.watch).length;
      },
      getCountFavorite: () => {
        return get().cards.filter((card) => card.favorite).length;
      },
      getFavorite: (id) => {
        return get().cards.find((card) => card.id === id)?.favorite;
      },
      sortLowCards: () => {
        return get()
          .cards.slice()
          .sort((a, b) => a.rating - b.rating);
      },
      sortHighCards: () => {
        return get()
          .cards.slice()
          .sort((a, b) => b.rating - a.rating);
      },
      getCard: (id) => {
        return get().cards[id];
      },
      getCards: () => {
        return get().cards;
      },
      getCardsByFilter: (filter, text) => {
        const filterFilm = get().cards.filter((item) =>
          item[filter].some((cat) =>
            cat.toLowerCase().includes(text.toLowerCase())
          )
        );
        return filterFilm;
      },
      getSimilarCards: (id, text) => {
        const filmSimilar = get()
          .cards.filter(
            (item) =>
              item.id !== id &&
              item.categories.some((cat) =>
                cat.toLowerCase().includes(text.toLowerCase())
              )
          )
          .slice(0, 2);
        return filmSimilar;
      },
    }),
    {
      name: "persistedStore",
      getStorage: () => localStorage,
    }
  )
);

export const selectFavorites = state => state.favorite.favorites;
export const selectFavoriteFilters = state => state.favorite.favoriteFilters;
export const selectIsFavoriteFiltered = state =>
  state.favorite.isFavoriteFiltered;
export const selectFavoriteFiltered = state => state.favorite.favoriteFiltered;

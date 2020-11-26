export const sortByEpisode = (a, b) => {
  if (a.fields.episode_id > b.fields.episode_id) return 1;
  if (a.fields.episode_id < b.fields.episode_id) return -1;
  return 0;
};

export const sortByYear = (a, b) => {
  const date1 = new Date(a.fields.release_date);
  const date2 = new Date(b.fields.release_date);
  return date1 - date2;
};

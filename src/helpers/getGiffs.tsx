export const getGiffs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=t6C0IDLeSFTN70loZRICY3vr4DFI9MYl&q=${category}&limit=20`;
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map(
    (img: {
      id: any;
      title: any;
      images: { downsized_medium: { url: any } };
    }) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    })
  );
  return gifs
};

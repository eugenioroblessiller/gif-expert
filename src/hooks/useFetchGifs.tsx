import React, { useEffect, useState } from "react";

import { getGiffs } from "../helpers/getGiffs";

interface GiffGridProps {
  category: string;
}

const useFetchGifs = ({ category }: GiffGridProps) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages: any = await getGiffs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;

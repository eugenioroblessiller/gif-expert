import React, { useEffect, useState } from 'react';

import { GiffItem } from '../components';
import useFetchGifs from '../hooks/useFetchGifs';

interface GiffGridPropd {
  category: string;
}

export function GiffGrid({ category }: GiffGridPropd) {
  const { images, isLoading } = useFetchGifs({ category });

  return (
    <div>
      {isLoading && <h2>Cargando...</h2>}
      <h4>{category}</h4>
      <ol className="card-grid">
        {images?.map((image: any) => {
          return <GiffItem key={image.id} image={image} />;
        })}
      </ol>
    </div>
  );
}

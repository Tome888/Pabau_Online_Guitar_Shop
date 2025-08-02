"use client";

import { gql, useQuery, ApolloError } from "@apollo/client";
import React, { createContext, useContext, useEffect, useState } from "react";

const GET_BRANDS = gql`
  query {
    findAllBrands {
      id
      name
      origin
      image
    }
  }
`;

export type Brand = {
  id: string;
  image: string;
  name: string;
  origin: string;
  __typename: string;
};

type BrandContextType = {
  brands: Brand[];
  loading: boolean;
  error: ApolloError | null;
};

const BrandContext = createContext<BrandContextType>({
  brands: [],
  loading: false,
  error: null,
});

export const useBrandContext = () => useContext(BrandContext);

export const BrandProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, loading, error } = useQuery(GET_BRANDS);
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    if (data?.findAllBrands) {
      setBrands(data.findAllBrands);
    }
  }, [data]);

  return (
    <BrandContext.Provider value={{ brands, loading, error: error ?? null }}>
      {children}
    </BrandContext.Provider>
  );
};

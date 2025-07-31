"use client";

import React from "react";

type Props = {
  total: number;
  start: number;
  count: number;
};

export default function PaginationInfo({ total, start, count }: Props) {
  return (
    // <p className="text-center text-sm text-gray-300 my-2">
    //   Showing {count === 0 ? 0 : start + 1}–{start + count} of {total} models
    // </p>

    <p className="text-center text-sm text-gray-300 my-2">
      Showing <b>{start + count} </b>
      Results from <b>{total}</b>
    </p>
  );
}

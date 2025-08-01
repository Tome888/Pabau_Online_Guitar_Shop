"use client";

import { useLanguage } from "@/app/providers/LanguageContext";
import React from "react";
import shop from "../../../../translations/shop";

type Props = {
  total: number;
  start: number;
  count: number;
};

export default function PaginationInfo({ total, start, count }: Props) {
  const { language } = useLanguage();
  const t = shop[language];
  return (
    <p className="text-center text-sm text-[#9292A3] my-2">
      {t.showing} <b>{start + count} </b>
      {t.results} <b>{total}</b>
    </p>
  );
}

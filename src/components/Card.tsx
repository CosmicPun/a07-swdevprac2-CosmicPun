"use client";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import InteractiveCard from "./InteractiveCard";

export default function Card({
  venueName,
  imgSrc,
  onRatingChange,
}: {
  venueName: string;
  imgSrc: string;
  onRatingChange?: (rating: number) => void;
}) {
  const [rating, setRating] = useState<number | null>(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number | null) => {
    const val = newValue ?? 0;
    setRating(val);
    onRatingChange?.(val);
  };

  return (
    <InteractiveCard contentName={venueName}>
      {/* Image */}
      <div className="w-full h-[220px] relative overflow-hidden rounded-t-lg">
        <Image
          src={imgSrc}
          alt={venueName}
          fill={true}
          className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="px-4 py-3">
        <p className="text-sm font-medium text-gray-800 tracking-wide truncate">
          {venueName}
        </p>

        {/* Rating */}
        <Rating
          id={`${venueName} Rating`}
          name={`${venueName} Rating`}
          data-testid={`${venueName} Rating`}
          value={rating}
          onChange={handleChange}
        />
      </div>
    </InteractiveCard>
  );
}
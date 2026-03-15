"use client";
import { useReducer } from "react";
import Card from "./Card";

const venues = ["The Bloom Pavilion", "Spark Space", "The Grand Table"];
const imgSrcs: Record<string, string> = {
  "The Bloom Pavilion": "/img/bloom.jpg",
  "Spark Space": "/img/sparkspace.jpg",
  "The Grand Table": "/img/grandtable.jpg",
};
 
type RatingMap = Map<string, number>;
 
type Action =
  | { type: "SET_RATING"; venue: string; rating: number }
  | { type: "REMOVE_VENUE"; venue: string };
 
function reducer(state: RatingMap, action: Action): RatingMap {
  const next = new Map(state);
  if (action.type === "SET_RATING") {
    next.set(action.venue, action.rating);
  } else if (action.type === "REMOVE_VENUE") {
    next.delete(action.venue);
  }
  return next;
}
 
const initialState: RatingMap = new Map(venues.map((v) => [v, 0]));

export default function CardPanel() {
  const [ratingMap, dispatch] = useReducer(reducer, initialState);
 
  const handleRatingChange = (venue: string, rating: number) => {
    dispatch({ type: "SET_RATING", venue, rating });
  };
 
  const handleRemoveVenue = (venue: string) => {
    dispatch({ type: "REMOVE_VENUE", venue });
  };

  return (
    <div className="w-full flex flex-col items-center p-4">
      {/* Cards row */}
      <div className="m-5 flex flex-row flex-wrap justify-around content-around gap-5">
        {venues.map((venue) => (
          <Card
            key={venue}
            venueName={venue}
            imgSrc={imgSrcs[venue]}
            onRatingChange={(rating) => handleRatingChange(venue, rating)}
          />
        ))}
      </div>
 
      {/* Venue list with ratings */}
      <div className="w-full">
        <p className="font-bold text-gray-800 mb-2">
          Venue List with Ratings : {ratingMap.size}
        </p>
        {Array.from(ratingMap.entries()).map(([venue, rating]) => (
          <div
            key={venue}
            data-testid={venue}
            className="mb-1 cursor-pointer hover:bg-gray-100 rounded"
            onClick={() => handleRemoveVenue(venue)}
          >
            {venue} : {rating}
          </div>
        ))}
      </div>
    </div>
  );
}
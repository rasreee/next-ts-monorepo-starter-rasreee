import { classed } from "@ijancleaning/tw";
import times from "lodash.times";

import { Shimmer } from "./shimmer";

const ShimmerList = classed("ul", "flex flex-col gap-5");

export interface FeedSkeletonProps {
  n?: number;
}

export const FeedSkeleton = ({ n = 3 }: FeedSkeletonProps) => {
  return (
    <ShimmerList>
      {times(n, (index) => (
        <li key={index}>
          <Shimmer />
        </li>
      ))}
    </ShimmerList>
  );
};

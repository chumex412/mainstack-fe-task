import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonLoaderProps } from "@/application/domain/entities/lib";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ count, baseColor, width }: SkeletonLoaderProps) => {
  return <Skeleton count={count} baseColor={baseColor} width={width} />;
};

export default SkeletonLoader;

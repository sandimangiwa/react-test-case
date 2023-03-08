import { Skeleton } from "antd";

export const SkeletonCardArticle = () => {
  return (
    <div style={{ cursor: "pointer" }}>
      <Skeleton.Image
        active
        style={{
          minWidth: "20em",
          maxWidth: "30em",
          height: "10em",
          marginBottom: "20px",
        }}
      />
      <Skeleton
        style={{ minWidth: "20em", maxWidth: "30em", height: "10em" }}
        active
      ></Skeleton>
    </div>
  );
};

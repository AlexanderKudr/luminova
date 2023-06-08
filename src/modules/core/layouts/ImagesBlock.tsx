import { imagesStyles } from "@/styles/imageCard";
import { ImageList, ImageListItem, SxProps, Theme, Typography } from "@mui/material";
import { Button, Sx } from "@mantine/core";
import { AiFillHeart } from "react-icons/ai";
import { ImageResources, ImagesProps } from "@/types";
import { UseMutateFunction } from "@tanstack/react-query";

const { buttonHeart, buttonHeartActive, container, title } = imagesStyles as {
  buttonHeart: Sx;
  buttonHeartActive: Sx;
  container: SxProps<Theme>;
  title: SxProps<Theme>;
};
type ImagesBlockProps = {
  width: number;
  data: ImageResources;
  updateFavImages: UseMutateFunction<
    ImagesProps[] | undefined,
    unknown,
    string,
    {
      previousQuery: unknown;
    }
  >;
};

export function ImagesBlock({ width, data, updateFavImages}: ImagesBlockProps) {
  return (
    <>
      <ImageList variant="standard" cols={width > 568 ? 3 : 1} gap={8}>
        <>
          {data?.resources.map(({ public_id, url, filename, favorite }) => (
            <ImageListItem key={public_id} sx={container}>
              <img src={url} alt={filename} loading={"eager"} style={{ borderRadius: "8px" }} />
              <Button
                sx={favorite ? buttonHeartActive : buttonHeart}
                onClick={() => updateFavImages(public_id)}
              >
                <AiFillHeart size={16} />
              </Button>
              <Typography sx={title} variant={"h5"} className="title">
                {filename}
              </Typography>
            </ImageListItem>
          ))}
        </>
      </ImageList>
    </>
  );
}
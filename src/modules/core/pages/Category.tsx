import { ImagesBlock, Footer, PagePreview } from "../layouts";
import { useImages } from "../hooks";
import { useDebounce, useResizeWidth } from "@/hooks";
import { Loader } from "@/components";
import { PageWrapper } from "../components";

import { paths } from "@/utils";
import { downloadImage } from "../utils";

import { useParams } from "react-router-dom";
import { Resources } from "@/types";

export function Category() {
  const width = useResizeWidth();
  const { debouncedValue: debouncedWidth } = useDebounce<number>(width, 400);
  const { category } = useParams();
  const { data, isLoading, updateFavoriteImages } = useImages(category);

  const { images, pagePreview } = data || {};
  const { name: title } = paths.find(({ path }) => path === category) || {};

  return (
    <PageWrapper>
      {isLoading ? (
        <Loader style={{ margin: "auto" }} />
      ) : (
        <>
          <PagePreview
            imgURL={pagePreview?.img}
            title={title}
            description={pagePreview?.description}
          />
          <ImagesBlock
            width={debouncedWidth}
            data={images as Resources[]}
            updateFavImages={updateFavoriteImages}
            download={downloadImage}
          />
        </>
      )}
      <Footer />
    </PageWrapper>
  );
}

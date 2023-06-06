import { endpoints, handleFetch } from "@/utils";
import { Box } from "@mantine/core";
import { useParams } from "react-router-dom";
import { ImageResources } from "@/types";
import { Loader } from "@/components";
import { useImages } from "../hooks/useImages";
import { ImagesBlock, Footer } from "../layouts";
import { useResizeWidth } from "@/hooks";
import { PageContainer } from "../components";

export function Category() {
  const width = useResizeWidth();
  const accessToken = localStorage.getItem("accessToken");
  const { category } = useParams();

  const fetchCategoryImages = async (): Promise<ImageResources> => {
    const { categoriesImages, categoriesUserImages } = endpoints.images;
    if (!accessToken) {
      const fetchForAnyone = await handleFetch(
        categoriesImages,
        "POST",
        {},
        { folder: category, next_cursor: "" }
      );
      return fetchForAnyone;
    }
    const fetchForUser = await handleFetch(
      categoriesUserImages,
      "POST",
      {},
      { token: accessToken, next_cursor: "", category: category }
    );
    return fetchForUser;
  };

  const queryKey = ["images", accessToken, category];
  const images = useImages(queryKey, fetchCategoryImages);

  return (
    <PageContainer>
      <div>lalalalala</div>
      <Box>{images.isLoading ? <Loader /> : <ImagesBlock width={width} images={images} />}</Box>
      <Footer />
    </PageContainer>
  );
}

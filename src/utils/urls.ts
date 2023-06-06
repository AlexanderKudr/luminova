// const baseURL = "http://localhost:8080";
// const baseURL = "https://long-lime-caridea-slip.cyclic.app";
const baseURL = "http://kotatsu.fun:8080";
const images = "/images";

const endpoints = {
  images: {
    // imagesForNonUser: `http://localhost:8080/images/all`,
    // imagesForUser: `http://localhost:8080/images/allforuser`,
    imagesForNonUser: `${baseURL}${images}/all`,
    imagesForUser: `${baseURL}${images}/allforuser`,
    
    categoriesImages: `http://kotatsu.fun:8000/api/categories/all-images`,
    categoriesUserImages: `http://kotatsu.fun:8000/api/categories/all-favorites`,
    // getImagesForUser: `${baseURL}/api/images/user_favorites`,
    // addToFavorites: `${baseURL}/api/images/update_favorite`,
    addToFavorites: `${baseURL}${images}/favorites`,
    addImage: `${baseURL}${images}/upload`,
    searchImages: `${baseURL}${images}/search`,
  },
};

// const authURL = "http://localhost:8080/auth";
const authURL = "http://kotatsu.fun:8080/auth";

const authEndpoints = {
  login: `${authURL}/login`,
  register: `${authURL}/register`,
  logout: `${authURL}/logout`,
  protect: `${authURL}/protected`,
  refresh: `${authURL}/refresh`,
};

export { baseURL, endpoints, authEndpoints };

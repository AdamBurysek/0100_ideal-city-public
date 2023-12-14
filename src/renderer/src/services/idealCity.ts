import http from "../apiAxios";

class IdealCityDataService {
  getImages() {
    return http.get("/public");
  }

  addImage(data: any) {
    // THIS PART OF BACKEND IS NOT INCLUDED
    return console.log(data);
  }

  updateImage(id: string, value: boolean) {
    // THIS PART OF BACKEND IS NOT INCLUDED
    return console.log(id, value);
  }

  deleteImage(id: string) {
    // THIS PART OF BACKEND IS NOT INCLUDED
    return console.log(id);
  }

  getAdminPassword() {
    return http.get("/password");
  }

  getMaximumImages() {
    return http.get("/maximages");
  }
}

export default new IdealCityDataService();

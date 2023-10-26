import http from "../http-common.js";

class IdealCityDataService {
  getImages() {
    return http.get("/idealcity");
  }

  addImage(data) {
    return http.post("/idealcity", data);
  }

  updateImage(id, value) {
    return http.put("/idealcity", { id, value });
  }

  deleteImage(id) {
    return http.delete(`/idealcity/delete?id=${id}`);
  }
}

export default new IdealCityDataService();

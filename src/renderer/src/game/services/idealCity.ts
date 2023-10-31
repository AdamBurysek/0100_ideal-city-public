import http from "../apiAxios";

class IdealCityDataService {
  getImages() {
    return http.get("/idealcity");
  }

  addImage(data: any) {
    return http.post("/idealcity", data);
  }

  updateImage(id: string, value: boolean) {
    return http.put("/idealcity", { id, value });
  }

  deleteImage(id: string) {
    return http.delete(`/idealcity/delete?id=${id}`);
  }

  getAdminPassword() {
    return http.get("/password");
  }

  getMaximumImages() {
    return http.get("/maximages");
  }
}

export default new IdealCityDataService();

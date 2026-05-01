import http from "../../../services/api/http";
import { ENDPOINTS } from "../../../services/endpoints/endpoints";

const api = ENDPOINTS.auth;

export const login = async (data: { email: string; password: string }) => {
    const res = await http.post(api.login, data, {
    headers: {
      "x-show-success": "true",
    },
  });

    return res.data;
};
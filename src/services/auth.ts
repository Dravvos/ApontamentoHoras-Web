import { api } from "./auth-api";

async function getAccessToken() {
    const resp = await api.get('')
    if (resp.status === 200) {
        return resp.data;
    }
    return resp;
}

export { getAccessToken }
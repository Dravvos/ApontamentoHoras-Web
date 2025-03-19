import { get, post } from "@/services/api-handler";
import { setCookie } from "@/services/cookie-handler"
import global from "./global";

async function login(args: any) {
    try {
        const resposta = await post("Account/Login", args)
        if (resposta.status == 200) {
            const token = resposta.data.split(' ')[1];
            setCookie("delfos_token", token);
            return true
        }
        return false
    } catch (error) {
        console.error(error)
    }
}

async function signUp(args: any) {

    try {
        const resposta = await post('Account/CreateAccount', args)
        if (resposta.status == 200) {
            return true
        }
        return false
    } catch (error) {
        console.error(error)
    }
}

async function logout() {
    try {

    }
    catch (error) {
        console.error(error);
    }
}

export { login, signUp, logout }
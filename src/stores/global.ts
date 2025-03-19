import { getAccessToken } from "../services/auth";
import { jwtDecode } from "jwt-decode";
import router from "@/router";
import $ from 'jquery';
import { api } from "@/services/api";

var global = (function () {
    function pb() { }
    pb.util = (function () {

        function _u() { }

        _u.isNull = function (obj: any): boolean {
            return typeof obj === "undefined" || obj === null;
        }
        _u.isNullOrEmpty = function (obj: any): boolean {
            return this.isNull(obj) || obj === '';
        }

        _u.isNullOrWhiteSpace = function (obj: any): boolean {
            return this.isNull(obj) || obj.trim() === "";
        }

        _u.guidIsNullOrEmpty = function (guid: string | null): boolean {
            return this.isNullOrEmpty(guid) || guid === "00000000-0000-0000-0000-000000000000";
        }

        _u.isGuid = function (guid: string): boolean {
            const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            return pattern.test(guid);
        }

        _u.userIsAdmin = async function () {
            let token = "";
            let logged = false;
            let admin = false;
            let tokenInfo: any = null;
            token = await getAccessToken();

            if (global.util.isNullOrEmpty(token) === false) {
                logged = true;
                tokenInfo = await jwtDecode(token);
                if (tokenInfo.role === 'Admin')
                    admin = true;
                if (Math.floor(new Date().getTime() / 1000) > tokenInfo.exp)
                    logged = false;
            }
            else
                router.push('/')
            if (logged == false || logged == true && admin == false) {
                router.push('/');
            }
        }

        _u.isAuthenticated = async function () {
            let token = "";
            let logged = false;
            let tokenInfo: any = null;
            token = await getAccessToken();

            if (global.util.isNullOrEmpty(token) === false) {
                logged = true;
                tokenInfo = await jwtDecode(token);
                if (Math.floor(new Date().getTime() / 1000) > tokenInfo.exp)
                    logged = false;
            }
            else
                router.push('/')
            if (logged == false) {
                router.push('/');
            }
        }

        _u.base64ToBlobLink = function (base64: string): string {
            const byteCharacters = atob(base64);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'contentType' });
            return URL.createObjectURL(blob);
        }
        return _u;
    })();

    pb.ui = (function () {

        function _u() { }

        return _u;

    })();

    pb.event = (function () {
        function _e() {
        }

        _e.onKeyPress = function (selector: string, keyCode: number, callback: any) {
            $(selector).keypress(function (e: any) {
                if (e.keyCode === keyCode) {
                    if (callback)
                        callback(e);
                }
            });
        };

        _e.onPressEnter = function (selector: string, onPressEnter: any) {
            _e.onKeyPress(selector, 13, onPressEnter);
        };

        return _e;
    }());

    return pb;
})();

export default global;

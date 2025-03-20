<template>
    <header class="bg-dark">
        <v-container>
            <div class="row">
                <div class="col-1 my-3">
                    <v-btn base-color="primary" @click="router.push('/')">Home</v-btn>
                </div>

                <div v-if="logged == false" class="d-flex col-11 justify-content-end my-3 gap-4">
                    <v-btn base-color="secondary" @click="router.push('/Login')">Login</v-btn>
                    <v-btn base-color="grey" @click="router.push('/SignUp')">Sign Up</v-btn>
                </div>
                <div v-else class="col-11 d-flex justify-content-end my-3 gap-3">
                    <v-btn v-if="admin">Tabela Geral</v-btn>
                    <v-btn base-color="secondary" @click="logout">Log Out</v-btn>
                </div>
            </div>

        </v-container>
    </header>
</template>

<script setup lang="ts">
import { getAccessToken } from '../services/auth';
import { logout } from '@/stores/login';
import global from '@/stores/global';
import { onMounted, ref } from 'vue';
import { jwtDecode } from 'jwt-decode';
import router from '@/router';

const logged = ref(false);
const admin = ref(false);

onMounted(async () => {

    const token = ref<string>("");
    var tokenInfo: any = null;
    token.value = await getAccessToken();

    if (global.util.isNullOrEmpty(token.value) === false) {
        logged.value = true;
        tokenInfo = await jwtDecode(token.value);
        if (tokenInfo.role === 'Admin')
            admin.value = true;
        if (Math.floor(new Date().getTime() / 1000) > tokenInfo.exp)
            logged.value = false;
    }

});

</script>
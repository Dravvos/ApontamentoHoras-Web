<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-card class="elevation-6 mt-10" color="">
                    <v-row justify="center" align-content="center">
                        <v-col cols="12" class=" d-flex align-center">
                            <v-card-text class="mt-12">
                                <v-row justify="center">
                                    <v-col cols="12" sm="8" style="margin-top: -20%">
                                        <v-text-field label="Email" v-model="usuario" base-color="primary"
                                            color="primary" autocomplete="false" class="mt-16" />
                                        <v-text-field label="Password" v-model="password" outlined dense color="primary"
                                            autocomplete="false" type="password" />
                                        <v-btn color="indigo" dark block tile @click="loginUser()">Log in
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                <v-row justify="center">
                                    <v-col cols="12" sm="8">
                                        <div class="login-form">
                                            <v-card-text>
                                                <h2 class="text-center ">Não possui conta?</h2>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn tile outlined @click="router.push('/Signup')" color="secondary">
                                                    SIGN UP
                                                </v-btn>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-col>
                        <v-col cols="12" md="6" sm="12" class="rounded-bl-xl">

                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts" setup>
import router from '@/router';
import global from '@/stores/global';
import { login } from '@/stores/login';
import { onMounted, ref } from 'vue';

const usuario = ref<string>();
const password = ref<string>();

async function loginUser() {
    const ret = await login({
        username: usuario.value,
        password: password.value
    });
    if (ret === true) {
        console.log('Logado com sucesso');
        router.push('/');
    }
}

</script>
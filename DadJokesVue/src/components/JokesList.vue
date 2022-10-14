<template>
    <div class="bg-white rounded-lg shadow-sm w-full lg:w-6/12 mx-auto mb-10">
        <div class="container">
            <div class="border-b border-gray-100 flex justify-between items-center p-5 font-semibold">
                <!-- <span>asdasd</span> -->
                <span v-if="!!item">{{item.joke}}</span>
                <div class="flex gap-x-1">
                    <!-- Copy to clipboard -->
                    <button @click="onCopy"
                        class="p-1 border border-gray-600 text-gray-600 hover:border-green-300 hover:text-green-300 rounded-md ease-in-out duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                        </svg>
                    </button>
                    <!-- Refresh joke -->
                    <button @click="getJoke()"
                        class="p-1 border border-gray-600 text-gray-600 hover:border-green-300 hover:text-green-300 rounded-md ease-in-out duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="p-5 max-h-64 overflow-auto" v-if="items.length > 1">
                <JokeItem v-for="(joke,i) in items.slice(1)" :key="`joke-${i}`" :item="joke" />
            </div>
        </div>
        <div class="p-5 text-center border-t border-gray-100">
            That's all folks!
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import JokeItem from "./JokeItem.vue"
import Toast from "../extra/Toast"

export default {
    name: "JokesList",
    components: { JokeItem },
    computed: {
        ...mapGetters("jokes", ["items", "item"]),
    },
    methods: {
        ...mapActions("jokes", ["getJoke"]),
        onCopy() {
            navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
                if (result.state == "granted" || result.state == "prompt") {
                    navigator.clipboard.writeText(this.item.joke).then(() => {
                        Toast.fire({
                            icon: 'success',
                            title: 'Copied to clipboard'
                        })
                    }, () => {
                        Toast.fire({
                            icon: 'error',
                            title: 'Something went wrong'
                        })
                    });
                } else {
                    Toast.fire({
                        icon: 'error',
                        title: 'Unable to copy'
                    })
                }
            });
        }
    }
}
</script>
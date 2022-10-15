<template>
    <div class="flex justify-between items-center">
        <div class="p-2 flex-grow">
            {{item.joke}}
        </div>
        <div class="p-2">
            <button @click="onCopy"
                class="p-1 border border-gray-600 text-gray-600 hover:border-green-300 hover:text-green-300 rounded-md ease-in-out duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import Toast from "../extra/Toast"
export default {
    name: "JokeItem",
    props: {
        item: { required: true }
    },
    methods: {
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
<template>
    <div class="bg-white text-black shadow-sm">
        <div class="container mx-auto">
            <div class="flex justify-between items-center px-4 lg:px-0">
                <div class="text-lg">
                    <a href="/" class="font-bold">
                        <span>The</span>
                        <span class="text-green-800">DadJoke</span>
                    </a>
                </div>

                <div class="flex justify-start items-center gap-x-6">
                    <a :href="githubURL" target="_blank" class="inline-block py-4">
                        <img src="../assets/github.svg" alt="github icon"
                            class="h-4 w-4 hover:scale-125 ease-in-out duration-300" />
                    </a>
                    <a :href="paypalme" target="_blank" class="inline-block py-4">
                        <img src="../assets/credit-card.svg" alt="paypal me"
                            class="h-4 w-4 hover:scale-125 ease-in-out duration-300" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const githubURL = "https://github.com/gdscucer/open_web";
const paypalme = "https://www.paypal.com/donate/?business=8BYY4DHE4C5LE&no_recurring=0&currency_code=EUR";

</script>
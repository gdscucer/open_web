<template>
    <footer class="bg-white text-black border-t border-slate-100 fixed bottom-0 left-0 w-full">
        <div class="container mx-auto">
            <div class="flex justify-center items-center py-4 lg:px-0">
                <p class="mb-0">Made with ❤️ by <a :href="portfolioURL" class="text-green-600 hover:text-green-800"
                        target="_blank">Pantelis Theodosiou</a> for <a :href="hacktoberfestURL"
                        class="text-green-600 hover:text-green-800" target="_blank">Hacktoberfest 2022</a></p>
            </div>
        </div>
    </footer>
</template>

<script setup>
const portfolioURL = "https://pantelis.theodosiou.me/";
const hacktoberfestURL = "https://hacktoberfest.com/"
</script>
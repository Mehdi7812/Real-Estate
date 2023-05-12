<template>
    <HeaderViaBackground pageName="جستجوی ملک" />

    <section>
            <div class="container m-auto">
                <div class="bg-primary dark:bg-whiteSecondary p-1 py-3 rounded-[27px] flex flex-col-reverse lg:flex-row relative -top-20">
                    
                    <!-- FilterSearch Section -->
                    <PropertyCodeFilterEstate />

                    <!-- Estates Search -->
                    <div class="lg:w-4/6 py-5">
                        <!-- tags -->
                        <!-- <TagsSearch /> -->

                        <!-- Posts -->
                        <PropertyCodePosts />

                    </div>
                </div>
            </div>
    </section>
    
</template>

<script setup>

</script>
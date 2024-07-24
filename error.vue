<template>
  <div class="flex flex-col justify-center items-center h-screen text-center">
    <h1 class="text-5xl font-bold mb-8">{{ error.statusCode === 404 ? 'Oops! Page Not Found.' : 'Unexpected Error' }}</h1>
    <p class="text-md mb-8">
        {{ error.statusCode === 404 ? 'Seems you\'ve strayed to an uncharted tune. Let\'s come with reverse and head back.' : 'Something went wrong on our end. Let\'s come with reverse and get you back to safety.' }}
    </p>
    <div class="text-9xl font-bold mb-8">{{ error.statusCode }}</div>
    <NuxtLink to="/" class="text-white bg-gray-500 hover:bg-gray-700 font-bold py-3 px-4 rounded"> Back to Home </NuxtLink>
  </div>
</template>
  
  
<script>
export default {
  props: {
    error: Object,
  },
};
</script>
  

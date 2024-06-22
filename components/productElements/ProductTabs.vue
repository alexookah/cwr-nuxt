<script setup lang="ts">

const { product } = defineProps({
  product: { type: Object as PropType<Product>, required: true },
});

const initialTab = product.description ? 0 : 1;
const show = ref(initialTab);

const sizeGuideData = ref(null);

const fetchSizeGuideData = async () => {
  try {
    const response = await fetch(`https://api.printful.com/products/${product.id}/sizes`);
    const data = await response.json();
    console.log("data", data);
    sizeGuideData.value = data.result; // Adjust according to the structure of the returned data
  } catch (error) {
    console.error('Failed to fetch size guide data:', error);
  }
};

onMounted(() => {
  fetchSizeGuideData();
});
</script>

<template>
  <div>
    <nav class="border-b flex gap-8 tabs">
      <button v-if="product.description" type="button" :class="show === 0 ? 'active' : ''" @click.prevent="show = 0">{{ $t('messages.shop.productDescription') }}</button>
      <!-- <button type="button" :class="show === 1 ? 'active' : ''" @click.prevent="show = 1">{{ $t('messages.shop.reviews') }} ({{ product.reviewCount }})</button> -->
      <button type="button" :class="show === 1 ? 'active' : ''" @click.prevent="show = 1">Measure Yourself</button>
      <button type="button" :class="show === 2 ? 'active' : ''" @click.prevent="show = 2">Product Measurements</button>
    </nav>
    <div class="tab-contents">
      <div v-if="show === 0 && product.description" class="font-light mt-8 prose" v-html="product.description" />
      <!-- <ProductReviews v-if="show === 1" :product="product" /> -->
      <MeasureYourselfTab v-if="show === 1" :product="product" :size-guide-data="sizeGuideData" />
      <ProductMeasurementsTab v-if="show === 2" :product="product" :size-guide-data="sizeGuideData" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.tabs button {
  @apply border-transparent border-b-2 text-lg pb-8;
  margin-bottom: -1px;
}

.tabs button.active {
  @apply border-primary text-primary;
}
</style>

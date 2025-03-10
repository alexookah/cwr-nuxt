<script lang="ts" setup>

import { enhanceSizeGuideData } from '../../utils/enhanceSizeGuideData'

interface Props {
  product: Product;
}

const { product } = defineProps<Props>();

const advancedSizeChart = computed(() => {
  const item = product?.metaData?.find((item) => item.key === 'pf_advanced_size_chart');
  return item ? item.value : null;
});

onMounted(async () => {
  if (!advancedSizeChart.value) return;

  if (!import.meta.env.SSR) {
    const script = document.createElement('script');
    script.src = '/scripts/product-size-guide.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }

  setTimeout(async () => {
    try {
      const newValue = await enhanceSizeGuideData(advancedSizeChart.value);
      window.pfGlobal = {};
      window.pfGlobal.sg_data_raw = newValue || advancedSizeChart.value;
      window.pfGlobal.sg_primary_unit = 'centimeter';
    } catch (err) {
      console.error('Error initializing size guide:', err);
    }
  }, 100);
});

const openModal = () => {
  Printful_Product_Size_Guide.onSizeGuideClick();
};
</script>

<template>
  <button class="text-white font-bold py-2 px-4 rounded mb-4 bg-gray-600" v-if="advancedSizeChart" @click="openModal">Size Guide</button>
</template>

<style>
.pf-size-guide-modal-wrapper {
  position: fixed;
  z-index: 2147483648;
  padding: 20px;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
}

.pf-size-guide-modal {
  background-color: #fff;
  width: 100%;
  height: 100%;
  max-width: 900px;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  margin: auto;
}

.pf-size-guide-modal__close {
  height: 30px;
  width: 30px;
  cursor: pointer;
  border: 0;
  background: 0 0;
  padding: 0;
  -webkit-appearance: none;
  float: right;
  background: none !important;
}

.pf-size-guide-modal__header {
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
}

.pf-size-guide-modal__title {
  float: left;
  font-weight: bold;
  margin: 0;
  clear: none;
}

.pf-size-guide-modal__close img {
  height: 30px;
  width: 30px;
}

.pf-size-guide-modal__content {
  padding: 15px;
}

.pf-size-guide-modal__content h4 {
  margin: 24px 0 16px;
}
.pf-size-guide-modal__content p {
  margin: 0 0 10px;
}
.pf-size-guide-modal-size-chart {
  overflow-x: auto;
}

.pf-product-size-guide__tabs {
  white-space: nowrap;
}

.pf-product-size-guide__tabs,
.pf-size-guide-modal-size-chart__tabs {
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: inset 0 -1px 0 0 #e5e5e5;
}

.pf-product-size-guide__tab {
  cursor: pointer;
  vertical-align: bottom;
  margin-right: 8px;
  display: inline-block;
  padding: 12px 16px;
  border: 1px solid #f8f8f8;
  border-bottom: 1px solid #e5e5e5;
}

.pf-product-size-guide__tab.pf-product-size-guide__tab--active {
  border: solid 1px #e5e5e5;
  border-bottom: none;
}

.pf-size-guide-modal-size-chart__tab {
  font-size: 15px;
  font-weight: bold;
  border: solid 1px transparent;
  cursor: pointer;
  vertical-align: bottom;
  margin-right: 8px;
  display: inline-block;
  padding: 12px 8px;
  text-transform: capitalize;
}
.pf-size-guide-modal-size-chart__tab.pf-size-guide-modal-size-chart__tab--active {
  box-shadow: inset 0 -3px #222;
  font-weight: bold;
}

.pf-size-guide-modal-measurements {
  padding: 15px 0;
}

.pf-size-guide-modal-measurements__description {
  float: left;
  width: 65%;
  position: relative;
}

.pf-size-guide-modal-measurements__image {
  position: relative;
  width: 35%;
  padding: 5px;
  text-align: center;
  float: left;
}

@media only screen and (max-width: 960px) {
  .pf-size-guide-modal-measurements__image,
  .pf-size-guide-modal-measurements__description {
    float: none;
    display: block;
    width: 100%;
  }

  .pf-product-size-guide__tabs {
    overflow-x: scroll;
  }
}

.pf-size-guide-modal-size-chart__table {
  border-collapse: collapse;
  width: 100%;
  overflow-x: auto;
}

.pf-size-guide-modal-size-chart__table thead {
  text-transform: uppercase;
  font-weight: bold;
}

.pf-size-guide-modal-size-chart__table tr {
  border: none;
  border-collapse: collapse;
}

.pf-size-guide-modal-size-chart__table td {
  border: none;
  border-bottom: 1px solid #e5e5e5;
  font-size: 16px;
  text-transform: uppercase;
  padding: 12px 8px;
}

.pf-size-guide-modal-clear {
  clear: both;
}
</style>
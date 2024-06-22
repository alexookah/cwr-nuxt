<script setup lang="ts">

const props = defineProps({
  sizeGuideData: {
    type: Object as PropType<any>,
    required: true,
  },
});

const generateSizeTable = (sizeTables) => {
  if (!sizeTables) return '';

  let tableHeader = `<tr><td>Size</td>`;
  let tableBody = '';

  sizeTables.forEach((table) => {
    tableHeader += `<td>${table.title}</td>`;
    tableBody += `<tr><td>${table.size}</td>`;
    table.measurements.forEach((measurement) => {
      tableBody += `<td>${measurement.value}</td>`;
    });
    tableBody += '</tr>';
  });

  tableHeader += '</tr>';

  return `<table class="size-table">${tableHeader}${tableBody}</table>`;
};
</script>


<template>
  <div v-if="sizeGuideData && sizeGuideData.size_tables.length > 0">
    <div v-html="generateSizeTable(sizeGuideData.size_tables)" />
  </div>
  <div v-else>
    <p>No size information available.</p>
  </div>
</template>


const fetchImageSrcs = async (attachmentIds: any[]) => {
    const { data } = await useAsyncGql('getAttachedImageSrcs', { attachmentIds });

    const images = data?.value?.mediaItems?.edges?.map(edge => ({
        id: edge.node.databaseId,
        sourceUrl: edge.node.sourceUrl || ""
    })) ?? []

    return images;
};

// Vue Helper Function
export const enhanceSizeGuideData = async (advancedSizeChartValue: any) => {
    const sizeGuideData = JSON.parse(advancedSizeChartValue);

    const imageIds: number[] = [];

    if (sizeGuideData.modelMeasurements && sizeGuideData.modelMeasurements.imageId) {
        imageIds.push(sizeGuideData.modelMeasurements.imageId);
    }

    if (sizeGuideData.productMeasurements && sizeGuideData.productMeasurements.imageId) {
        imageIds.push(sizeGuideData.productMeasurements.imageId);
    }

    const uniqueImageIds = [...new Set(imageIds)];
    const images = await fetchImageSrcs(uniqueImageIds);

    // Map URLs to IDs
    const imageUrlMap: { [key: number]: string } = images.reduce<{ [key: number]: string }>((acc, image) => {
        acc[image.id] = image.sourceUrl;
        return acc;
    }, {});

    // Update sizeGuideData with image URLs
    if (sizeGuideData.modelMeasurements && sizeGuideData.modelMeasurements.imageId) {
        sizeGuideData.modelMeasurements.imageUrl = imageUrlMap[sizeGuideData.modelMeasurements.imageId] || null;
    }

    if (sizeGuideData.productMeasurements && sizeGuideData.productMeasurements.imageId) {
        sizeGuideData.productMeasurements.imageUrl = imageUrlMap[sizeGuideData.productMeasurements.imageId] || null;
    }

    return JSON.stringify(sizeGuideData, null, 2);
};
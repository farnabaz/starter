<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return $fetch(`/api/comark/get${route.path}`)
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <ComarkRenderer
    v-if="page"
    :tree="page"
  />
</template>

<template>
  <div>
    {{$store.state.todos}}
  </div>
</template>

<script>
export default {
  middleware: 'search'
}
</script>

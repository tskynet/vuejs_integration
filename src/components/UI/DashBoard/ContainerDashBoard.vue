<template>
  <div id="containerDashBoard">
    <ContainerCard></ContainerCard>
    <UserBehavior></UserBehavior>
  </div>
</template>
<script>
import ContainerCard from '@/components/UI/DashBoard/ContainerCard'
import UserBehavior from '@/components/UI/DashBoard/UserBehavior'
export default {
  name: 'ContainerDashBoard',
  components: {
    ContainerCard,
    UserBehavior
  },
  data: () => ({

  })
}
</script>
<style scoped>
</style>

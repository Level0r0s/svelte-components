<script>
  import ListItem from './ListItem'

  export let active = false
  export let value = null
</script>

<style>
  .dropdown-item {

  }
</style>

<div class="dropdown-item">
  <ListItem {active} {value}>
    <slot />
  </ListItem>
</div>

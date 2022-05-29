<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li v-for="menu in menus" :key="menu" class="nav-item">
          <a aria-current="page" class="nav-link active" href="#" v-if="menu.name == currentMenu">
            <span v-html="menu.iconSvg" />
            {{ menu.name }}
          </a>
          <a class="nav-link" href="#" v-else>
            <span v-html="menu.iconSvg" />
            {{ menu.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import menus from '../dummmy-data/menus.js'

console.log(menus)

export default {
  name: 'AppSideBar',
  data() {
    return {
      menus: menus,
      currentMenu: "Dashboard",
      test: [{name: "A", iconSvg: <strong>1</strong>}, {name:"B", iconSvg: <strong>2</strong>}]
    }
  }
}
</script>

<style>
/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
}
</style>
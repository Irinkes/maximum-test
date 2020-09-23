<template>
  <div class="menu">
    <ul>
        <li v-for="(item, index) in menuItems" :key="index">
            <menu-item :url="item.url" class="menu__link">{{item.name}}</menu-item>
        </li>
    </ul>
  </div>
</template>

<script>
	import MenuItem from '~/components/MenuItem.vue';

	export default {
		components: {
			MenuItem,
		},

		data: function() {
        return {
        	menuItems: [
	          { name: 'Главная', url: '/' },
	          { name: 'Расписание', url:'/Schedule' },
          ]
        }
    }
	}

</script>



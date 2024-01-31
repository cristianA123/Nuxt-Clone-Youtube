<script setup>
    const emit  = defineEmits(["toggleSidebar"]);

    const  search= ref('');
    const  darkMode= ref(false);
    const  listTags= ref([
      {
        id: 1,
        name: 'Todos'
      },
      {
        id: 2,
        name: 'Mixes'
      },
      {
        id: 3,
        name: 'Musica'
      },
      {
        id: 4,
        name: 'En tiempo real'
      },
      {
        id: 5,
        name: 'Lista de reproducción'
      },
      {
        id: 6,
        name: 'Musica de fondo'
      },
      {
        id: 7,
        name: 'Regueton'
      },
      {
        id: 8,
        name: 'Pop rock'
      },
      {
        id: 9,
        name: 'La liga'
      },
      {
        id: 10,
        name: 'Jazz'
      },
      {
        id: 11,
        name: 'Programación'
      },
      {
        id: 12,
        name: 'Pop latino'
      },
      // {
      //   id: 13,
      //   name: 'Videojuegos'
      // },
      // {
      //   id: 14,
      //   name: 'Competiciones'
      // },
      // {
      //   id: 15,
      //   name: 'Comedias'
      // },
      // {
      //   id: 16,
      //   name: 'Vistos'
      // },
    ]);

    const toggleSidebar = () => {

      emit('toggleSidebar');
    }
    const logout = () => {
      // Lógica para cerrar sesión
    }
</script>

<template>
  <div class="bg-miPrimary pb-4 pt-1">
    <div class="container mx-auto flex justify-between items-center">
      <div v-for="listTag in listTags" :key="listTag.id" class="flex justify-center items-center bg-miSecondary px-2 py-1 rounded-md text-sm">
       {{ listTag.name }}
      </div>

    </div>
  </div>
</template>

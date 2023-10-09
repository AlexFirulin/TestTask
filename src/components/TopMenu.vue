<script setup>
const Inventory = 'Inventory'
const today = new Date();
const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ru-RU', options);
};
const getDayOfWeek = (date) => {
  const daysOfWeek = [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда',
    'Четверг', 'Пятница', 'Суббота'
  ];
  return daysOfWeek[date.getDay()];
};
const formattedDate = formatDate(today);
const dayOfWeek = getDayOfWeek(today);
</script>

<template>
   <header class="header py-4 px-4 d-flex flex-fill justify-content-between align-items-center">
    <div class="header-parts d-flex align-items-center">
      <div class="logo d-flex align-items-center">
       <img src='../assets/vue.svg' alt="/" class="img-fluid">
       <div class="mx-2"><span class="logo-name">{{ Inventory }}</span></div>
     </div>
     <div>
       <input type="search" placeholder="Search" class="rounded-element search-input">
     </div>
    </div>
    <div class="date-picker d-flex flex-column">
     <span>{{ dayOfWeek }}</span>
     <span>{{ formattedDate }}</span>
    </div>

   </header>
</template>

<style scoped>
.header{
 background: #fffefe;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
 z-index: 2;
}
.logo-name {
 font-family: 'Rubik', sans-serif;
 font-size: 20px;
 font-weight: 700;
 color: #6fcf84;
 text-transform: uppercase;
 letter-spacing: 1px;
}
.header-parts {
  margin-left: 20%;
}
</style>
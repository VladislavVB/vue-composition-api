<template>
  <div class="modals">
    <h1>modals</h1>
    <button @click.stop="toggleModal">Show modal</button>
    <teleport to="body">
      <div v-if="visibleModal" @click.stop="toggleModal" class="modal">
        <div @click.stop="" class="modal-body">
          <h1>This is modal!!))</h1>
          <button @click.stop="toggleModal">Hide modal</button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script setup>  

const visibleModal = ref(false);

const toggleModal = () => {
  visibleModal.value = !visibleModal.value;
};
</script>
<style>
.modal {
  background-color: rgba(255, 255, 255, 0.377);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-body {
  background-color: #000;
}
</style>

<template>
  <div>
    <div>ItemList</div>
    <div v-for="item in items" :key="item.name">
      <div class="item">
        <div class="name">Name: {{ item.name }}</div>
        <div class="price">{{ item.price }} yen</div>
      </div>
    </div>
    <div>
      <label>
        Name
        <input type="text" v-model="newItemName" />
      </label>
      <label>
        Price
        <input type="number" v-model="newItemPrice" />
      </label>
      <button @click="addItem">add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  data() {
    return {
      items: [
        { name: "Egg", price: 100 },
        { name: "Apple", price: 160 }
      ],
      newItemName: "",
      newItemPrice: 0
    };
  },
  methods: {
    addItem() {
      if (this.newItemName != "")
        this.items.push({ name: this.newItemName, price: this.newItemPrice });
      this.newItemName = "";
      this.newItemPrice = 0;
    }
  }
};
</script>

<style></style>

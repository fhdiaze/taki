<template>
  <div>
    <label>Country</label>
    <input type="text" />

    <button @click="find">Find</button>
  </div>
  <div>
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Country</th>
        </thead>
        <tbody>
          <tr v-for="race in races">
            <td>{{ race.name }}</td>
            <td>{{ race.country }}</td>
            <td>{{ race.region }}</td>
            <td>{{ race.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      races: this.callFind(),
    }
  },
  methods: {
    find() {
      this.races = this.callFind('a');
    },
    callFind(country) {
      if (country == 'a') {
        return [{ id: 3, name: 'Rigo' }, { id: 4, name: 'Gfny Colombia' }];
      }

      return [{ id: 1, name: 'Gfny Nyc' }, { id: 2, name: 'Gfny Dominican Republic' }];
    }
  }
};
</script>

<style>
.modal {
  width: 400px;
}
</style>
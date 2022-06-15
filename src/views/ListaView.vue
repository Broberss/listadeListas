<script>
export default {
  data() {
    return {
      novo_time: "",
      times: [
        { id: "313526bc-ffc9-444a-b77a-334bc7e5b7de", name: "Time 1" },
        { id: "45f3d289-e236-487b-b1ed-a807855492a0", name: "Time 2" },
        { id: "6c2f765d-f8ff-4100-8a6c-5abf2f71c455", name: "Time 3" },
        { id: "ef7f22d8-3333-41c5-b854-fa32787ab0b8", name: "Time 4" },
      ],
    };
  },
  methods: {
    salvar() {
      if (this.novo_time !== "") {
        this.times.push({
          name: this.novo_time,
        });
        this.novo_time = "";
      } else {
        alert("sus");
      }
    },
    excluir(time) {
      const indice = this.times.indexOf(time);
      this.times.splice(indice, 1);
    },
  },
};
</script>
<template>Lista!!!!!!!!!!!!!!!!!!!</template>

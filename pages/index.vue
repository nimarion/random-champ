<template>
  <section class="hero" style="content-visibility: auto">
    <div class="hero-body">
      <div
        class="content container box"
        style="
          background-color: #b8c6db;
          background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
        "
      >
        <div class="columns is-vcentered">
          <div class="column is-6 is-narrow">
            <div class="container">
              <b-field label="Klasse">
                <b-dropdown v-model="selectedRoles" multiple aria-role="list">
                  <b-button
                    slot="trigger"
                    class="button is-primary"
                    type="button"
                  >
                    <span>Ausgewählte ({{ selectedRoles.length }})</span>
                  </b-button>
                  

                  <b-dropdown-item
                    v-for="item in roles"
                    :key="item"
                    :value="item"
                    aria-role="listitem"
                  >
                    <span>{{ item }}</span>
                  </b-dropdown-item>
                </b-dropdown>
              </b-field>
              <b-button type="button" class="button is-primary" @click="loadRandomChamption">Neuer Champion</b-button>
              <b-field v-if="selectedRoles.length > 0">
                <p class="content">
                  <b>Ausgewählte Rollen</b>
                  : {{ selectedRoles.join(", ") }}
                </p>
              </b-field>
            </div>
            <p class="content">
              <b>Dein Random Champion:</b>
              : {{ randomChampion.feName }}
            </p>
          </div>
          <div class="column is-6">
            <b-image
              v-if="randomChampion != null"
              rounded
              :src="randomChampion.image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import champions from "~/assets/champions.json";
export default {
  data() {
    return {
      json: champions,
      randomChampion: null,
      selectedRoles: [],
      roles: [],
    };
  },
  created() {
    this.roles = [...new Set(champions.flatMap((item) => item.feRole))];
    this.selectedRoles = [...new Set(champions.flatMap((item) => item.feRole))];
    this.loadRandomChamption();
  },
  methods: {
    loadRandomChamption() {
      const champions = this.json.filter((item) =>
        this.selectedRoles.some((role) => item.feRole.includes(role))
      );
      this.randomChampion =
        champions[Math.floor(Math.random() * champions.length)];
      if (this.randomChampion == null) {
        this.selectedRoles = [
          ...new Set(this.json.flatMap((item) => item.feRole)),
        ];
        this.loadRandomChamption();
      }
    },
  },
  watch: {
    selectedRoles: function (newValue, oldValue) {
      this.loadRandomChamption();
    },
  },
};
</script>
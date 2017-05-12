<!-- Define home page -->

<!-- Define template for home page -->
<template>
  <md-layout md-column>
    <!-- Display header -->
    <h1>Welcome to my page!</h1>

    <!-- Showcase my web application projects -->
    <md-layout md-align="center" class="section">
      <md-layout md-flex="80">
        <md-card>
          <md-card-header>
            <h1 class="md-title">Some Web Applications I've Made...</h1>
          </md-card-header>
          <md-tabs class="web-apps">
            <md-tab md-label="Personal Website">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
              <a href="https://syednashikaman.me">Showcase</a>
              <a href="https://github.com/SyedAman/syed-aman-personal-website">Repository</a>
            </md-tab>
            <md-tab md-label="Krieg Studios">
              <p>Krieg Studios is the Indie Game Developer company that I founded with the goal of making games that took a very unique and innovative twist to current trends.</p>
              <a href="https://kriegstudios.com">Showcase (WIP)</a>
              <a href="https://github.com/SyedAman">Repository (WIP)</a>
            </md-tab>
            <md-tab md-label="Krieg">
              <p>Krieg is a 5v5 Real Time Strategy game that I'm working on using Unreal Engine 4 and an array of other tools.</p>
              <a href="https://github.com/SyedAman">Showcase (WIP)</a>
              <a href="https://github.com/SyedAman">Repository (WIP)</a>
            </md-tab>
          </md-tabs>
        </md-card>
      </md-layout>

    </md-layout>

    <!-- Showcase my game development projects -->
    <md-layout md-align="center" class="section">
      <md-layout md-flex="80">
        <md-card>
          <md-card-header>
            <h1 class="md-title">Game Development</h1>
          </md-card-header>
          <md-header-text>
            Game development is my greatest passion. I spend a significant amount of my freetime developing a team based strategy game called Krieg
          </md-header-text>
          <md-tabs class="web-apps">
            <md-tab md-label="Krieg Studios">
              <p>Krieg Studios is the Indie Game Developer company that I founded with the goal of making games that took a very unique and innovative twist to current trends.</p>
              <a href="https://kriegstudios.com">Showcase</a>
            </md-tab>
            <md-tab md-label="Krieg">
              <p>Krieg is a 5v5 Real Time Strategy game that I'm working on using Unreal Engine 4 and an array of other tools.</p>
              <a href="https://github.com/SyedAman">Showcase</a>
            </md-tab>
            <md-tab md-label="YouTube Channel">
              <p>Krieg is a 5v5 Real Time Strategy game that I'm working on using Unreal Engine 4 and an array of other tools.</p>
              <a href="https://github.com/SyedAman">Showcase</a>
            </md-tab>
          </md-tabs>
        </md-card>
      </md-layout>
    </md-layout>

    <!-- Showcase my social media profiles -->
    <md-layout md-align="center" class="section">
      <md-layout md-flex="80">
        <md-card>
          <md-card-header>
            <h1 class="md-title">Follow Me! Get to Know Me!</h1>
          </md-card-header>
          <md-list>
            <md-list-item>Facebook</md-list-item>
            <md-list-item>Twitter</md-list-item>
            <md-list-item>LinkedIn</md-list-item>
            <md-list-item>GitHub</md-list-item>
            <md-list-item>Medium</md-list-item>
            <md-list-item>Instagram</md-list-item>
            <md-list-item>Email</md-list-item>
            <md-list-item>Google Plus</md-list-item>
          </md-list>
        </md-card>
      </md-layout>
    </md-layout>

  </md-layout>
</template>

<!-- Define home page specific styles -->
<style lang="stylus" scoped>
  .section
    margin-top 20px
    .md-card
      width 100%

  .web-apps
    a
      display block

</style>

<!-- Define controller for home page -->
<script></script>

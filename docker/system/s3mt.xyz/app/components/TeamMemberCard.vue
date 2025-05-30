<template>
  <div class="team-card relative overflow-hidden group">
    <div class="team-card-inner bg-indigo-900/80 rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-sm border border-indigo-600/50 transition-all duration-300">
      <div class="team-image-wrapper">
        <img 
          :src="imageUrl || '~/assets/images/team/placeholder.png'" 
          :alt="`${name} Photo`" 
          class="team-image w-40 h-40 rounded-lg object-cover border-4 border-indigo-500"
          loading="lazy"
        >
      </div>
      <div class="team-content flex-1">
        <h3 class="text-2xl font-semibold mb-2 text-white">{{ name }}</h3>
        <p class="text-indigo-300 mb-4">{{ title }}</p>
        <p class="text-gray-300 text-sm mb-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
          {{ bio }}
        </p>
        <div class="flex space-x-4 mt-2">
          <a 
            v-for="social in socialLinks" 
            :key="social.name"
            :href="social.url" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-indigo-400 hover:text-indigo-200 transition-colors duration-200"
          >
            <span class="sr-only">{{ social.name }}</span>
            <!-- Dynamically render social icons based on name -->
            <svg v-if="social.name === 'LinkedIn'" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path></svg>
            <svg v-if="social.name === 'GitHub'" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.397.098 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.853 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
             <!-- Add other social icons as needed -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SocialLink {
  name: string;
  url: string;
}

defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  socialLinks: {
    type: Array as () => SocialLink[],
    default: () => []
  }
})
</script>

<style scoped>
.team-card {
  transition: all 0.3s ease;
}

.team-card-inner {
  box-shadow: 0 0 25px rgba(80, 70, 230, 0.4);
}

.team-card:hover .team-card-inner {
  box-shadow: 0 0 30px rgba(93, 72, 255, 0.6);
  transform: translateY(-5px);
}

.team-image-wrapper {
  position: relative;
  z-index: 1;
}

.team-image {
  filter: contrast(1.1) saturate(1.2) drop-shadow(0 0 10px rgba(137, 87, 255, 0.4));
  transition: all 0.3s ease;
  object-fit: cover;
  object-position: center top; /* Adjust if needed */
}

.team-card:hover .team-image {
  filter: contrast(1.2) saturate(1.3) drop-shadow(0 0 15px rgba(148, 85, 255, 0.6));
}

/* Create synthwave grid overlay */
.team-card-inner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(93, 72, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(93, 72, 255, 0.05) 1px, transparent 1px);
  background-size: 15px 15px;
  z-index: 0;
  pointer-events: none;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.team-card:hover .team-card-inner::before {
  opacity: 0.8;
}

/* Add glow highlight */
.team-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, rgba(67, 56, 202, 0) 50%);
  transform: scale(0);
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.6s ease;
  z-index: -1;
}

.team-card:hover::after {
  transform: scale(1);
  opacity: 1;
}
</style> 
<script setup lang="ts">
useHead({
    meta: [{ name: "robots", content: "noimageindex" }],
});
</script>

<template>
    <div class="min-h-screen bg-black">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ProjectTimeline />
        <SkillsSection />
        <FooterSection />
    </div>
</template>

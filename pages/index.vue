<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-background p-8">
        <h1 class="text-4xl font-bold text-text mb-4">
            Добро пожаловать в наше демо!
        </h1>
        <p class="text-lg text-secondary mb-8 text-center max-w-2xl">
            Здесь мы показываем, как использовать токены цветов в Nuxt с Tailwind. Красивая структура, компоненты и
            кастомные стили!
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div class="card">
                <div class="icon">📦</div>
                <h2 class="card-title">Быстрая доставка</h2>
                <p class="card-text">Мы доставляем мгновенно по всему миру!</p>
            </div>

            <div class="card">
                <div class="icon">🔒</div>
                <h2 class="card-title">Безопасность</h2>
                <p class="card-text">Ваши данные под надежной защитой.</p>
            </div>

            <div class="card">
                <div class="icon">⚡</div>
                <h2 class="card-title">Высокая скорость</h2>
                <p class="card-text">Работаем быстрее, чем кто-либо.</p>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4">
            <button class="px-6 py-3 rounded-lg bg-primary text-background hover:bg-secondary transition">
                Основная кнопка
            </button>
            <button class="px-6 py-3 rounded-lg bg-secondary text-background hover:bg-primary transition">
                Вторая кнопка
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
// Ничего импортировать не надо — Tailwind с токенами работает автоматически
</script>

<style scoped>
.card {
    @apply flex flex-col items-center bg-background p-6 rounded-xl shadow-md hover:shadow-lg transition;
}

.icon {
    @apply text-5xl mb-4 text-primary;
}

.card-title {
    @apply text-xl font-semibold text-text mb-2;
}

.card-text {
    @apply text-center text-secondary;
}
</style>
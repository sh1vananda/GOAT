<script lang="ts">
  import { fly } from "svelte/transition";
  export let list: {
    slug: string;
    title: string;
    excerpt: string;
    cover: string;
    items: number;
  };
</script>

<article
  class="group relative mb-12 cursor-pointer hover:scale-[1.01] transition-transform"
  in:fly={{ y: 20, duration: 300 }}
>
  <a href="/lists/{list.slug}" class="block">
    <div class="aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <img
        src={list.cover}
        alt={list.title}
        class="w-full h-full object-cover transition-opacity opacity-90 group-hover:opacity-100"
      />
    </div>

    <div class="pt-4">
      <h2 class="text-2xl font-semibold mb-2">{list.title}</h2>
      <p class="text-gray-600 line-clamp-2">{list.excerpt}</p>
      <div class="mt-2 text-sm text-gray-500">
        {list.items} items • {new Date().toLocaleDateString()}
      </div>
    </div>
  </a>
</article>

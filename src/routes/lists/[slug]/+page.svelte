<script lang="ts">
  import { page } from "$app/stores";

  // Define interface for list data
  interface ListItem {
    title: string;
    image: {
      asset: {
        url: string;
      };
    };
    link?: string;
  }

  interface ListData {
    slug: string;
    title: string;
    coverImage: {
      asset: {
        url: string;
      };
    };
    items: ListItem[];
  }

  // Type the data prop
  export let data: ListData | undefined;

  // Type the loadedImages array
  let loadedImages: boolean[] = [];

  // Type the index parameter
  const onImageLoad = (index: number) => {
    loadedImages[index] = true;
  };
</script>

{#if data}
  <div class="list-container">
    <section class="list-item">
      <div
        class="image-container"
        style="background-image: url('{data.coverImage?.asset?.url ??
          ''}?auto=format&w=1920')"
      >
        <div class="overlay">
          <h1 class="title">{data.title}</h1>
        </div>
      </div>

      <div class="content-grid">
        {#each data.items as item, i}
          {#if item}
            <article class="item-card">
              <img
                src="{item.image?.asset?.url ?? ''}?auto=format&w=600"
                alt={item.title}
                class="item-image"
                on:load={() => onImageLoad(i)}
                class:loaded={loadedImages[i]}
              />
              <div class="item-content">
                <h3>{item.title}</h3>
                {#if item.link}
                  <a href={item.link} class="explore-btn">Explore →</a>
                {/if}
              </div>
            </article>
          {/if}
        {/each}
      </div>
    </section>
  </div>
{:else}
  <div class="loading">Loading...</div>
{/if}

<style>
  /* Existing styles remain unchanged */
</style>

<script lang="ts">
  const lists = [
    {
      slug: "tokyo-street-fashion",
      title: "Tokyo Street Fashion",
      image:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?auto=format&fit=crop&w=1920&q=80",
      description:
        "Exploring the vibrant and eclectic street fashion scene in Tokyo",
    },
    {
      slug: "minimalist-architecture",
      title: "Minimalist Architecture",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1920&q=80",
      description:
        "A curated collection of striking minimalist architectural designs",
    },
    {
      slug: "vintage-tech",
      title: "Vintage Tech",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80",
      description: "Nostalgic look at iconic technology from the past decades",
    },
  ];
</script>

<div class="list-container">
  {#each lists as list}
    <section class="list-item">
      <div
        class="image-container"
        style="background-image: url('{list.image}')"
      >
        <div class="overlay">
          <a href="/lists/{list.slug}" class="title">{list.title}</a>
        </div>
      </div>
    </section>
  {/each}
</div>

<style>
  .list-container {
    scroll-snap-type: none;
    overflow-x: hidden;
  }

  .list-item {
    position: relative;
    height: 100vh;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    background-color: black;
  }

  .image-container {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .overlay {
    position: absolute;
    bottom: 4rem;
    left: 4rem;
  }

  .title {
    font-family: "Work Sans", sans-serif;
    font-weight: 700;
    font-size: 4.5rem;
    letter-spacing: -0.03em;
    line-height: 0.9;
    color: white;
    text-decoration: none;
    display: block;
    transition: opacity 0.3s ease;
  }

  .title:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .list-item {
      padding: 4px;
    }

    .overlay {
      bottom: 2rem;
      left: 2rem;
    }

    .title {
      font-size: 3rem;
    }
  }
</style>

# Anime Random Peek Image API

This project provides a API to fetch a randomly anime image.

**Live Demo: <https://anime-random-peek-image-api.vercel.app>**

<a href="https://github.com/ittuann/Anime-Random-Peek-Image-API" target="_blank">
  <img src="https://anime-random-peek-image-api.vercel.app" alt="Anime Random Peek Image" align="right" height="425" />
</a>

- What is "Peek"?

In the world of anime and manga, The word "Peek" is commonly used to describe a character stealing a quick glance, often with a sense of shyness or curiosity. In Japanese, the concept is "[チラ見](https://dic.pixiv.net/a/%E3%83%81%E3%83%A9%E8%A6%8B)" (pronounced: Chira-mi), or "[チラッ](https://dic.pixiv.net/a/%E3%83%81%E3%83%A9%E3%83%83)" (Chira), and is sometimes associated as Mugen Ouka.

- Usage guide

For Markdown：

```md
![Anime Random Peek Image](https://anime-random-peek-image-api.vercel.app)
```

Specify an image:

```md
![Kurisu Makise](https://anime-random-peek-image-api.vercel.app?img=Kurisu%20Makise.png)
```

For right-aligned, use the HTML tag:

```html
<img src="https://anime-random-peek-image-api.vercel.app" alt="Anime Random Peek Image" align="right" />
```

Custom size:

```html
<img src="https://anime-random-peek-image-api.vercel.app" alt="Anime Random Peek Image" align="right" height="425" />
```

- How it works

This project is built with Node.js and Express, using the serverless architecture, deployed on Vercel.

- Develop

```bash
git clone https://github.com/ittuann/Anime-Random-Peek-Image-API.git
cd Anime-Random-Peek-Image-API
pnpm i
pnpm start
```

Deploy your own version with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fittuann%2FAnime-Random-Peek-Image-API&project-name=anime-random-peek-image-api&repository-name=anime-random-peek-image-api&demo-title=Anime%20Random%20Peek%20Image&demo-description=Anime%20Random%20Peek%20Image&demo-url=https%3A%2F%2Fanime-random-peek-image-api.vercel.app)

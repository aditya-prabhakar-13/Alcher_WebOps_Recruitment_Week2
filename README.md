# Plex-Style Movie Browser (React)

A modern Plex-style movie discovery interface built with **React**, using the [JsonFakery Movies API](https://jsonfakery.com/movies/paginated).

## 🎬 Features

- Browse sections: **Featured**, **Binge-Worthy Shows**, and **Most Popular in India**
- Real-time **search** with instant results
- Smooth **horizontal drag** scrolling of movie rows
- Clickable **movie cards** with poster, title, and cast
- Fullscreen **popup detail view** with blurred movie background
- Responsive & mobile-friendly layout

## 🛠️ Tech Stack

- React (via Vite or Create React App)
- CSS (no frameworks)
- Fetch API for live movie data

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/plex-react-browser.git
   cd plex-react-browser
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧩 File Structure

```
src/
├── App.jsx              # Main app logic & layout
├── index.js             # Entry point
├── styles/
│   └── styles.css       # Custom styles
├── components/
│   ├── Header.jsx       # Logo, nav, search bar
│   ├── Section.jsx      # Scrollable rows by category
│   ├── MovieCard.jsx    # Individual movie cards
│   └── Popup.jsx        # Fullscreen popup with movie detail
```

## 🔗 API

- Movie data: [https://jsonfakery.com/movies/paginated](https://jsonfakery.com/movies/paginated)

## 📌 Notes

- Image loading fallbacks are built-in.
- Touch and mouse scrolling work seamlessly.
- Code is modular and easy to extend.

## 📄 License

MIT — free to use and modify.

---

Made with 🍿 by Aditya Prabhakar
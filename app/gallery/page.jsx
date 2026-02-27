import Image from "next/image";

async function getImages() {
  const res = await fetch("https://picsum.photos/v2/list?page=1&limit=6", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Gallery() {
  const images = await getImages();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Image Gallery</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px"
      }}>
        {images.map((img) => (
          <div key={img.id}>
            <Image
              src={img.download_url}
              alt={img.author}
              width={300}
              height={200}
            />
            <p>{img.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
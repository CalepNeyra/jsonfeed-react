import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Consumo de API Pública
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="space-y-8">
      {/* Sección Hero */}
      <section className="text-center py-16 bg-white rounded-xl shadow-sm border border-slate-200">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">JSONFeed Explorer 🚀</h1>
        <p className="text-lg text-slate-600">
          Explora las mejores publicaciones consumidas en tiempo real desde nuestra API.
        </p>
      </section>

      {/* Listado de la API (Shadcn UI) */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Últimas Publicaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(post => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="capitalize text-lg line-clamp-1">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 line-clamp-3">{post.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Entities() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Consumimos 6 elementos para mostrar
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-slate-800">Listado Completo (Entidades)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map(item => (
          <Card key={item.id} className="border-l-4 border-l-blue-500 shadow-sm">
            <CardHeader>
              {/* Propiedades 1 y 2: ID y Título */}
              <CardTitle className="capitalize flex items-center gap-3">
                <span className="bg-slate-200 text-slate-800 px-2 py-1 rounded text-sm">#{item.id}</span>
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Propiedad 3: Cuerpo */}
              <p className="text-slate-600">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
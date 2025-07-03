import React, { useState } from "react";

const categories = [
  "Electronics", "Fashion", "Books", "Mobile Phones",
  "Laptops", "Home Appliances", "Beauty", "Sports",
  "Toys", "Groceries",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setFiltered(val
      ? categories.filter(c =>
          c.toLowerCase().includes(val.toLowerCase())
        )
      : []
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6 relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products or categories..."
        className="w-full px-4 py-3 border rounded-full shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {filtered.length > 0 && (
        <ul className="absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
          {filtered.map((cat, i) => (
            <li
              key={i}
              onClick={() => {
                setQuery(cat);
                setFiltered([]);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

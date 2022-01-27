// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "product"]{
        title,
        slug,
        defaultProductVariant,
        body
       
    }`
      )
      .then((data) => {console.log(data); setAllPosts(data) })
      .catch(console.error);
  }, []);

  return (
    <div className=" min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center cursive">Blog Posts</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my blog posts page!
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData &&
            allPostsData.map((product, index) => (
              <Link to={"/product/" + index} key={product.slug.current}>
                <span
                  className="block h-64 relative rounded shadow leading-snug bg-white
                      border-l-8 border-green-400"
                  key={index}
                >
                  <img
                    className="w-full h-full rounded-r p-16 absolute"
                    src={urlFor(product.defaultProductVariant.images[0].asset._ref).width(100).url()}
                    alt=""
                  />
                  <span
                    className="block relative h-full flex justify-end items-end pr
                      -4 pb-4"
                  >
                     <div className="pricess">
          <p className="proo">£{product.defaultProductVariant.price}</p>
          </div>
                    <h2
                      className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700
                        text-red-100 bg-opacity-75 rounded"
                    >
                      {product.title}
                    </h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
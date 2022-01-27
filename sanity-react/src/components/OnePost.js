// src/component/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
console.log(slug)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="product"][${slug}]{
           title,
           slug,
           defaultProductVariant,
           body
                    
       }`
      )
      .then((data) => {console.log(data); setPostData(data)})
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="bg-gray-200 min-h-screen p-12 mt-5 bg-white">
      <div className="container shadow-lg mx-auto rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="cursive text-3xl lg:text-6xl mb-4">
                {postData.title}
              </h2>
            </div>
          </div>
          <img
            className="w-full object-contain rounded-t"
            src={urlFor(postData.defaultProductVariant.images[0].asset._ref).url()}
            alt=""
            style={{ height: "350px" }}
          />
            <div className="pricess">
          <p className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700
 text-red-100 bg-opacity-75 rounded">£{postData.defaultProductVariant.price}</p>
          </div>
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full text-center">
            <h3> {postData.title}</h3>
          <p>{postData.body.en[0].children[0].text}</p>
        </div>
      </div>
    </div>
  );
}
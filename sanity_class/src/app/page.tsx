import Image from "next/image";
import {createClient} from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from "../../sanity/env";

const client = createClient(
  projectId: 
  dataset:
  apiVersion: "2022-03-25",
  useCdn: false
);
export default function Home() {
  const blogs = await client.fetch(`*[_type == "pet"]`);
  console.log(blogs);
  return (
    <div>
      <h1>All Content</h1>
    </div>
  );
}

// @flow strict
import { personalData } from "@/utils/data/personal-data";

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data;
};

async function BlogDetails({params}) {
  const slug = params.slug;
  const blog = await getBlog(slug);
 
  return (
    <div>
    </div>
  );
};
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  // Return an array of objects containing the slug values
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
    { slug: 'third-post' }
  ]
}

export default BlogDetails;
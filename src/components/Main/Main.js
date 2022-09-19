import { useBlogs } from '../../hooks/useBlogs';
import BlogCard from '../BlogCard/BlogCard';

export default function Main() {
  const blogs = useBlogs();

  return blogs.map(blog => <BlogCard key={blog.title} {...blog} />);
}
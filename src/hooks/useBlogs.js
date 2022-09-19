import { useEffect } from 'react';
import { useState } from 'react';
import { getBlogs } from '../services/blogs';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return blogs;
}
import { useState, useEffect } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
// import { portfolioAPI, BlogPost } from '../lib/supabase';
import { formatDate } from "../lib/utils";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   loadPosts();
  // }, []);

  // const loadPosts = async () => {
  //   try {
  //     const data = await portfolioAPI.getBlogPosts();
  //     setPosts(data);
  //   } catch (error) {
  //     console.error('Error loading blog posts:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (loading) {
    return (
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">Loading articles...</div>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Blog & Insights
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Sharing knowledge, experiences, and insights from my development
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 flex items-center justify-center">
                <div className="text-6xl">📝</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>
                      {formatDate(post.published_at || post.created_at)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>5 min read</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <a
                  href={`#blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
  read?: boolean;
}

export interface Visitor {
  id?: string;
  ip_address: string;
  user_agent?: string;
  visited_at?: string;
  page_views?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  published: boolean;
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar_url?: string;
  linkedin_url?: string;
  display_order: number;
  created_at: string;
}

export const portfolioAPI = {
  async submitContactMessage(data: Omit<ContactMessage, 'id' | 'created_at' | 'read'>) {
    const { data: result, error } = await supabase
      .from('contact_messages')
      .insert(data)
      .select()
      .maybeSingle();

    if (error) throw error;
    return result;
  },

  async trackVisitor(ipHash: string, userAgent?: string) {
    const { data: result, error } = await supabase
      .from('visitors')
      .insert({
        ip_address: ipHash,
        user_agent: userAgent,
      })
      .select()
      .maybeSingle();

    if (error) throw error;
    return result;
  },

  async getVisitorCount() {
    const { count, error } = await supabase
      .from('visitors')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;
    return count || 0;
  },

  async getBlogPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) throw error;
    return data as BlogPost[];
  },

  async getBlogPost(slug: string) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (error) throw error;
    return data as BlogPost | null;
  },

  async getTestimonials() {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) throw error;
    return data as Testimonial[];
  },
};

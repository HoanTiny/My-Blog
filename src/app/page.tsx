'use client';
import FeaturedWorks from '@/components/FeaturedWorks';
import HeroSection from '@/components/HeroSection';
import RecentPost from '@/components/RecentPost';
// Tạo theme để đảm bảo nhất quán giữa server và client

export default function Home() {
  return (
    <div>
      <HeroSection />
      <RecentPost />
      <FeaturedWorks />
    </div>
  );
}

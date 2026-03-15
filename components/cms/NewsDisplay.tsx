"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { formatDate } from "@/lib/cms/utils";
import Link from "next/link";
import { useQuery } from '@tanstack/react-query';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string | null;
  publishedAt: string;
  createdBy: {
    name: string;
  };
  slug: string;
  region: string;
}

interface NewsDisplayProps {
  region: string;
  limit?: number;
}

export default function NewsDisplay({
  region,
  limit = 3,
}: NewsDisplayProps) {
  const { data: newsData, isLoading, error } = useQuery({
    queryKey: ['news', region],
    queryFn: async () => {
      const response = await fetch(`/api/cms/news?region=${region}&status=published`);
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      return data.slice(0, limit);
    },
  });

  if (isLoading) return <div className="text-center py-8">Loading...</div>;

  if (error) return <div className="text-center py-8 text-red-500">Error loading news</div>;

  const news = newsData || [];

  if (news.length === 0) {
    return <div className="text-center py-8 text-gray-500">No news available</div>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-6 px-8">
{news.map((item: NewsItem) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
        >
          {item.coverImage && (
            <div className="relative w-full h-40">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-5">
             <p className=" max-w-max text-xs font-semibold text-white uppercase bg-green-950 px-2 py-1 rounded-sm">
              News
            </p>
          
            <p className="font-semibold text-[#1a2e1a] mt-2 line-clamp-2">
              {item.title}
            </p>
            <p className="text-sm text-[#2e3d35] mt-2 line-clamp-3">
              {item.excerpt}
            </p>
               <p className="font-semibold text-gray-400 mt-2 line-clamp-2">
              YASCON-{item.region} 
            </p>
            <p className="text-xs font-semibold text-gray-400 mt-1">
              {formatDate(item.publishedAt)}
            </p>
            <Link
              href={`/news/${item.slug}`}
              className="text-sm font-semibold text-green-700 mt-3">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

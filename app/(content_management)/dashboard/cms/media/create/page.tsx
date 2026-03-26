"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentDashboardUser } from '@/lib/cms/auth';
import { CmsRegion, CmsMediaType, ContentStatus } from '@/lib/cms/constants';
import { Upload } from 'lucide-react';

interface MediaFormData {
  title: string;
  description: string;
  fileUrl: string;
  mediaType: CmsMediaType;
  region: CmsRegion;
  status: ContentStatus;
}

export default async function MediaCreatePage() {
  const router = useRouter();
  const [user] = useState(await getCurrentDashboardUser());
  if (!user) {
    router.push('/dashboard/login');
    return null;
  }

  const [formData, setFormData] = useState<MediaFormData>({
    title: '',
    description: '',
    fileUrl: '',
    mediaType: 'gallery' as CmsMediaType,
    region: user.region as CmsRegion,
    status: 'draft',
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState('');

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch(formData.mediaType === 'gallery' ? '/api/cms/upload/image' : '/api/cms/upload/video', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      setFormData(prev => ({ ...prev, fileUrl: data.url }));
      setPreview(data.url);
    } catch (error) {
      alert('File upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/cms/media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const error = await res.json();
        alert(error.error || 'Failed to create media item');
        return;
      }
      alert('Media item created successfully!');
      router.push('/dashboard/cms');
    } catch (error) {
      alert('Error creating media item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-[#1a2e1a] mb-8">Add {formData.mediaType === 'gallery' ? 'Gallery Item' : 'Document'}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Media Type *</label>
          <select
            value={formData.mediaType}
            onChange={(e) => {
              setFormData(prev => ({ ...prev, mediaType: e.target.value as CmsMediaType }));
              setPreview('');
              setFormData(prev => ({ ...prev, fileUrl: '' }));
            }}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="gallery">Gallery Image</option>
            <option value="document">Document/PDF</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Title *</label>
          <input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-vertical"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Region</label>
          <select
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value as CmsRegion })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="national">National</option>
            <option value="northern">Northern</option>
            <option value="central">Central</option>
            <option value="southern">Southern</option>
            <option value="eastern">Eastern</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">File Upload *</label>
          <div className="flex flex-col gap-3">
            {preview && (
              <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                <Image src={preview} alt="Preview" fill className="object-cover" />
                <button type="button" onClick={() => { setPreview(''); setFormData(prev => ({ ...prev, fileUrl: '' })); }} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded">
                  ✕
                </button>
              </div>
            )}
            <label className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
              <Upload size={20} />
              <span className="text-sm">{uploading ? 'Uploading...' : `Click to upload ${formData.mediaType === 'gallery' ? 'image' : 'document/PDF'}`}</span>
              <input type="file" accept={formData.mediaType === 'gallery' ? 'image/*' : 'application/pdf'} onChange={handleFileUpload} className="hidden" disabled={uploading} />
            </label>
          </div>
        </div>
        <div className="flex gap-4 pt-4 border-t">
          <button type="submit" disabled={loading || uploading} className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-400 font-semibold">
            {loading ? 'Creating...' : 'Create Media Item'}
          </button>
          <button type="button" onClick={() => router.back()} className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}


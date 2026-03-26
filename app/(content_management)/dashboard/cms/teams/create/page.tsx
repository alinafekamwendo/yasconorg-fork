"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentDashboardUser } from '@/lib/cms/auth';
import { CmsRegion, CmsTeamType, ContentStatus } from '@/lib/cms/constants';
import { Upload } from 'lucide-react';
import Image from 'next/image';

interface TeamFormData {
  name: string;
  role: string;
  joined: string;
  avatar: string;
  focus: string;
  teamType: CmsTeamType;
  region: CmsRegion;
  status: ContentStatus;
}

export default async function TeamsCreatePage() {
  const router = useRouter();
  const [user] = useState(await getCurrentDashboardUser());
  if (!user) {
    router.push('/dashboard/login');
    return null;
  }

  const [formData, setFormData] = useState<TeamFormData>({
    name: '',
    role: '',
    joined: '',
    avatar: '',
    focus: '',
    teamType: 'management' as CmsTeamType,
    region: user.region as CmsRegion,
    status: 'draft',
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState('');

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/cms/upload/image', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();
      setFormData(prev => ({ ...prev, avatar: data.url }));
      setPreview(data.url);
    } catch (error) {
      alert('Avatar upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/cms/teams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const error = await res.json();
        alert(error.error || 'Failed to create team member');
        return;
      }
      alert('Team member created successfully!');
      router.push('/dashboard/cms');
    } catch (error) {
      alert('Error creating team member');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-[#1a2e1a] mb-8">Add Team Member</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Role *</label>
          <input
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Joined Year</label>
          <input
            type="text"
            value={formData.joined}
            onChange={(e) => setFormData({ ...formData, joined: e.target.value })}
            placeholder="e.g. 2025"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Team Type *</label>
          <select
            value={formData.teamType}
            onChange={(e) => setFormData({ ...formData, teamType: e.target.value as CmsTeamType })}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="management">Management</option>
            <option value="board">Board of Trustees</option>
          </select>
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
          <label className="block text-sm font-semibold text-slate-700 mb-2">Avatar Image</label>
          <div className="flex flex-col gap-3">
            {preview && (
              <div className="relative w-full h-48 rounded-lg overflow-hidden border">
                <Image src={preview} alt="Preview" fill className="object-cover" />
                <button type="button" onClick={() => { setPreview(''); setFormData(prev => ({ ...prev, avatar: '' })); }} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded">
                  ✕
                </button>
              </div>
            )}
            <label className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg hover:border-blue-400 cursor-pointer transition-colors">
              <Upload size={20} />
              <span className="text-sm">{uploading ? 'Uploading...' : 'Click to upload avatar'}</span>
              <input type="file" accept="image/*" onChange={handleAvatarUpload} className="hidden" disabled={uploading} />
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Focus / Bio * <span className="text-xs">(Full description/bio)</span></label>
          <textarea
            value={formData.focus}
            onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
            rows={8}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-vertical"
            required
          />
        </div>
        <div className="flex gap-4 pt-4 border-t">
          <button type="submit" disabled={loading || uploading} className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-400 font-semibold">
            {loading ? 'Creating...' : 'Create Team Member'}
          </button>
          <button type="button" onClick={() => router.back()} className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}


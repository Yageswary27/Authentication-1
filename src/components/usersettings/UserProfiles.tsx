import React, { useEffect, useState } from 'react';

interface UserProfileData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  website_url: string | null;
  is_active: boolean;
  is_superuser: boolean;
  created_at: string;
  updated_at: string;
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = () => {
    setLoading(true);
    setError(null);

    fetch('http://192.168.1.116:8000/api/v1/auth/me', {
      headers: {
        'X-api-key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2ZmOGQyN2NiZWE5NzA3YmIyNzEwYjYiLCJlbWFpbCI6InlhcmlAZ21haWwuY29tIiwiaXNfc3VwZXJ1c2VyIjpmYWxzZSwiZXhwIjoxNzQ1NDY2OTY3fQ.s2rpFKyJMGFfG8GuhDnDxS4oI6oj-27JAaU29x1qSdY',
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch user profile: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setUserData(data.data);
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
        setError('Could not fetch profile. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500 py-10">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-600 space-y-4">
        <p>{error}</p>
        <button
          onClick={fetchProfile}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative mt-8 p-8 w-full max-w-5xl min-h-[400px] mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 transition-all duration-300 hover:shadow-3xl">
      {userData?.is_active && (
        <span className="absolute top-4 right-4 bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-full shadow">
          ✅ Active
        </span>
      )}

      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">User Profile</h2>
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white flex items-center justify-center text-4xl font-bold shadow-lg">
          {userData?.first_name?.charAt(0)}
          {userData?.last_name?.charAt(0)}
        </div>
        <p className="mt-4 text-lg font-semibold text-gray-700">
          {userData?.first_name} {userData?.last_name}
        </p>
      
      </div>

      {userData && (
        <div className="space-y-4 text-gray-700 text-base divide-y divide-gray-200">
          <div className="flex justify-between pt-2">
            <span className="font-medium">User ID:</span>
            <span className="text-right text-gray-600">{userData.id}</span>
          </div>
          <div className="flex justify-between pt-2">
            <span className="font-medium">Email:</span>
            <span className="text-right text-gray-600">{userData.email}</span>
          </div>
          <div className="flex justify-between pt-2">
            <span className="font-medium">Website:</span>
            <span className="text-right text-blue-600 underline underline-offset-2">
              {userData.website_url || 'N/A'}
            </span>
          </div>
          <div className="flex justify-between pt-2">
            <span className="font-medium">Created At:</span>
            <span className="text-right text-gray-600">
              {new Date(userData.created_at).toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
